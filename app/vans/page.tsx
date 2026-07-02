import { redirect } from 'next/navigation';

// Vans have been folded into the main Stocklist page.
// Any bookmarked or externally linked /vans URLs redirect cleanly.
export default function VansPage() {
  redirect('/cars');
}
