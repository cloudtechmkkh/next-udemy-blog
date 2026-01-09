// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'
// import { cookies } from 'next/headers'

// export function createClient() {
//   return createClient(
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey =process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    // { cookies }
//   )
// }

export const supabase = createClient(supabaseUrl, supabaseAnonKey)