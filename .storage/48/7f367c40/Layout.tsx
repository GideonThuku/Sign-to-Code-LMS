import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  FileText, 
  Briefcase, 
  User, 
  LogOut,
  Menu,
  X,
  Crown,
  Search
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { user, signOut } = useAuth()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: BookOpen },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Find Jobs', href: '/jobs', icon: Search },
    { name: 'CV Builder', href: '/cv-builder', icon: FileText },
    { name: 'Employer Training', href: '/employer-training', icon: Briefcase },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/assets/signtocode-logo.png" 
                alt="Sign-to-Code" 
                className="w-10 h-10 transition-transform group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzM5M0RGIi8+CjxzdG9wIG9mZnNldD0iNTAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMUQ0RUQ4Ii8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0RDMjYyNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0yMCA4TDE0IDE2SDI2TDIwIDhaIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjI4IiByPSI2IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4='
                }}
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent">
                  Sign-to-Code
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Accessible Learning Platform</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-blue-500 via-gray-800 to-red-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <SignLanguageAvatar variant="default" size="sm" />
              
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={user.subscription_tier === 'premium' ? 'default' : 'outline'}
                      className={user.subscription_tier === 'premium' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : ''}
                    >
                      {user.subscription_tier === 'premium' ? (
                        <>
                          <Crown className="w-3 h-3 mr-1" />
                          Premium
                        </>
                      ) : (
                        'Free'
                      )}
                    </Badge>
                    <span className="text-sm text-gray-600 hidden sm:inline">
                      {user.email}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={signOut}
                    className="flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link to="/auth?mode=login">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 hover:opacity-90">
                    <Link to="/auth?mode=register">Get Started</Link>
                  </Button>
                </div>
              )}

              {/* Mobile menu button */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-blue-500 via-gray-800 to-red-600 text-white shadow-lg'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/signtocode-logo.png" 
                  alt="Sign-to-Code" 
                  className="w-8 h-8"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNiIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzM5M0RGIi8+CjxzdG9wIG9mZnNldD0iNTAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMUQ0RUQ4Ii8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0RDMjYyNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0xNiA2TDEyIDEySDIwTDE2IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxNiIgY3k9IjIyIiByPSI0IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4='
                  }}
                />
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-gray-300 to-red-400 bg-clip-text text-transparent">
                  Sign-to-Code
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Empowering Deaf and Hard-of-Hearing youth with accessible digital skills training.
              </p>
              <div className="flex items-center space-x-2">
                <SignLanguageAvatar variant="default" size="sm" />
                <span className="text-xs text-gray-400">AI-Powered Learning</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Learning</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">All Courses</Link></li>
                <li><Link to="/course/digital-literacy-101" className="text-gray-300 hover:text-white transition-colors">Digital Literacy</Link></li>
                <li><Link to="/course/coding-basics" className="text-gray-300 hover:text-white transition-colors">Coding Basics</Link></li>
                <li><Link to="/subscribe" className="text-gray-300 hover:text-white transition-colors">Premium Courses</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-green-400">Career</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">Find Jobs</Link></li>
                <li><Link to="/cv-builder" className="text-gray-300 hover:text-white transition-colors">CV Builder</Link></li>
                <li><Link to="/employer-training" className="text-gray-300 hover:text-white transition-colors">Employer Training</Link></li>
                <li><a href="https://calendly.com/gideonthuku14/30min" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Schedule Consultation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-red-400">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:support@signtocode.com" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><Link to="/accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</Link></li>
                <li><a href="https://www.brightermonday.co.ke/jobs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Job Portal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sign-to-Code. Making digital education accessible for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}