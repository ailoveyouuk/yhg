// ────────────────────────────────────────────────────────────
// Backend / Supabase types
// ────────────────────────────────────────────────────────────

export interface Customer {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  notes: string | null;
  created_at: string;
}

export type EnquirySource = 'web_form' | 'phone' | 'walk_in' | 'referral';
export type EnquiryStatus = 'new' | 'contacted' | 'converted' | 'lost';

export interface Enquiry {
  id: string;
  customer_id: string | null;
  source: EnquirySource;
  status: EnquiryStatus;
  enquiry_type: string | null;
  vehicle: string | null;
  message: string | null;
  project_id: string | null;
  created_at: string;
  customer?: Customer;
}

export type ProjectType = 'service' | 'bodywork' | 'mot' | 'sale' | 'other';
export type ProjectStage = 'enquiry' | 'quoted' | 'approved' | 'in_progress' | 'complete' | 'closed';

export interface Project {
  id: string;
  customer_id: string | null;
  enquiry_id: string | null;
  type: ProjectType;
  stage: ProjectStage;
  title: string;
  vehicle_reg: string | null;
  vehicle_make: string | null;
  vehicle_model: string | null;
  vehicle_year: number | null;
  description: string | null;
  assigned_to: string | null;
  estimated_completion: string | null;
  created_at: string;
  updated_at: string;
  customer?: Customer;
  enquiry?: Enquiry;
}

export type EventType = 'stage_change' | 'note' | 'photo' | 'document';

export interface ProjectEvent {
  id: string;
  project_id: string;
  type: EventType;
  stage_from: ProjectStage | null;
  stage_to: ProjectStage | null;
  content: string | null;
  created_by: string | null;
  created_at: string;
}

export type AftercareType = 'mot_reminder' | 'service_reminder' | 'satisfaction' | 'custom';
export type AftercareStatus = 'pending' | 'sent' | 'cancelled';

export interface Aftercare {
  id: string;
  project_id: string;
  type: AftercareType;
  scheduled_for: string;
  status: AftercareStatus;
  message: string | null;
  sent_at: string | null;
  created_at: string;
}

// ────────────────────────────────────────────────────────────
// Vehicle / Service types
// ────────────────────────────────────────────────────────────

export type VehicleStatus = 'available' | 'reserved' | 'sold';
export type VehicleType = 'car' | 'van';
export type PriceType = 'fixed' | 'from' | 'quote';

export interface Vehicle {
  id: string;
  status: VehicleStatus;
  type: VehicleType;
  make: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  mileage: number;
  colour: string;
  fuel: string;
  transmission: 'Manual' | 'Automatic';
  doors: number;
  engine: string;
  power_bhp: number;
  co2_gkm: number;
  mot_expiry: string;
  service_history: string;
  previous_owners: number;
  hpi_clear: boolean;
  v5c_present: boolean;
  description: string;
  features: string[];
  images: string[];
  date_added: string;
  notes: string;
}

// ─── Mechanical service categories ───────────────────────────
export type MechanicalCategory =
  | 'Servicing'
  | 'MOT'
  | 'Brakes'
  | 'Tyres & Alignment'
  | 'Engine & Drivetrain'
  | 'Steering & Suspension'
  | 'Electrical & Diagnostics'
  | 'Climate & Cooling'
  | 'Exhaust & Emissions';

// ─── Bodywork categories ──────────────────────────────────────
export type BodyworkCategory =
  | 'Accident Repair'
  | 'Dent Removal'
  | 'Paintwork'
  | 'Structural Repair'
  | 'Classic Restoration'
  | 'Glazing'
  | 'Insurance & Fleet';

// ─── Detailing categories ─────────────────────────────────────
export type DetailingCategory =
  | 'Exterior Preparation'
  | 'Paint Correction'
  | 'Paint Protection'
  | 'Exterior Finishing'
  | 'Interior Detailing'
  | 'Detail Packages';

// ─── MOT categories ───────────────────────────────────────────
export type MOTCategory =
  | 'The Test'
  | 'Preparation'
  | 'Specialist Testing';

// ─── Brake categories ─────────────────────────────────────────
export type BrakeCategory =
  | 'Inspection & Assessment'
  | 'Pads & Discs'
  | 'Brake Fluid'
  | 'Calipers & Lines'
  | 'Handbrake & Parking Brake';

// ─── Diagnostics categories ───────────────────────────────────
export type DiagnosticsCategory =
  | 'Diagnostic Scanning'
  | 'Warning Lights'
  | 'ADAS Calibration'
  | 'Electric & Hybrid';

// ─── Tyre categories ──────────────────────────────────────────
export type TyreCategory =
  | 'Supply & Fitting'
  | 'Alignment & Balancing'
  | 'Pressure & Sensors'
  | 'Specialist Tyres'
  | 'Tyre Safety';

export type ServiceCategory =
  | MechanicalCategory
  | BodyworkCategory
  | DetailingCategory
  | MOTCategory
  | TyreCategory
  | DiagnosticsCategory
  | BrakeCategory;

export interface Service {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  includes: string[];
  price: number | null;
  price_type: PriceType;
  duration_hours: number | null;
  booking_available: boolean;
  active: boolean;
}
