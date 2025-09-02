import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { 
  Check, 
  Crown, 
  Star, 
  Zap, 
  Heart,
  Users,
  ExternalLink,
  Gift,
  Award,
  BookOpen,
  CreditCard,
  Calendar
} from 'lucide-react'
import Layout from '@/components/Layout'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'
import GuaranteeForm from '@/components/Forms/GuaranteeForm'
import ContactForm from '@/components/Forms/ContactForm'
import { useAuth } from '@/hooks/useAuth'
import { paymentService } from '@/services/paymentService'

export default function Subscribe() {
  const { user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [showGuaranteeForm, setShowGuaranteeForm] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  const plans = [
    {
      id: 'free',
      name: 'Free Plan',
      price: 0,
      period: 'forever',
      description: 'Perfect for getting started with basic digital skills',
      features: [
        'Access to 2 free courses',
        'Basic sign language avatars',
        'Community support',
        'Progress tracking',
        'Mobile access',
        'Basic CV builder'
      ],
      buttonText: 'Current Plan',
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 5,
      period: 'month',
      description: 'Full access to all courses and advanced features',
      features: [
        'All premium courses',
        'Advanced AI sign language avatars',
        'Priority support',
        'Advanced progress analytics',
        'Offline course downloads',
        'AI-powered CV builder',
        'Job placement assistance',
        'Interview preparation',
        'Certificate of completion'
      ],
      buttonText: 'Upgrade to Premium',
      popular: true,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: 99,
      period: 'month',
      description: 'For organizations training multiple learners',
      features: [
        'Everything in Premium',
        'Up to 50 learner accounts',
        'Custom course creation',
        'Advanced analytics dashboard',
        'Dedicated account manager',
        'Custom integrations',
        'Bulk certificate generation',
        'Priority employer training'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      gradient: 'from-purple-600 to-pink-600'
    }
  ]

  const scholarshipProgram = {
    title: 'Power Learn Project Scholarship',
    description: 'Free access to premium courses for PWDs in partnership with Power Learn Project Africa',
    partner: 'Power Learn Project Africa',
    partnerUrl: 'https://powerlearnprojectafrica.org/programs/1-million-devs-for-africa',
    features: [
      'Full premium access for 12 months',
      'Mentorship from industry professionals',
      'Job placement assistance',
      'Certificate of completion',
      'Community support network',
      'Career guidance sessions'
    ],
    eligibility: [
      'Must be a person with disability',
      'Demonstrate financial need',
      'Commit to completing chosen courses',
      'Available for job placement after completion'
    ],
    slots: 'Limited to 100 scholarships per quarter'
  }

  const handlePlanSelect = async (planId: string) => {
    setSelectedPlan(planId)
    setLoading(true)

    try {
      if (planId === 'premium') {
        // Initiate payment for premium plan
        const userDetails = {
          firstName: user?.full_name?.split(' ')[0] || 'User',
          lastName: user?.full_name?.split(' ')[1] || 'Name',
          email: user?.email || 'user@example.com'
        }

        const paymentResponse = await paymentService.initiateSubscriptionPayment(
          userDetails,
          'premium'
        )

        // Redirect to payment URL
        window.location.href = paymentResponse.url
      } else if (planId === 'enterprise') {
        // Show contact form for enterprise
        setShowContactForm(true)
      }
    } catch (error) {
      console.error('Payment initiation failed:', error)
      alert('Payment initiation failed. Please try again or contact support.')
    } finally {
      setLoading(false)
    }
  }

  const handleScholarshipApply = () => {
    window.open('https://powerlearnprojectafrica.org/programs/1-million-devs-for-africa', '_blank')
  }

  return (
    <Layout>
      <div className="space-y-20">
        {/* Header */}
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-6">
            <SignLanguageAvatar variant="success" size="lg" />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Unlock your potential with our accessible learning platform. Choose the plan that fits your needs.
            </p>
          </div>
        </div>

        {/* Scholarship Program */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-16">
          <div className="text-center space-y-8">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Gift className="w-12 h-12 text-green-600" />
              <SignLanguageAvatar variant="help" size="lg" />
            </div>
            
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 border-green-200 text-lg px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Scholarship Program
              </Badge>
              
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {scholarshipProgram.title}
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {scholarshipProgram.description}
              </p>
              
              <div className="flex justify-center items-center space-x-2 text-green-700">
                <span className="font-medium">In partnership with</span>
                <a 
                  href={scholarshipProgram.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline flex items-center space-x-1"
                >
                  <span>{scholarshipProgram.partner}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span>What You Get</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {scholarshipProgram.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600 flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Eligibility</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {scholarshipProgram.eligibility.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                  <Alert className="mt-4 border-orange-200 bg-orange-50">
                    <AlertDescription className="text-orange-800">
                      <strong>Note:</strong> {scholarshipProgram.slots}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleScholarshipApply}
              >
                <Gift className="w-5 h-5 mr-2" />
                Apply for Scholarship
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your learning journey. All plans include full accessibility features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative hover:shadow-xl transition-all duration-300 border-0 overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-500 shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${plan.gradient} ${plan.popular ? 'mt-10' : ''}`} />
                
                <CardHeader className="text-center pb-4">
                  <div className="space-y-4">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-1">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-gray-500">/{plan.period}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition-opacity ${
                      user?.subscription_tier === plan.id ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => handlePlanSelect(plan.id)}
                    disabled={loading || user?.subscription_tier === plan.id}
                  >
                    {loading && selectedPlan === plan.id ? (
                      <>
                        <Zap className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : user?.subscription_tier === plan.id ? (
                      'Current Plan'
                    ) : (
                      <>
                        {plan.id === 'premium' && <Crown className="w-4 h-4 mr-2" />}
                        {plan.id === 'enterprise' && <Calendar className="w-4 h-4 mr-2" />}
                        {plan.buttonText}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-16">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              30-Day Money Back Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're confident you'll love our platform. If you're not completely satisfied within 30 days, 
              we'll refund your money, no questions asked.
            </p>
            
            <div className="flex justify-center">
              <Dialog open={showGuaranteeForm} onOpenChange={setShowGuaranteeForm}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Learn More About Our Guarantee
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                  <GuaranteeForm onClose={() => setShowGuaranteeForm(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Contact Sales Dialog */}
        <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
            <ContactForm onClose={() => setShowContactForm(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  )
}