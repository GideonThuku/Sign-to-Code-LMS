import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import Layout from '@/components/Layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  BookOpen, 
  Clock, 
  Users, 
  Play, 
  Lock,
  Crown,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'

export default function Courses() {
  const { user, isPremium } = useAuth()

  const courses = [
    {
      id: 1,
      title: 'Digital Literacy 101',
      description: 'Master essential digital skills including email, online safety, and digital communication. Perfect for beginners starting their digital journey.',
      duration: '2 hours',
      lessons: 3,
      level: 'Beginner',
      enrolled: 1250,
      rating: 4.8,
      isPremium: false,
      slug: 'digital-literacy-101',
      progress: user ? 65 : 0,
      gradient: 'from-blue-500 to-cyan-500',
      topics: ['Email basics', 'Online safety', 'Digital communication', 'File management']
    },
    {
      id: 2,
      title: 'Coding Basics',
      description: 'Learn programming fundamentals with HTML, CSS, and JavaScript. Build your first interactive webpage with hands-on projects.',
      duration: '1.5 hours',
      lessons: 3,
      level: 'Beginner',
      enrolled: 980,
      rating: 4.9,
      isPremium: false,
      slug: 'coding-basics',
      progress: user ? 30 : 0,
      gradient: 'from-green-500 to-emerald-500',
      topics: ['HTML structure', 'CSS styling', 'JavaScript basics', 'Interactive elements']
    },
    {
      id: 3,
      title: 'Advanced AI Engineering',
      description: 'Deep dive into machine learning, neural networks, and AI development. Build real-world AI applications with Python and TensorFlow.',
      duration: '8 hours',
      lessons: 12,
      level: 'Advanced',
      enrolled: 420,
      rating: 4.9,
      isPremium: true,
      slug: 'advanced-ai-engineering',
      progress: isPremium ? 15 : 0,
      gradient: 'from-purple-500 to-pink-500',
      topics: ['Machine Learning', 'Neural Networks', 'TensorFlow', 'AI Ethics', 'Model Deployment']
    },
    {
      id: 4,
      title: 'Advanced Python',
      description: 'Master advanced Python concepts including frameworks like Django and Flask. Learn professional development practices and deployment.',
      duration: '6 hours',
      lessons: 10,
      level: 'Advanced',
      enrolled: 350,
      rating: 4.8,
      isPremium: true,
      slug: 'advanced-python',
      progress: isPremium ? 0 : 0,
      gradient: 'from-orange-500 to-red-500',
      topics: ['Django Framework', 'Flask API', 'Database Integration', 'Testing', 'Deployment']
    }
  ]

  const freeCourses = courses.filter(course => !course.isPremium)
  const premiumCourses = courses.filter(course => course.isPremium)

  return (
    <Layout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <SignLanguageAvatar variant="course" size="lg" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learn at Your Own Pace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive courses designed with accessibility in mind. 
              Each course features sign language avatars, captions, and interactive elements.
            </p>
          </div>

          {!user && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800">
                <strong>Sign up for free</strong> to track your progress and access all course features!
              </p>
            </div>
          )}
        </div>

        {/* Free Courses */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Free Courses
              </h2>
              <p className="text-gray-600">
                Start your learning journey with our foundational courses
              </p>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Always Free
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {freeCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </CardTitle>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                          Free
                        </Badge>
                        <Badge variant="outline">{course.level}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {course.rating}
                        </div>
                      </div>
                    </div>
                    <BookOpen className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>

                  <CardDescription className="text-gray-600 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.enrolled.toLocaleString()} enrolled
                    </div>
                    <div>
                      {course.lessons} lessons
                    </div>
                  </div>

                  {user && course.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-blue-600 font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">What you'll learn:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button asChild className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 transition-opacity`}>
                    <Link to={`/course/${course.slug}`}>
                      {course.progress > 0 ? (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Continue Learning
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Start Course
                        </>
                      )}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Courses */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Premium Courses
              </h2>
              <p className="text-gray-600">
                Advanced courses for professional development
              </p>
            </div>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              <Crown className="w-3 h-3 mr-1" />
              Premium Only
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumCourses.map((course) => (
              <Card key={course.id} className={`hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group ${!isPremium ? 'opacity-75' : ''}`}>
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                          {course.title}
                        </CardTitle>
                        {!isPremium && <Lock className="w-5 h-5 text-gray-400" />}
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                          <Crown className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                        <Badge variant="outline">{course.level}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {course.rating}
                        </div>
                      </div>
                    </div>
                    <BookOpen className="w-8 h-8 text-gray-400 group-hover:text-purple-500 transition-colors" />
                  </div>

                  <CardDescription className="text-gray-600 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.enrolled.toLocaleString()} enrolled
                    </div>
                    <div>
                      {course.lessons} lessons
                    </div>
                  </div>

                  {isPremium && course.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-purple-600 font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">What you'll learn:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {isPremium ? (
                    <Button asChild className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 transition-opacity`}>
                      <Link to={`/course/${course.slug}`}>
                        {course.progress > 0 ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Continue Learning
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Start Course
                          </>
                        )}
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 transition-opacity`}>
                      <Link to="/subscribe">
                        <Crown className="w-4 h-4 mr-2" />
                        Upgrade to Access
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA for Premium */}
        {!isPremium && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center">
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <SignLanguageAvatar variant="success" size="lg" />
              </div>
              
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ready for Advanced Learning?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Unlock premium courses and take your skills to the next level with advanced AI and Python training.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Link to="/subscribe">
                    <Crown className="w-5 h-5 mr-2" />
                    Upgrade to Premium
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/subscribe">
                    View Pricing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}