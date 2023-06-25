import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nlpdcsogutgynnnnujzj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5scGRjc29ndXRneW5ubm51anpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3MDY2MTYsImV4cCI6MjAwMjI4MjYxNn0.LFLvy_nJaSe2XpK3boF4o7G4goAM6VoHRE3ERFG_hSY'

const supabase = createClient(
    supabaseUrl,
    supabaseKey, {
    auth: {
        persistSession: false
    },
    db: {
        schema: 'public'
    }
})

export { supabase }