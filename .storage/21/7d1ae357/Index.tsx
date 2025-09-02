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
import ReactPlayer from 'react-player'

export default function Index() {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register')

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

  return (
    <Layout>
      <div className="space-y-20">
        {/* Hero Section with Video */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <SignLanguageAvatar variant="welcome" size="lg" />
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                  AI-Powered Learning
                </Badge>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Learn Digital Skills with
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
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
                      className="text-lg px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setAuthMode('register')}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Learning Free
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
                <ReactPlayer
                  url="https://kilomsuhrpgdjjsigkgr.supabase.co/storage/v1/object/public/assets%20hackathon/robotica-demo.mp4"
                  width="100%"
                  height="100%"
                  controls={true}
                  light={true}
                  playIcon={
                    <div className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-90 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  }
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
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
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                  <Building className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Workplace Training</h3>
                  <p className="text-gray-600 mb-4">
                    Free comprehensive training on disability awareness and accommodation strategies.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="pt-8 text-center">
                  <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Inclusive Hiring</h3>
                  <p className="text-gray-600 mb-4">
                    Learn best practices for recruiting and interviewing candidates with disabilities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="pt-8 text-center">
                  <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Job Placement</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with qualified candidates and get ongoing support for successful placements.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              <Link to="/employer-training">
                Learn More About Employer Training
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Career Ready */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              From Learning to Career
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your skills, create a professional CV, and discover inclusive job opportunities 
              with our comprehensive career readiness tools.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">CV Builder</h3>
                  <p className="text-gray-600 mb-6">
                    Create a professional CV with speech-to-text support and accessible design templates.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/cv-builder">Build CV</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <Briefcase className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Job Discovery</h3>
                  <p className="text-gray-600 mb-6">
                    Find inclusive employers and get tips for successful interviews and career growth.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/jobs">Find Jobs</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-16">
          <div className="text-center space-y-12">
            <div className="flex justify-center mb-6">
              <SignLanguageAvatar variant="success" size="lg" />
            </div>
            
            <h2 className="text-4xl font-bold">Accessibility First, Always</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">100%</div>
                <div className="text-gray-300">WCAG 2.2 AA Compliant</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-gray-300">Accessible Learning</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">∞</div>
                <div className="text-gray-300">Inclusive Opportunities</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Sign-to-Code today and unlock your potential with accessible, 
            career-focused digital education designed for everyone.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Dialog open={showAuth} onOpenChange={setShowAuth}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="text-lg px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setAuthMode('register')}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Begin Learning Now
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
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 border-2">
              <Link to="/courses">
                Explore Courses
                <Zap className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}