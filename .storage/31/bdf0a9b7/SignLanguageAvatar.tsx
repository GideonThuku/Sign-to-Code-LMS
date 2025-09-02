import { useState, useEffect } from 'react'

interface SignLanguageAvatarProps {
  variant?: 'default' | 'welcome' | 'course' | 'help' | 'success'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

// Using placeholder avatars since the Supabase URLs might not be accessible
const avatarVariants = {
  default: '/assets/signtocode-logo.png',
  welcome: '/assets/signtocode-logo.png', 
  course: '/assets/signtocode-logo.png',
  help: '/assets/signtocode-logo.png',
  success: '/assets/signtocode-logo.png'
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-24 h-24'
}

export default function SignLanguageAvatar({ 
  variant = 'default', 
  size = 'md', 
  className = '' 
}: SignLanguageAvatarProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentAvatar, setCurrentAvatar] = useState(avatarVariants[variant])

  useEffect(() => {
    setCurrentAvatar(avatarVariants[variant])
  }, [variant])

  useEffect(() => {
    // Animate avatar every 5 seconds
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className={`
        relative w-full h-full rounded-full overflow-hidden border-2 border-blue-200 
        shadow-lg transition-all duration-300 
        ${isAnimating ? 'scale-110 border-red-400 shadow-xl' : ''}
      `}>
        <img
          src={currentAvatar}
          alt="Sign-to-Code Avatar"
          className={`
            w-full h-full object-cover transition-all duration-300
            ${isAnimating ? 'scale-105' : ''}
          `}
          onError={(e) => {
            // Fallback to a default avatar with logo colors
            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNTAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzOTNERiIvPgo8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFENEVEOCIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cGF0aCBkPSJNNTAgMjBMMzUgNDBINjVMNTAgMjBaIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjYwIiByPSIxNSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+'
          }}
        />
        
        {/* Pulse animation indicator */}
        {isAnimating && (
          <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping opacity-75" />
        )}
      </div>
      
      {/* Status indicator */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm">
        <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
      </div>
    </div>
  )
}