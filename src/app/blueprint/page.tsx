import { redirect } from 'next/navigation';

// Redirect to demo blueprint
export default function BlueprintsPage() {
  redirect('/blueprint/demo');
}