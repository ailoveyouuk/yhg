// This file is unused.
//
// The stocklist was briefly wired up to a Supabase `vehicles` table, but
// we reverted to keeping stock data in data/vehicles.json — a plain file
// checked into the repo and deployed with every push to Netlify, updated
// progressively as cars are added. See app/cars/page.tsx, app/cars/[id]/
// page.tsx and app/page.tsx, which read directly from that file.
//
// Left in place only because files in this workspace can't be deleted —
// safe to ignore.
