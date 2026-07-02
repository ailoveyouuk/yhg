import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Clients are created lazily (on first use) rather than at module load time.
 * This means importing this file never throws even if env vars aren't set
 * yet (e.g. during a build in an environment without secrets configured) —
 * the error only surfaces if something actually tries to query Supabase
 * without credentials present.
 */

let _supabase: SupabaseClient | null = null;
let _supabaseAdmin: SupabaseClient | null = null;

/**
 * Public client — safe for use in browser code.
 * Respects Row Level Security policies.
 */
export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    _supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return _supabase;
}

/**
 * Admin client — server-side only (API routes / Server Components).
 * Bypasses RLS. Never expose to the browser.
 */
export function getSupabaseAdmin(): SupabaseClient {
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }
  return _supabaseAdmin;
}
