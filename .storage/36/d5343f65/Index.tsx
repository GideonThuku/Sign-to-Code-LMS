import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { 
  BookOpen, 
  FileText, 
  Briefcase, 
  Play, 
  Users, 
  Award,
  Eye,
  Headphones,
  Keyboard,
  ArrowRight,
  Building,
  Heart,
  Zap,
  Crown
} from 'lucide-react'
import Layout from '@/components/Layout'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'
import RegisterForm from '@/components/Auth/RegisterForm'
import LoginForm from '@/components/Auth/LoginForm'
import EmployerTrainingForm from '@/components/Forms/EmployerTrainingForm'

export default function Index() {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register')
  const [showTrainingForm, setShowTrainingForm] = useState(false)

  const features = [
    {
      icon: Eye,
      title: 'AI Sign Language Avatars',
      description: 'Interactive KSL avatars powered by Signvrse technology make learning visual and engaging',
    },
    {
      icon: Headphones,
      title: 'Full Accessibility',
      description: 'Comprehensive captions, transcripts, and screen reader support for all learners',
    },
    {
      icon: Keyboard,
      title: 'Universal Design',
      description: 'Complete keyboard navigation and WCAG 2.2 AA compliance ensures accessibility for everyone',
    },
  ]

  const learningPaths = [
    {
      title: 'Digital Literacy 101',
      description: 'Master email, online safety, and essential digital skills for the modern world',
      duration: '2 hours',
      level: 'Beginner',
      lessons: 3,
      slug: 'digital-literacy-101',
      isPremium: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Coding Basics',
      description: 'Learn programming fundamentals and create your first interactive webpage',
      duration: '1.5 hours',
      level: 'Beginner',
      lessons: 3,
      slug: 'coding-basics',
      isPremium: false,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced AI Engineering',
      description: 'Master machine learning, neural networks, and AI development with hands-on projects',
      duration: '8 hours',
      level: 'Advanced',
      lessons: 12,
      slug: 'advanced-ai-engineering',
      isPremium: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Advanced Python',
      description: 'Deep dive into Python frameworks, data structures, and professional development practices',
      duration: '6 hours',
      level: 'Advanced',
      lessons: 10,
      slug: 'advanced-python',
      isPremium: true,
      gradient: 'from-orange-500 to-red-500'
    },
  ]

  const handleAuthSuccess = () => {
    setShowAuth(false)
  }

  const handleTrainingFormSuccess = () => {
    setShowTrainingForm(false)
  }

  const handleConsultationClick = () => {
    window.open('https://calendly.com/gideonthuku14/30min', '_blank')
  }

  return (
    <Layout>
      <div className="space-y-20">
        {/* Hero Section with Video */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-red-50 rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <SignLanguageAvatar variant="welcome" size="lg" />
                <Badge className="bg-gradient-to-r from-blue-500 via-gray-800 to-red-600 text-white border-0">
                  AI-Powered Learning
                </Badge>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Learn Digital Skills with
                  <span className="bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent block">
                    Sign-to-Code
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  An accessible learning platform designed for Deaf and Hard-of-Hearing youth, 
                  featuring AI sign language avatars, comprehensive captions, and career-ready skills.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Dialog open={showAuth} onOpenChange={setShowAuth}>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="text-lg px-8 bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setAuthMode('register')}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Training Today
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    {authMode === 'register' ? (
                      <RegisterForm 
                        onSuccess={handleAuthSuccess}
                        onSwitchToLogin={() => setAuthMode('login')}
                      />
                    ) : (
                      <LoginForm 
                        onSuccess={handleAuthSuccess}
                        onSwitchToRegister={() => setAuthMode('register')}
                      />
                    )}
                  </DialogContent>
                </Dialog>
                
                <Button asChild variant="outline" size="lg" className="text-lg px-8 border-2 hover:bg-gray-50">
                  <Link to="/cv-builder">
                    <FileText className="w-5 h-5 mr-2" />
                    Build Your CV
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Video Section */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDY0MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzkzREYiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRDRFRDgiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojREMyNjI2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPGNpcmNsZSBjeD0iMzIwIiBjeT0iMTgwIiByPSI0MCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPgo8cG9seWdvbiBwb2ludHM9IjMxMCwxNjUgMzEwLDE5NSAzMzUsMTgwIiBmaWxsPSIjMzM5M0RGIi8+Cjx0ZXh0IHg9IjMyMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCI+Um9ib3RpY2EgQUkgRGVtbzwvdGV4dD4KPC9zdmc+"
                >
                  <source src="/assets/robotica-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 via-gray-800 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Robotica AI Demo
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Built for Accessibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed with accessibility in mind, ensuring an inclusive learning experience for all.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-gray-800 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From free foundational courses to premium advanced content - we have something for every skill level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${path.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-xl">{path.title}</CardTitle>
                        {path.isPremium && (
                          <Crown className="w-5 h-5 text-yellow-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant="outline" 
                          className={path.isPremium ? 'border-purple-200 text-purple-700 bg-purple-50' : 'border-green-200 text-green-700 bg-green-50'}
                        >
                          {path.isPremium ? 'Premium' : 'Free'}
                        </Badge>
                        <Badge variant="outline">{path.level}</Badge>
                        <span className="text-sm text-gray-500">
                          {path.lessons} lessons • {path.duration}
                        </span>
                      </div>
                    </div>
                    <BookOpen className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{path.description}</p>
                  {path.isPremium ? (
                    <Button asChild className={`w-full bg-gradient-to-r ${path.gradient} hover:opacity-90 transition-opacity`}>
                      <Link to="/subscribe">
                        Upgrade to Access
                        <Crown className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                      <Link to={`/course/${path.slug}`}>
                        Start Course
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Employer Training Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-16">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-6">
              <SignLanguageAvatar variant="help" size="lg" />
            </div>
            
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Training Employers for Inclusion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just train students - we help employers create inclusive workplaces and 
              connect them with talented graduates from our community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="pt-8 text-center">
                  <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Training</h3>
                  <p className="text-gray-600">Comprehensive workplace inclusion training for your team</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="pt-8 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Job Placement</h3>
                  <p className="text-gray-600">Connect with skilled graduates ready to join your team</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="pt-8 text-center">
                  <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                  <p className="text-gray-600">Continuous guidance to ensure successful integration</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Dialog open={showTrainingForm} onOpenChange={setShowTrainingForm}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 text-lg px-8"
                  >
                    <Briefcase className="w-5 h-5 mr-2" />
                    Request Training
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                  <EmployerTrainingForm 
                    onSuccess={handleTrainingFormSuccess}
                    onCancel={() => setShowTrainingForm(false)}
                  />
                </DialogContent>
              </Dialog>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-2 border-green-600 text-green-600 hover:bg-green-50"
                onClick={handleConsultationClick}
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center space-y-12">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our community members who've transformed their careers through Sign-to-Code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex justify-center mb-4">
                  <SignLanguageAvatar variant="success" size="md" />
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Sign-to-Code helped me land my first tech job. The AI avatars made learning so much easier!"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-gray-600">Frontend Developer</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex justify-center mb-4">
                  <SignLanguageAvatar variant="success" size="md" />
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The employer training program helped our company become truly inclusive. Highly recommended!"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold">Tech Corp HR</p>
                  <p className="text-sm text-gray-600">Fortune 500 Company</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex justify-center mb-4">
                  <SignLanguageAvatar variant="success" size="md" />
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "From zero coding experience to building my own apps - this platform changed my life!"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold">Marcus K.</p>
                  <p className="text-sm text-gray-600">Mobile Developer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}