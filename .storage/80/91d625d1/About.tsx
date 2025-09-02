import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  User, 
  Heart,
  Target,
  Users,
  Lightbulb,
  Award,
  BookOpen
} from 'lucide-react'
import Layout from '@/components/Layout'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'

export default function About() {
  const teamMembers = [
    {
      name: 'Gideon Thuku',
      role: 'Chief Technology Officer (CTO)',
      description: 'Gideon leads the technology and product development of Sign-to-Code LMS. With a passion for accessibility and innovation, he ensures the platform delivers Deaf-first learning experiences through sign-language avatars, captions, and transcripts.',
      email: 'gideon@sign2code.org',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Rosemary Emeli',
      role: 'Chief Executive Officer (CEO)',
      description: 'Rosemary provides strategic leadership and drives the vision of Sign-to-Code LMS. As CEO, she champions inclusive education and user-centered design, guiding the platform to empower Deaf learners with digital skills, CV building, and job readiness pathways.',
      email: 'rosemary@sign2code.org',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <Layout>
      <div className="space-y-20">
        {/* Header */}
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-6">
            <SignLanguageAvatar variant="welcome" size="lg" />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent">
                About Sign-to-Code
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Empowering Deaf and Hard-of-Hearing youth with accessible digital education and career opportunities.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate leaders behind Sign-to-Code LMS, dedicated to creating inclusive digital education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${member.gradient}`} />
                
                <CardHeader className="text-center pb-4">
                  <div className="space-y-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto`}>
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{member.name}</CardTitle>
                      <Badge className={`mt-2 bg-gradient-to-r ${member.gradient} text-white border-0`}>
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {member.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      className={`border-2 hover:opacity-80 transition-opacity bg-gradient-to-r ${member.gradient} text-white border-transparent hover:bg-opacity-90`}
                      onClick={() => window.location.href = `mailto:${member.email}`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {member.email}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Story of Sign-to-Code LMS */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-16">
          <div className="space-y-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                The Story of Sign-to-Code LMS
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Sign-to-Code was born from a simple but urgent question: <strong>How can Deaf and Hard-of-Hearing youth gain equal access to the digital future?</strong>
                </p>
                
                <p>
                  Gideon Thuku, driven by his passion for technology and accessibility, joined forces with Rosemary Emeli, a leader in inclusive education. Together, they envisioned a platform where learning digital literacy and coding would not only be possible, but enjoyable and empowering for Deaf learners.
                </p>
                
                <p>
                  They built Sign-to-Code LMS with a <strong>Deaf-first design</strong>: sign-language avatars, captions, transcripts, and a simple interface that removes barriers. But they didn't stop at learning. Knowing that skills alone are not enough, they added a CV builder and job discovery tools to connect learners to real opportunities.
                </p>
                
                <p>
                  From its earliest prototype to today, Sign-to-Code has carried one mission: <strong>to give Deaf youth the keys to education, employment, and dignity in a digital world.</strong> It is not just a product—it's a movement for inclusion, designed by people who believe technology must leave no one behind.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-white/80 border-0 shadow-lg text-center">
                  <CardContent className="pt-8">
                    <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">Equal access to digital education for Deaf and Hard-of-Hearing youth</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 border-0 shadow-lg text-center">
                  <CardContent className="pt-8">
                    <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Values</h3>
                    <p className="text-gray-600">Inclusion, accessibility, and empowerment through technology</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 border-0 shadow-lg text-center">
                  <CardContent className="pt-8">
                    <Lightbulb className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">A world where technology leaves no one behind</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Recognition */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making a real difference in the lives of Deaf and Hard-of-Hearing learners worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-gray-600">Scholarship Recipients</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                <p className="text-gray-600">Comprehensive Courses</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-gray-600">Accessible Learning</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
                <p className="text-gray-600">Possibilities Unlocked</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-16 text-white text-center">
          <div className="space-y-8">
            <div className="flex justify-center mb-6">
              <SignLanguageAvatar variant="success" size="lg" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Whether you're a learner, educator, or supporter, you can be part of the movement to make digital education accessible for everyone.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8"
                onClick={() => window.location.href = '/courses'}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8"
                onClick={() => window.location.href = 'mailto:info@sign2code.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}