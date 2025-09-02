import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { 
  BookOpen, 
  FileText, 
  Briefcase, 
  Home, 
  Settings,
  SkipForward,
  User,
  LogOut,
  Crown,
  Building
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import SignLanguageAvatar from '@/components/SignLanguageAvatar'
import RegisterForm from '@/components/Auth/RegisterForm'
import LoginForm from '@/components/Auth/LoginForm'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const { user, signOut, isPremium } = useAuth()
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const skipToContent = () => {
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView()
    }
  }

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/courses', label: 'Learn', icon: BookOpen },
    { href: '/cv-builder', label: 'Build CV', icon: FileText },
    { href: '/jobs', label: 'Find Jobs', icon: Briefcase },
    { href: '/employer-training', label: 'Employers', icon: Building },
  ]

  const handleAuthSuccess = () => {
    setShowAuth(false)
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Skip to content link */}
      <Button
        onClick={skipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50"
        variant="outline"
      >
        <SkipForward className="w-4 h-4 mr-2" />
        Skip to main content
      </Button>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <SignLanguageAvatar variant="default" size="sm" />
              <Link 
                to="/" 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 transition-all duration-300"
                aria-label="Sign-to-Code home page"
              >
                Sign-to-Code
              </Link>
            </div>
            
            <nav role="navigation" aria-label="Main navigation" className="hidden md:block">
              <ul className="flex space-x-1">
                {navigationItems.map(({ href, label, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        location.pathname === href
                          ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      aria-current={location.pathname === href ? 'page' : undefined}
                    >
                      <Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  {isPremium && (
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                  <span className="text-sm text-gray-600 hidden sm:block">
                    Welcome, {user.email?.split('@')[0]}
                  </span>
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Dialog open={showAuth} onOpenChange={setShowAuth}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setAuthMode('login')}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Sign In
                      </Button>
                    </DialogTrigger>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => setAuthMode('register')}
                      >
                        Get Started
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
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main 
        id="main-content" 
        tabIndex={-1}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        role="main"
      >
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <SignLanguageAvatar variant="default" size="sm" />
            </div>
            <p className="text-sm text-gray-600">
              Sign-to-Code - Accessible learning for everyone
            </p>
            <p className="text-xs text-gray-500">
              Built with accessibility in mind • WCAG 2.2 AA compliant • Powered by AI sign language avatars
            </p>
            <div className="flex justify-center space-x-6 text-xs text-gray-400">
              <span>✓ Sign Language Support</span>
              <span>✓ Screen Reader Compatible</span>
              <span>✓ Keyboard Navigation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}