-- ============================================================
-- YHG Backend — Initial Schema
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor)
-- ============================================================

-- UUID support
create extension if not exists "uuid-ossp";

-- ────────────────────────────────────────────────────────────
-- ENUMS
-- ────────────────────────────────────────────────────────────

create type enquiry_source as enum ('web_form', 'phone', 'walk_in', 'referral');
create type enquiry_status as enum ('new', 'contacted', 'converted', 'lost');
create type project_type   as enum ('service', 'bodywork', 'mot', 'sale', 'other');
create type project_stage  as enum ('enquiry', 'quoted', 'approved', 'in_progress', 'complete', 'closed');
create type event_type     as enum ('stage_change', 'note', 'photo', 'document');
create type aftercare_type as enum ('mot_reminder', 'service_reminder', 'satisfaction', 'custom');
create type aftercare_status as enum ('pending', 'sent', 'cancelled');

-- ────────────────────────────────────────────────────────────
-- CUSTOMERS
-- ────────────────────────────────────────────────────────────

create table customers (
  id         uuid        primary key default uuid_generate_v4(),
  name       text        not null,
  email      text,
  phone      text,
  notes      text,
  created_at timestamptz not null default now()
);

-- Unique index on email (nullable — only enforced when email is present)
create unique index customers_email_unique on customers (email) where email is not null;

-- ────────────────────────────────────────────────────────────
-- ENQUIRIES
-- ────────────────────────────────────────────────────────────

create table enquiries (
  id           uuid            primary key default uuid_generate_v4(),
  customer_id  uuid            references customers (id) on delete set null,
  source       enquiry_source  not null default 'web_form',
  status       enquiry_status  not null default 'new',
  enquiry_type text,
  vehicle      text,
  message      text,
  project_id   uuid,           -- populated when converted to a project
  created_at   timestamptz     not null default now()
);

-- ────────────────────────────────────────────────────────────
-- PROJECTS
-- ────────────────────────────────────────────────────────────

create table projects (
  id                   uuid           primary key default uuid_generate_v4(),
  customer_id          uuid           references customers (id) on delete set null,
  enquiry_id           uuid           references enquiries (id) on delete set null,
  type                 project_type   not null default 'other',
  stage                project_stage  not null default 'enquiry',
  title                text           not null,
  vehicle_reg          text,
  vehicle_make         text,
  vehicle_model        text,
  vehicle_year         int,
  description          text,
  assigned_to          text,
  estimated_completion date,
  created_at           timestamptz    not null default now(),
  updated_at           timestamptz    not null default now()
);

-- Back-reference: enquiries.project_id → projects
alter table enquiries
  add constraint fk_enquiry_project
  foreign key (project_id) references projects (id) on delete set null;

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger projects_updated_at
  before update on projects
  for each row execute function update_updated_at();

-- ────────────────────────────────────────────────────────────
-- PROJECT EVENTS (append-only timeline / audit log)
-- ────────────────────────────────────────────────────────────

create table project_events (
  id          uuid          primary key default uuid_generate_v4(),
  project_id  uuid          not null references projects (id) on delete cascade,
  type        event_type    not null default 'note',
  stage_from  project_stage,
  stage_to    project_stage,
  content     text,
  created_by  text,
  created_at  timestamptz   not null default now()
);

-- ────────────────────────────────────────────────────────────
-- AFTERCARE
-- ────────────────────────────────────────────────────────────

create table aftercare (
  id            uuid             primary key default uuid_generate_v4(),
  project_id    uuid             not null references projects (id) on delete cascade,
  type          aftercare_type   not null,
  scheduled_for date             not null,
  status        aftercare_status not null default 'pending',
  message       text,
  sent_at       timestamptz,
  created_at    timestamptz      not null default now()
);

-- ────────────────────────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ────────────────────────────────────────────────────────────

alter table customers      enable row level security;
alter table enquiries      enable row level security;
alter table projects       enable row level security;
alter table project_events enable row level security;
alter table aftercare      enable row level security;

-- Service role (our API routes) — full access to everything
create policy "service_role_all" on customers      for all using (auth.role() = 'service_role');
create policy "service_role_all" on enquiries      for all using (auth.role() = 'service_role');
create policy "service_role_all" on projects       for all using (auth.role() = 'service_role');
create policy "service_role_all" on project_events for all using (auth.role() = 'service_role');
create policy "service_role_all" on aftercare      for all using (auth.role() = 'service_role');

-- Anonymous users (web form submissions) — insert only
create policy "anon_insert_customers" on customers for insert with check (true);
create policy "anon_insert_enquiries" on enquiries for insert with check (true);
