import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kilomsuhrpgdjjsigkgr.supabase.co'
const supabaseKey = process.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpbG9tc3VocnBnZGpqc2lna2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MjQ2NjIsImV4cCI6MjA1MTQwMDY2Mn0.qU7BbXFLfJjBQJrjGfKhRYFrJOPQQYcXJhYjGfKhRYF'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          subscription_tier: 'free' | 'premium' | 'enterprise'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          subscription_tier?: 'free' | 'premium' | 'enterprise'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          subscription_tier?: 'free' | 'premium' | 'enterprise'
          created_at?: string
          updated_at?: string
        }
      }
      employer_training_requests: {
        Row: {
          id: string
          company_name: string
          contact_name: string
          email: string
          phone: string | null
          company_size: string
          training_interest: string[]
          message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          company_name: string
          contact_name: string
          email: string
          phone?: string | null
          company_size: string
          training_interest: string[]
          message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          company_name?: string
          contact_name?: string
          email?: string
          phone?: string | null
          company_size?: string
          training_interest?: string[]
          message?: string | null
          created_at?: string
        }
      }
    }
  }
}