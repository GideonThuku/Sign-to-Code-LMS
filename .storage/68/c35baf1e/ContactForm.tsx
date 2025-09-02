import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Calendar, 
  ExternalLink,
  MessageSquare,
  Phone,
  MapPin
} from 'lucide-react'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'

interface ContactFormProps {
  onClose?: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/gideonthuku14/30min', '_blank')
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@sign2code.com'
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <SignLanguageAvatar variant="help" size="lg" />
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent">
          Contact Us
        </CardTitle>
        <p className="text-gray-600">
          We're here to help! Choose your preferred way to get in touch with our team.
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Email Contact */}
        <div className="p-6 border-2 border-blue-200 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
              <p className="text-gray-600">Get help via email - we respond within 24 hours</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@sign2code.com</span>
            </div>
            <Button 
              onClick={handleEmailClick}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
          </div>
        </div>

        {/* Calendly Booking */}
        <div className="p-6 border-2 border-green-200 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Schedule a Meeting</h3>
              <p className="text-gray-600">Book a 30-minute consultation with our team</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gray-700">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">30-minute consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MessageSquare className="w-4 h-4" />
              <span className="font-medium">Video call or phone</span>
            </div>
            <Button 
              onClick={handleCalendlyClick}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="p-6 border-2 border-purple-200 rounded-xl bg-purple-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-purple-600" />
            <span>Our Team</span>
          </h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <span>Founded by:</span>
              <span className="font-medium">Rosemary Emeli (Nigeria) & Gideon Thuku (Kenya)</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Organization:</span>
              <span className="font-medium">Africa Ability Trust</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Response Time:</span>
              <span className="font-medium">Within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Embedded Calendly */}
        <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-100 p-4 border-b">
            <h3 className="font-semibold text-gray-900">Quick Booking</h3>
            <p className="text-sm text-gray-600">Schedule directly below or click the button above for full calendar</p>
          </div>
          <div className="h-96">
            <iframe
              src="https://calendly.com/gideonthuku14/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Appointment"
              className="rounded-b-xl"
            />
          </div>
        </div>

        {onClose && (
          <div className="flex justify-center pt-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}