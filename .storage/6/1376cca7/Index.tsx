import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  ArrowRight
} from 'lucide-react';
import Layout from '@/components/Layout';

export default function Index() {
  const features = [
    {
      icon: Eye,
      title: 'Sign Language Avatars',
      description: 'AI-powered KSL avatars make learning visual and accessible',
    },
    {
      icon: Headphones,
      title: 'Full Accessibility',
      description: 'Captions, transcripts, and screen reader support',
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility and WCAG 2.2 AA compliance',
    },
  ];

  const learningPaths = [
    {
      title: 'Digital Literacy 101',
      description: 'Master email, online safety, and essential digital skills',
      duration: '2 hours',
      level: 'Beginner',
      lessons: 3,
      slug: 'digital-literacy-101',
    },
    {
      title: 'Coding Basics',
      description: 'Learn programming fundamentals and create your first webpage',
      duration: '1.5 hours',
      level: 'Beginner',
      lessons: 3,
      slug: 'coding-basics',
    },
  ];

  return (
    <Layout>
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Learn Digital Skills with
              <span className="text-blue-600 block">Sign-to-Code</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An accessible learning platform designed for Deaf and Hard-of-Hearing youth, 
              featuring AI sign language avatars, comprehensive captions, and career-ready skills.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/courses">
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/cv-builder">
                <FileText className="w-5 h-5 mr-2" />
                Build Your CV
              </Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Accessibility
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature is designed with accessibility in mind, ensuring an inclusive learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully crafted courses designed to build essential digital and coding skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{path.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{path.level}</Badge>
                        <span className="text-sm text-gray-500">
                          {path.lessons} lessons • {path.duration}
                        </span>
                      </div>
                    </div>
                    <BookOpen className="w-8 h-8 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{path.description}</p>
                  <Button asChild className="w-full">
                    <Link to={`/course/${path.slug}`}>
                      Start Course
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Ready */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              From Learning to Career
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build your skills, create a professional CV, and discover inclusive job opportunities 
              with our comprehensive career readiness tools.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="bg-white">
                <CardContent className="pt-6 text-center">
                  <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">CV Builder</h3>
                  <p className="text-gray-600 mb-4">
                    Create a professional CV with speech-to-text support and accessible design.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/cv-builder">Build CV</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6 text-center">
                  <Briefcase className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Job Discovery</h3>
                  <p className="text-gray-600 mb-4">
                    Find inclusive employers and get tips for successful interviews.
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
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Accessibility First</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">WCAG 2.2 AA Compliant</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Accessible Learning</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
                <div className="text-gray-300">Inclusive Opportunities</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join Sign-to-Code today and unlock your potential with accessible, 
            career-focused digital education.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/courses">
              <Play className="w-5 h-5 mr-2" />
              Begin Learning Now
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}