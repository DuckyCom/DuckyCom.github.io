import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hvkxnfszliyrjgrnjjfu.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a3huZnN6bGl5cmpncm5qamZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMDg3MzUsImV4cCI6MjAzODc4NDczNX0.fdfvdt_UqhlD2ebCA7m3yq8XMU52ZxXqrMNZY36dTyw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})