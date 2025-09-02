import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  ExternalLink, 
  Users, 
  Shield, 
  Home, 
  Target,
  CheckCircle,
  Lightbulb,
  MessageSquare,
  FileText,
  Clock,
  Briefcase,
  Award
} from 'lucide-react'
import Layout from '@/components/Layout'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'

export default function Jobs() {
  const jobCategories = [
    {
      title: 'Remote IT Jobs',
      description: 'Work from home opportunities in technology',
      icon: Home,
      popular: true,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Entry-Level Design',
      description: 'Beginner-friendly graphic and web design positions',
      icon: Target,
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Customer Support',
      description: 'Help customers via chat, email, and accessible communication',
      icon: MessageSquare,
      popular: true,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data Entry',
      description: 'Accurate data input and management roles',
      icon: FileText,
      popular: true,
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const inclusiveEmployerTips = [
    {
      icon: Users,
      title: 'Inclusive Culture',
      description: 'Look for companies that actively promote diversity and inclusion in their job postings and company values.'
    },
    {
      icon: Shield,
      title: 'Accessibility Support',
      description: 'Seek employers who mention accommodations, assistive technology, or accessibility in their job descriptions.'
    },
    {
      icon: Home,
      title: 'Remote Opportunities',
      description: 'Remote work can provide better accessibility and communication options for Deaf and Hard-of-Hearing professionals.'
    },
    {
      icon: Target,
      title: 'Skills-First Hiring',
      description: 'Focus on companies that emphasize skills and competencies over traditional interview processes.'
    }
  ]

  const interviewTips = [
    'Request accommodations in advance (interpreter, written questions, etc.)',
    'Prepare a brief explanation of how you communicate effectively at work',
    'Highlight your problem-solving skills and attention to detail',
    'Ask about the company\'s accessibility policies and support systems',
    'Bring examples of your work and achievements to demonstrate your capabilities'
  ]

  const quickSearchCategories = [
    { name: 'Remote Jobs', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'Entry Level', color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'Tech Jobs', color: 'bg-purple-100 text-purple-800 border-purple-200' }
  ]

  const handleJobSearch = (category?: string) => {
    const baseUrl = 'https://www.brightermonday.co.ke/jobs'
    const searchUrl = category ? `${baseUrl}?q=${encodeURIComponent(category)}` : baseUrl
    window.open(searchUrl, '_blank')
  }

  const handlePowerLearnSearch = () => {
    window.open('https://powerlearnprojectafrica.org/talent-hub/job-opportunities', '_blank')
  }

  return (
    <Layout>
      <div className="space-y-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-red-50 rounded-3xl p-8 md:p-16">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-6">
              <SignLanguageAvatar variant="welcome" size="lg" />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent">
                  Find Your Next Opportunity
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Discover inclusive job opportunities and get tips for successful interviews.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleJobSearch()}
              >
                <Search className="w-5 h-5 mr-2" />
                Browse BrighterMonday Jobs
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                onClick={handlePowerLearnSearch}
              >
                <Award className="w-5 h-5 mr-2" />
                Power Learn Talent Hub
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Job Categories */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Job Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore opportunities designed with accessibility and inclusion in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${category.gradient}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{category.title}</CardTitle>
                            {category.popular && (
                              <Badge className="mt-1 bg-orange-100 text-orange-800 border-orange-200">
                                Popular
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <Briefcase className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
                    <Button 
                      className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 transition-opacity`}
                      onClick={() => handleJobSearch(category.title)}
                    >
                      Search Jobs
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Finding Inclusive Employers */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-16">
          <div className="space-y-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <SignLanguageAvatar variant="help" size="lg" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Finding Inclusive Employers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn how to identify companies that truly value diversity and accessibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {inclusiveEmployerTips.map((tip, index) => {
                const Icon = tip.icon
                return (
                  <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="pt-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {tip.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Interview Preparation Tips */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Interview Preparation Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepare for success with these interview tips specifically for Deaf and Hard-of-Hearing job seekers:
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {interviewTips.slice(0, 3).map((tip, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {interviewTips.slice(3).map((tip, index) => (
                    <div key={index + 3} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">{index + 4}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Job Search */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-16">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-6">
              <SignLanguageAvatar variant="success" size="lg" />
            </div>
            
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Quick Job Search
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your job search? Access multiple job portals for the latest opportunities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {quickSearchCategories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`${category.color} hover:opacity-80 transition-opacity`}
                  onClick={() => handleJobSearch(category.name)}
                >
                  {category.name}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleJobSearch()}
              >
                <Search className="w-5 h-5 mr-2" />
                Browse BrighterMonday
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                onClick={handlePowerLearnSearch}
              >
                <Award className="w-5 h-5 mr-2" />
                Power Learn Talent Hub
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}