import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import Layout from '@/components/Layout'
import PricingPlans from '@/components/Pricing/PricingPlans'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'

export default function Subscribe() {
  const navigate = useNavigate()
  const { user, isPremium } = useAuth()
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSelectPlan = async (planId: string) => {
    if (planId === 'free') {
      // Free plan - just redirect to courses
      navigate('/courses')
      return
    }

    if (planId === 'premium') {
      setProcessing(true)
      
      // Simulate payment processing
      setTimeout(() => {
        setSuccess(true)
        setProcessing(false)
        
        // Redirect to courses after success
        setTimeout(() => {
          navigate('/courses')
        }, 3000)
      }, 2000)
    }
  }

  if (success) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="flex justify-center mb-6">
            <SignLanguageAvatar variant="success" size="lg" />
          </div>
          
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl text-green-800">Welcome to Premium!</CardTitle>
              <CardDescription className="text-green-700">
                Your subscription has been activated successfully
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 mb-6">
                You now have access to all premium courses including Advanced AI Engineering and Advanced Python.
              </p>
              <Button 
                onClick={() => navigate('/courses')}
                className="bg-green-600 hover:bg-green-700"
              >
                Start Learning Premium Courses
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Unlock Advanced Learning
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that's right for you and start mastering advanced skills today
            </p>
          </div>
        </div>

        {!user && (
          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <AlertDescription className="text-blue-800">
              Please sign in or create an account to subscribe to our premium courses.
            </AlertDescription>
          </Alert>
        )}

        <PricingPlans onSelectPlan={handleSelectPlan} />

        {processing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
              <CardContent className="pt-6 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Processing Payment</h3>
                <p className="text-gray-600">Please wait while we activate your premium subscription...</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  )
}