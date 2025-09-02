import Layout from '@/components/Layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Heart, 
  Award, 
  BookOpen, 
  Briefcase, 
  CheckCircle,
  ArrowRight,
  Building,
  Handshake,
  Target
} from 'lucide-react'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'

export default function EmployerTraining() {
  const trainingModules = [
    {
      title: 'Disability Awareness & Inclusion',
      description: 'Understanding different types of disabilities and creating inclusive environments',
      duration: '2 hours',
      topics: [
        'Types of disabilities and their impact',
        'Person-first language and communication',
        'Breaking down stereotypes and biases',
        'Creating inclusive workplace culture'
      ]
    },
    {
      title: 'Reasonable Accommodations',
      description: 'Legal requirements and practical implementation of workplace accommodations',
      duration: '1.5 hours',
      topics: [
        'ADA compliance and legal obligations',
        'Common accommodation requests',
        'Cost-effective accommodation solutions',
        'Interactive accommodation process'
      ]
    },
    {
      title: 'Accessible Recruitment',
      description: 'Inclusive hiring practices and accessible interview processes',
      duration: '1 hour',
      topics: [
        'Writing inclusive job descriptions',
        'Accessible application processes',
        'Conducting inclusive interviews',
        'Onboarding best practices'
      ]
    },
    {
      title: 'Communication & Technology',
      description: 'Effective communication strategies and assistive technologies',
      duration: '1 hour',
      topics: [
        'Communication with Deaf/HoH employees',
        'Sign language interpreters',
        'Assistive technology overview',
        'Digital accessibility standards'
      ]
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Diverse Talent Pool',
      description: 'Access skilled professionals from underrepresented communities'
    },
    {
      icon: Target,
      title: 'Improved Performance',
      description: 'Inclusive teams show 35% better performance and innovation'
    },
    {
      icon: Heart,
      title: 'Enhanced Reputation',
      description: 'Build a positive brand image as an inclusive employer'
    },
    {
      icon: Award,
      title: 'Legal Compliance',
      description: 'Meet ADA requirements and avoid discrimination lawsuits'
    }
  ]

  const placementServices = [
    'Candidate matching and screening',
    'Interview coordination and support',
    'Accommodation consultation',
    'Onboarding assistance',
    '6-month follow-up support',
    'Performance feedback and adjustments'
  ]

  return (
    <Layout>
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-6">
            <SignLanguageAvatar variant="help" size="lg" />
          </div>
          
          <div className="space-y-4">
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Free Training Program
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Inclusive Employer
              <span className="text-green-600 block">Training Program</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to create an inclusive workplace, accommodate employees with disabilities, 
              and access a talented pool of diverse candidates through our comprehensive training program.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Free Training
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Briefcase className="w-5 h-5 mr-2" />
              Request Placement Support
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Inclusive Hiring Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Companies with inclusive practices see measurable improvements in performance, 
              innovation, and employee satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <Icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Training Modules */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Training Modules
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expert-designed curriculum covers all aspects of creating an inclusive workplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {module.duration}
                      </Badge>
                    </div>
                    <Building className="w-8 h-8 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{module.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Placement Services */}
        <div className="bg-green-50 rounded-2xl p-8 md:p-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Job Placement Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just train - we help you find and successfully onboard talented 
              candidates from our graduate community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Handshake className="w-6 h-6 text-green-500 mr-2" />
                    What We Provide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {placementServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Target className="w-6 h-6 text-green-500 mr-2" />
                    Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
                    <div className="text-sm text-gray-600">Successful placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">92%</div>
                    <div className="text-sm text-gray-600">6-month retention rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Companies trained</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Build an Inclusive Workplace?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their workplace culture 
            and discovered amazing talent through our program.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Training Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}