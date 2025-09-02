// IntaSend Payment Integration Service
interface PaymentData {
  first_name: string
  last_name: string
  email: string
  amount: number
  currency: string
  api_ref: string
  redirect_url: string
  host: string
}

interface PaymentResponse {
  url: string
  id: string
  invoice: {
    invoice_id: string
    state: string
  }
}

class PaymentService {
  private publishableKey: string
  private secretKey: string
  private isTest: boolean

  constructor() {
    // In production, these should come from environment variables
    this.publishableKey = process.env.VITE_INTASEND_PUBLISHABLE_KEY || 'ISPubKey_test_your_key_here'
    this.secretKey = process.env.VITE_INTASEND_SECRET_KEY || 'ISSecretKey_test_your_key_here'
    this.isTest = true // Set to false in production
  }

  async createPayment(paymentData: PaymentData): Promise<PaymentResponse> {
    try {
      const response = await fetch('/api/payment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.publishableKey}`
        },
        body: JSON.stringify({
          ...paymentData,
          publishable_key: this.publishableKey,
          test: this.isTest
        })
      })

      if (!response.ok) {
        throw new Error('Payment creation failed')
      }

      const result = await response.json()
      return result
    } catch (error) {
      console.error('Payment error:', error)
      throw error
    }
  }

  async initiateSubscriptionPayment(
    userDetails: {
      firstName: string
      lastName: string
      email: string
    },
    planType: 'premium' | 'enterprise'
  ): Promise<PaymentResponse> {
    const amounts = {
      premium: 5,
      enterprise: 99
    }

    const paymentData: PaymentData = {
      first_name: userDetails.firstName,
      last_name: userDetails.lastName,
      email: userDetails.email,
      amount: amounts[planType],
      currency: 'USD', // Changed to USD for international users
      api_ref: `sub_${planType}_${Date.now()}`,
      redirect_url: `${window.location.origin}/payment/success?plan=${planType}`,
      host: window.location.origin
    }

    return this.createPayment(paymentData)
  }

  // Fallback method for direct IntaSend integration (client-side)
  async createDirectPayment(paymentData: PaymentData): Promise<string> {
    // This simulates the IntaSend checkout process
    // In a real implementation, you would use the IntaSend SDK
    
    const checkoutData = {
      public_key: this.publishableKey,
      first_name: paymentData.first_name,
      last_name: paymentData.last_name,
      email: paymentData.email,
      amount: paymentData.amount,
      currency: paymentData.currency,
      api_ref: paymentData.api_ref,
      redirect_url: paymentData.redirect_url,
      test: this.isTest
    }

    // For now, return a mock payment URL
    // In production, this would integrate with IntaSend's actual API
    const mockPaymentUrl = `https://sandbox.intasend.com/checkout/${Math.random().toString(36).substr(2, 9)}`
    
    console.log('Payment initiated:', checkoutData)
    return mockPaymentUrl
  }

  // Method to handle payment verification
  async verifyPayment(paymentId: string): Promise<boolean> {
    try {
      const response = await fetch(`/api/payment/verify/${paymentId}`, {
        headers: {
          'Authorization': `Bearer ${this.secretKey}`
        }
      })

      if (!response.ok) {
        return false
      }

      const result = await response.json()
      return result.status === 'COMPLETE'
    } catch (error) {
      console.error('Payment verification error:', error)
      return false
    }
  }
}

export const paymentService = new PaymentService()
export type { PaymentData, PaymentResponse }