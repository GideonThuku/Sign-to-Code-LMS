import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Shield, 
  CheckCircle, 
  Clock,
  RefreshCw,
  Mail,
  User,
  MessageSquare
} from 'lucide-react'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'

interface GuaranteeFormProps {
  onClose?: () => void
}

export default function GuaranteeForm({ onClose }: GuaranteeFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscription_type: '',
    reason: '',
    additional_info: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (success) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Request Submitted Successfully!</h2>
          <p className="text-gray-600">
            We've received your money-back guarantee request. Our team will review it and get back to you within 2-3 business days.
          </p>
          <div className="flex justify-center space-x-4">
            <Button onClick={onClose}>Close</Button>
            <Button variant="outline" onClick={() => window.location.href = 'mailto:info@sign2code.com'}>
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <SignLanguageAvatar variant="help" size="lg" />
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          30-Day Money Back Guarantee
        </CardTitle>
        <p className="text-gray-600">
          We stand behind our platform. If you're not satisfied, we'll refund your money within 30 days.
        </p>
      </CardHeader>
      
      <CardContent>
        {/* Guarantee Details */}
        <div className="mb-8 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span>Our Guarantee Promise</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">30 Days</h4>
              <p className="text-sm text-gray-600">Full refund period</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">No Questions</h4>
              <p className="text-sm text-gray-600">Simple process</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <RefreshCw className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Quick Processing</h4>
              <p className="text-sm text-gray-600">2-3 business days</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subscription_type">Subscription Type *</Label>
            <select
              id="subscription_type"
              value={formData.subscription_type}
              onChange={(e) => handleInputChange('subscription_type', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select your subscription</option>
              <option value="premium">Premium Plan ($5/month)</option>
              <option value="enterprise">Enterprise Plan ($99/month)</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Refund Request *</Label>
            <select
              id="reason"
              value={formData.reason}
              onChange={(e) => handleInputChange('reason', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a reason</option>
              <option value="not_satisfied">Not satisfied with the platform</option>
              <option value="technical_issues">Technical issues</option>
              <option value="accessibility_concerns">Accessibility concerns</option>
              <option value="course_content">Course content not as expected</option>
              <option value="financial_hardship">Financial hardship</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional_info">Additional Information</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Textarea
                id="additional_info"
                placeholder="Please provide any additional details about your refund request..."
                value={formData.additional_info}
                onChange={(e) => handleInputChange('additional_info', e.target.value)}
                className="pl-10 min-h-[100px]"
              />
            </div>
          </div>

          <Alert className="border-blue-200 bg-blue-50">
            <Shield className="h-4 w-4" />
            <AlertDescription className="text-blue-800">
              <strong>Important:</strong> Refund requests must be submitted within 30 days of your subscription start date. 
              Processing typically takes 2-3 business days after approval.
            </AlertDescription>
          </Alert>

          <div className="flex space-x-4">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-90"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Submit Refund Request
                </>
              )}
            </Button>
            
            {onClose && (
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}