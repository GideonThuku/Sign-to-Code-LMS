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
  Crown
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
  completed: boolean
}

interface Course {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  isPremium: boolean
}

export default function CoursePlayer() {
  const { courseSlug } = useParams()
  const { user } = useAuth()
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showTranscript, setShowTranscript] = useState(true)
  const [progress, setProgress] = useState(0)

  // Mock course data - in real app, this would come from API
  const courses: Record<string, Course> = {
    'digital-literacy-101': {
      id: '1',
      title: 'Digital Literacy 101',
      description: 'Master email, online safety, and essential digital skills',
      isPremium: false,
      lessons: [
        {
          id: '1',
          title: 'Introduction to Digital Literacy',
          duration: '10:30',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Welcome to Digital Literacy 101. In this course, we will cover the essential digital skills needed in today\'s world. We\'ll start with email basics, move on to internet safety, and finish with productivity tools.',
          completed: false
        },
        {
          id: '2',
          title: 'Email Basics and Communication',
          duration: '15:45',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Email is one of the most important digital communication tools. In this lesson, we\'ll learn how to create professional emails, manage your inbox, and use email safely.',
          completed: false
        },
        {
          id: '3',
          title: 'Internet Safety and Security',
          duration: '12:20',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Staying safe online is crucial. We\'ll cover password security, recognizing phishing attempts, and protecting your personal information while browsing the internet.',
          completed: false
        }
      ]
    },
    'coding-basics': {
      id: '2',
      title: 'Coding Basics',
      description: 'Learn programming fundamentals and create your first webpage',
      isPremium: false,
      lessons: [
        {
          id: '1',
          title: 'What is Programming?',
          duration: '8:15',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'Programming is the process of creating instructions for computers. In this lesson, we\'ll explore what programming is, why it\'s useful, and the different types of programming languages.',
          completed: false
        },
        {
          id: '2',
          title: 'HTML Fundamentals',
          duration: '20:30',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'HTML is the foundation of web development. We\'ll learn about HTML tags, structure, and how to create your first webpage with headings, paragraphs, and links.',
          completed: false
        },
        {
          id: '3',
          title: 'CSS Styling Basics',
          duration: '18:45',
          videoUrl: '/assets/robotica-demo.mp4',
          transcript: 'CSS makes websites beautiful. In this lesson, we\'ll learn how to style HTML elements, work with colors, fonts, and create responsive layouts.',
          completed: false
        }
      ]
    }
  }

  const course = courses[courseSlug || '']
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
        {/* Header */}
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
            </div>
          </div>
          <SignLanguageAvatar variant="course" size="md" />
        </div>

        {/* Progress */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Course Progress</span>
              <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player */}
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
                    <SignLanguageAvatar variant="course" size="sm" />
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
                  <p className="text-gray-700 leading-relaxed">{currentLesson?.transcript}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Lesson List */}
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

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Features</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI Sign Language Avatars</li>
                    <li>• Full Transcripts</li>
                    <li>• Progress Tracking</li>
                    <li>• Mobile Friendly</li>
                    <li>• Accessible Design</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Our support team is here to help you succeed.
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