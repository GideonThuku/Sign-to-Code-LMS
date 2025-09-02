import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kilomsuhrpgdjjsigkgr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpbG9tc3VocnBnZGpqc2lna2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NTM2MzEsImV4cCI6MjA1MTMyOTYzMX0.8rqQhQoQKvQFLNcNqGmLJc3ePdgLGYJcFgJF8rqQhQo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type User = {
  id: string
  email: string
  subscription_tier: 'free' | 'premium'
  created_at: string
}

export type Course = {
  id: string
  title: string
  description: string
  is_premium: boolean
  price?: number
  duration: string
  level: string
  lessons: number
  slug: string
}