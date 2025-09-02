import { useState, useEffect } from 'react'

interface SignLanguageAvatarProps {
  variant?: 'default' | 'welcome' | 'course' | 'help' | 'success'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const avatarVariants = {
  default: 'https://kilomsuhrpgdjjsigkgr.supabase.co/storage/v1/object/public/assets%20hackathon/avatar-default.png',
  welcome: 'https://kilomsuhrpgdjjsigkgr.supabase.co/storage/v1/object/public/assets%20hackathon/avatar-welcome.png',
  course: 'https://kilomsuhrpgdjjsigkgr.supabase.co/storage/v1/object/public/assets%20hackathon/avatar-course.png',
  help: 'https://kilomsuhrpgdjjsigkgr.supabase.co/storage/v1/object/public/assets%20hackathon/avatar-help.png',
  success: 'https://kilomsuhrpgdjjsigkgr.supabase.co/storage/v1/object/public/assets%20hackathon/avatar-success.png'
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
        ${isAnimating ? 'scale-110 border-blue-400 shadow-xl' : ''}
      `}>
        <img
          src={currentAvatar}
          alt="Sign Language Avatar"
          className={`
            w-full h-full object-cover transition-all duration-300
            ${isAnimating ? 'scale-105' : ''}
          `}
          onError={(e) => {
            // Fallback to a default avatar if image fails to load
            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNTAiIGZpbGw9IiMzQjgyRjYiLz4KPHN2ZyB4PSIyNSIgeT0iMjUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CjxwYXRoIGQ9Im0xMiAzLTEuOTEyIDUuODEzYTIgMiAwIDAgMS0xLjI5NSAxLjI5NUwzIDEybDUuODEzIDEuOTEyYTIgMiAwIDAgMSAxLjI5NSAxLjI5NUwxMiAyMWwxLjkxMi01LjgxM2EyIDIgMCAwIDEgMS4yOTUtMS4yOTVMMjEgMTJsLTUuODEzLTEuOTEyYTIgMiAwIDAgMS0xLjI5NS0xLjI5NUwxMiAzWiIvPgo8L3N2Zz4KPC9zdmc+'
          }}
        />
        
        {/* Pulse animation indicator */}
        {isAnimating && (
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75" />
        )}
      </div>
      
      {/* Status indicator */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm">
        <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
      </div>
    </div>
  )
}