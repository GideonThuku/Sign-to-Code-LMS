import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  BookOpen, 
  FileText, 
  Briefcase, 
  Home, 
  Settings,
  SkipForward
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const skipToContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/courses', label: 'Learn', icon: BookOpen },
    { href: '/cv-builder', label: 'Build CV', icon: FileText },
    { href: '/jobs', label: 'Find Jobs', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0C32C300] mt-[0px] mr-[0px] mb-[0px] ml-[0px] pt-[0px] pr-[24px] pb-[0px] pl-[24px] text-[16px] font-normal font-sans opacity-100 text-[#020817]">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Sign-to-Code home page"
              >
                Sign-to-Code
              </Link>
            </div>
            
            <nav role="navigation" aria-label="Main navigation">
              <ul className="flex space-x-1">
                {navigationItems.map(({ href, label, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        location.pathname === href
                          ? 'bg-blue-100 text-blue-700'
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
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Sign-to-Code - Accessible learning for everyone
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Built with accessibility in mind • WCAG 2.2 AA compliant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
