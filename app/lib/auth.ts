// src/lib/auth.ts
import { supabase } from '../lib/supaBaseClient'; // Adjust the import to your actual path

export async function getServerSession() {
  const { data: { session } } = await supabase.auth.getSession()
  return session;
}

// Client-side function to get the session
export async function getClientSession() {
    return await supabase.auth.getSession();
}
