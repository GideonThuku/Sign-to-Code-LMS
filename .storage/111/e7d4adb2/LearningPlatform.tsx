import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  CheckCircle, 
  Clock,
  BookOpen,
  ArrowLeft,
  Volume2,
  VolumeX,
  Settings,
  Maximize,
  Crown,
  Eye,
  Headphones,
  MessageSquare
} from 'lucide-react'
import Layout from '@/components/Layout'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'
import { useAuth } from '@/hooks/useAuth'

interface Lesson {
  id: string
  title: string
  duration: string
  videoUrl: string
  transcript: string
  signLanguageDescription: string
  accessibilityFeatures: string[]
  completed: boolean
}

interface Course {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  isPremium: boolean
  accessibility: {
    signLanguage: boolean
    captions: boolean
    transcripts: boolean
    screenReader: boolean
  }
}

export default function LearningPlatform() {
  const { slug } = useParams() // Changed from courseSlug to slug to match the route parameter
  const { user } = useAuth()
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showTranscript, setShowTranscript] = useState(true)
  const [showSignLanguage, setShowSignLanguage] = useState(true)
  const [progress, setProgress] = useState(0)

  // Enhanced course data with PWD-friendly content
  const courses: Record<string, Course> = {
    'digital-literacy-101': {
      id: '1',
      title: 'Digital Literacy 101',
      description: 'Master email, online safety, and essential digital skills with full accessibility support',
      isPremium: false,
      accessibility: {
        signLanguage: true,
        captions: true,
        transcripts: true,
        screenReader: true
      },
      lessons: [
        {
          id: '1',
          title: 'Welcome to Digital Literacy',
          duration: '10:30',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Welcome to Digital Literacy 101! This course is designed specifically for Deaf and Hard-of-Hearing learners. We will cover essential digital skills including email communication, internet safety, and productivity tools. All lessons include sign language interpretation, full captions, and detailed transcripts.',
          signLanguageDescription: 'Our AI avatar will guide you through each concept using clear sign language. The avatar appears in the top-right corner and can be resized or repositioned for your comfort.',
          accessibilityFeatures: [
            'Full sign language interpretation',
            'Closed captions with customizable size',
            'Complete transcripts available',
            'Screen reader compatible',
            'Keyboard navigation support'
          ],
          completed: false
        },
        {
          id: '2',
          title: 'Email Communication Basics',
          duration: '15:45',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Email is one of the most important digital communication tools in the workplace. In this lesson, we will learn how to create professional emails, manage your inbox effectively, and use email safely. We will cover email etiquette, organizing messages, and recognizing spam or phishing attempts.',
          signLanguageDescription: 'Watch as our avatar demonstrates email composition, showing proper greeting, body structure, and professional closing. Visual cues help identify important email elements.',
          accessibilityFeatures: [
            'Visual email interface walkthrough',
            'Step-by-step sign language guidance',
            'Text-based examples with audio descriptions',
            'Interactive email templates',
            'Accessibility shortcuts for email clients'
          ],
          completed: false
        },
        {
          id: '3',
          title: 'Internet Safety and Security',
          duration: '12:20',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Online safety is crucial for everyone. This lesson covers password security, recognizing phishing attempts, protecting personal information, and safe browsing practices. We will also discuss privacy settings on social media and how to identify secure websites.',
          signLanguageDescription: 'Our avatar will show you visual indicators of secure websites, demonstrate how to create strong passwords, and explain warning signs of online scams using clear visual examples.',
          accessibilityFeatures: [
            'Visual security indicators explained',
            'Password creation demonstrations',
            'Scam recognition with visual examples',
            'Browser security settings walkthrough',
            'Emergency contact information provided'
          ],
          completed: false
        }
      ]
    },
    'coding-basics': {
      id: '2',
      title: 'Coding Basics for Everyone',
      description: 'Learn programming fundamentals with accessible teaching methods and visual coding examples',
      isPremium: false,
      accessibility: {
        signLanguage: true,
        captions: true,
        transcripts: true,
        screenReader: true
      },
      lessons: [
        {
          id: '1',
          title: 'What is Programming?',
          duration: '8:15',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Programming is the process of creating instructions for computers to follow. Think of it like writing a recipe - you provide step-by-step instructions that the computer can understand and execute. In this lesson, we will explore what programming is, why it is useful, and see examples of programs we use every day.',
          signLanguageDescription: 'Our avatar will use visual metaphors and analogies to explain programming concepts. We will show code examples with large, clear text and highlight important parts using colors and animations.',
          accessibilityFeatures: [
            'Large, high-contrast code examples',
            'Color-coded syntax with pattern alternatives',
            'Step-by-step visual breakdowns',
            'Analogies using everyday objects',
            'Interactive code playground'
          ],
          completed: false
        },
        {
          id: '2',
          title: 'HTML: Building Web Pages',
          duration: '20:30',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'HTML (HyperText Markup Language) is the foundation of all websites. It is like the skeleton of a webpage - it provides structure and meaning to content. In this lesson, we will learn about HTML tags, how to structure a webpage, and create our first HTML document with headings, paragraphs, links, and images.',
          signLanguageDescription: 'Watch as our avatar builds a webpage from scratch, showing how each HTML tag creates different elements. We use visual building blocks to represent how HTML structures content.',
          accessibilityFeatures: [
            'Live HTML code preview',
            'Visual tag relationship diagrams',
            'Semantic HTML importance explained',
            'Accessibility attributes demonstrated',
            'Screen reader testing included'
          ],
          completed: false
        },
        {
          id: '3',
          title: 'CSS: Making Websites Beautiful',
          duration: '18:45',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'CSS (Cascading Style Sheets) is what makes websites look beautiful and professional. If HTML is the skeleton, CSS is the clothing and makeup. In this lesson, we will learn how to style HTML elements, work with colors and fonts, create layouts, and make our websites responsive for different screen sizes.',
          signLanguageDescription: 'Our avatar will demonstrate CSS properties using visual transformations. Watch as plain HTML transforms into a beautiful webpage through CSS styling, with each property change clearly highlighted.',
          accessibilityFeatures: [
            'Before and after visual comparisons',
            'Color accessibility guidelines',
            'Font size and contrast demonstrations',
            'Responsive design principles',
            'CSS accessibility best practices'
          ],
          completed: false
        }
      ]
    },
    'advanced-ai-engineering': {
      id: '3',
      title: 'Advanced AI Engineering',
      description: 'Deep dive into machine learning, neural networks, and AI development with Python and TensorFlow',
      isPremium: true,
      accessibility: {
        signLanguage: true,
        captions: true,
        transcripts: true,
        screenReader: true
      },
      lessons: [
        {
          id: '1',
          title: 'Introduction to Machine Learning',
          duration: '25:30',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed. In this comprehensive lesson, we will explore the fundamental concepts, types of machine learning, and real-world applications.',
          signLanguageDescription: 'Our avatar will use visual diagrams and animations to explain complex ML concepts, making abstract ideas concrete through visual metaphors and step-by-step demonstrations.',
          accessibilityFeatures: [
            'Interactive ML concept visualizations',
            'Algorithm flowchart explanations',
            'Code examples with detailed annotations',
            'Mathematical concepts simplified visually',
            'Hands-on coding exercises'
          ],
          completed: false
        },
        {
          id: '2',
          title: 'Neural Networks Fundamentals',
          duration: '30:45',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Neural networks are the backbone of modern AI. Inspired by the human brain, these networks can learn complex patterns and make predictions. We will build our first neural network from scratch and understand how neurons, layers, and activation functions work together.',
          signLanguageDescription: 'Watch as our avatar constructs neural networks visually, showing how data flows through layers, how weights are adjusted, and how the network learns from examples.',
          accessibilityFeatures: [
            'Animated neural network diagrams',
            'Interactive weight adjustment demos',
            'Visual backpropagation explanation',
            'Code implementation with step-by-step guidance',
            'Performance visualization tools'
          ],
          completed: false
        }
      ]
    },
    'advanced-python': {
      id: '4',
      title: 'Advanced Python Development',
      description: 'Master advanced Python concepts including Django, Flask, and professional development practices',
      isPremium: true,
      accessibility: {
        signLanguage: true,
        captions: true,
        transcripts: true,
        screenReader: true
      },
      lessons: [
        {
          id: '1',
          title: 'Django Framework Mastery',
          duration: '35:20',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. In this lesson, we will build a complete web application from scratch, covering models, views, templates, and deployment strategies.',
          signLanguageDescription: 'Our avatar will guide you through Django development with visual code walkthroughs, showing how each component connects and how to structure professional web applications.',
          accessibilityFeatures: [
            'Live coding demonstrations',
            'Architecture diagram explanations',
            'Database relationship visualizations',
            'Deployment process step-by-step',
            'Best practices highlighted throughout'
          ],
          completed: false
        }
      ]
    }
  }

  const course = courses[slug || ''] // Changed from courseSlug to slug
  const currentLesson = course?.lessons[currentLessonIndex]

  useEffect(() => {
    if (!course) return
    
    // Calculate overall progress
    const completedLessons = course.lessons.filter(lesson => lesson.completed).length
    const totalLessons = course.lessons.length
    setProgress((completedLessons / totalLessons) * 100)
  }, [course])

  const handleLessonComplete = () => {
    if (currentLesson) {
      currentLesson.completed = true
      setProgress(prev => prev + (100 / course.lessons.length))
    }
  }

  const nextLesson = () => {
    if (currentLessonIndex < course.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
      setIsPlaying(false)
    }
  }

  const previousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
      setIsPlaying(false)
    }
  }

  if (!course) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/courses">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
        </div>
      </Layout>
    )
  }

  // Check if user has access to premium content
  const hasAccess = !course.isPremium || user?.subscription_tier === 'premium'

  if (!hasAccess) {
    return (
      <Layout>
        <div className="text-center py-20">
          <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Premium Course</h1>
          <p className="text-gray-600 mb-8">This course requires a premium subscription to access.</p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/subscribe">
                <Crown className="w-4 h-4 mr-2" />
                Upgrade to Premium
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/courses">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Accessibility Features */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/courses">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
              <p className="text-gray-600">{course.description}</p>
              <div className="flex items-center space-x-4 mt-2">
                {course.accessibility.signLanguage && (
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    <Eye className="w-3 h-3 mr-1" />
                    Sign Language
                  </Badge>
                )}
                {course.accessibility.captions && (
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    Captions
                  </Badge>
                )}
                {course.accessibility.transcripts && (
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Transcripts
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SignLanguageAvatar variant="course" size="lg" />
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">Your Learning Assistant</p>
              <p className="text-xs text-gray-500">AI Sign Language Avatar</p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Course Progress</span>
              <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
              <span>Lesson {currentLessonIndex + 1} of {course.lessons.length}</span>
              <span>{course.lessons.filter(l => l.completed).length} lessons completed</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player with Sign Language Avatar */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-black rounded-t-lg relative overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDY0MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzkzREYiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRDRFRDgiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojREMyNjI2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPGNpcmNsZSBjeD0iMzIwIiBjeT0iMTgwIiByPSI0MCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIvPgo8cG9seWdvbiBwb2ludHM9IjMxMCwxNjUgMzEwLDE5NSAzMzUsMTgwIiBmaWxsPSIjMzM5M0RGIi8+Cjx0ZXh0IHg9IjMyMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCI+U2lnbi10by1Db2RlIExlc3NvbjwvdGV4dD4KPC9zdmc+"
                  >
                    <source src={currentLesson?.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Floating Sign Language Avatar */}
                  {showSignLanguage && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <SignLanguageAvatar variant="course" size="md" />
                      <p className="text-xs text-gray-600 mt-1 text-center">Sign Language</p>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{currentLesson?.title}</h2>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{currentLesson?.duration}</span>
                        </Badge>
                        {currentLesson?.completed && (
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={previousLesson}
                        disabled={currentLessonIndex === 0}
                      >
                        <SkipBack className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextLesson}
                        disabled={currentLessonIndex === course.lessons.length - 1}
                      >
                        <SkipForward className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowSignLanguage(!showSignLanguage)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowTranscript(!showTranscript)}
                      >
                        <BookOpen className="w-4 h-4" />
                      </Button>
                      {!currentLesson?.completed && (
                        <Button size="sm" onClick={handleLessonComplete}>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Mark Complete
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transcript */}
            {showTranscript && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Lesson Transcript</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{currentLesson?.transcript}</p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Sign Language Description</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{currentLesson?.signLanguageDescription}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Lesson List & Accessibility Features */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Course Lessons</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {course.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                      index === currentLessonIndex
                        ? 'bg-blue-50 border-blue-200 shadow-sm'
                        : 'hover:bg-gray-50 border-gray-200'
                    }`}
                    onClick={() => {
                      setCurrentLessonIndex(index)
                      setIsPlaying(false)
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{lesson.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-500">{lesson.duration}</span>
                          {lesson.completed && (
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          )}
                        </div>
                      </div>
                      {index === currentLessonIndex && (
                        <Play className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Accessibility Features */}
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">This Lesson Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {currentLesson?.accessibilityFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Our platform is designed for accessibility. Contact support for assistance.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}