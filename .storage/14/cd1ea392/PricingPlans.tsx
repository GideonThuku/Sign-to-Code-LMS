import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Crown, Star, Zap } from 'lucide-react'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'

interface PricingPlansProps {
  onSelectPlan?: (planId: string) => void
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  const { user, isPremium } = useAuth()
  const [loading, setLoading] = useState('')

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for getting started with digital literacy',
      features: [
        'Digital Literacy 101 course',
        'Coding Basics course',
        'Sign language avatars',
        'Full accessibility features',
        'CV Builder tool',
        'Job discovery platform',
        'Community support'
      ],
      icon: Star,
      gradient: 'from-green-500 to-emerald-600',
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 5,
      period: 'month',
      description: 'Unlock advanced courses and exclusive content',
      features: [
        'Everything in Free plan',
        'Advanced AI Engineering course',
        'Advanced Python course',
        'Priority support',
        'Exclusive webinars',
        'Career mentorship',
        'Certificate of completion',
        'Offline course downloads'
      ],
      icon: Crown,
      gradient: 'from-purple-500 to-pink-600',
      popular: true
    }
  ]

  const handleSelectPlan = async (planId: string) => {
    if (!user) {
      // Redirect to login/register
      return
    }

    setLoading(planId)
    
    try {
      if (onSelectPlan) {
        await onSelectPlan(planId)
      }
    } catch (error) {
      console.error('Error selecting plan:', error)
    } finally {
      setLoading('')
    }
  }

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <SignLanguageAvatar variant="success" size="lg" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free courses and upgrade when you're ready for advanced content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isCurrentPlan = (plan.id === 'free' && !isPremium) || (plan.id === 'premium' && isPremium)
            
            return (
              <Card 
                key={plan.id} 
                className={`
                  relative overflow-hidden transition-all duration-300 hover:shadow-2xl
                  ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}
                  ${isCurrentPlan ? 'border-green-500 bg-green-50' : ''}
                `}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-500 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {isCurrentPlan ? (
                    <Button disabled className="w-full bg-green-500 text-white">
                      <Check className="w-4 h-4 mr-2" />
                      Current Plan
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleSelectPlan(plan.id)}
                      disabled={loading === plan.id}
                      className={`
                        w-full transition-all duration-300
                        ${plan.popular 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700' 
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                        }
                      `}
                    >
                      {loading === plan.id ? (
                        <>
                          <Zap className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          {plan.id === 'free' ? 'Get Started Free' : 'Upgrade to Premium'}
                          <Zap className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include our commitment to accessibility and inclusive learning
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>✓ WCAG 2.2 AA Compliant</span>
            <span>✓ Sign Language Support</span>
            <span>✓ Screen Reader Compatible</span>
          </div>
        </div>
      </div>
    </div>
  )
}