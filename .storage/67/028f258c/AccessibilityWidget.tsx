import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Accessibility,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Type,
  Palette,
  MousePointer,
  Keyboard,
  X,
  Settings,
  Sun,
  Moon,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  HandHeart
} from 'lucide-react'

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNav: false,
    darkMode: false,
    fontSize: 100,
    cursorSize: 'normal'
  })

  const toggleSetting = (setting: keyof typeof settings) => {
    const newSettings = { ...settings, [setting]: !settings[setting] }
    setSettings(newSettings)
    applyAccessibilitySettings(newSettings)
  }

  const adjustFontSize = (direction: 'increase' | 'decrease' | 'reset') => {
    let newSize = settings.fontSize
    if (direction === 'increase' && newSize < 150) {
      newSize += 10
    } else if (direction === 'decrease' && newSize > 80) {
      newSize -= 10
    } else if (direction === 'reset') {
      newSize = 100
    }
    
    const newSettings = { ...settings, fontSize: newSize }
    setSettings(newSettings)
    applyAccessibilitySettings(newSettings)
  }

  const applyAccessibilitySettings = (newSettings: typeof settings) => {
    const root = document.documentElement

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text')
    } else {
      root.classList.remove('large-text')
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // Dark mode
    if (newSettings.darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Font size
    root.style.fontSize = `${newSettings.fontSize}%`

    // Keyboard navigation
    if (newSettings.keyboardNav) {
      root.classList.add('keyboard-nav')
    } else {
      root.classList.remove('keyboard-nav')
    }

    // Screen reader announcements
    if (newSettings.screenReader) {
      announceToScreenReader('Accessibility settings updated')
    }
  }

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }

  const resetSettings = () => {
    const defaultSettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNav: false,
      darkMode: false,
      fontSize: 100,
      cursorSize: 'normal'
    }
    setSettings(defaultSettings)
    applyAccessibilitySettings(defaultSettings)
    announceToScreenReader('Accessibility settings reset to default')
  }

  return (
    <>
      {/* Accessibility Button - Left Side */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-white"
          aria-label="Open accessibility settings"
          title="Accessibility Settings"
        >
          <div className="flex flex-col items-center">
            <HandHeart className="w-7 h-7 text-white mb-1" />
            <span className="text-xs text-white font-bold">A11Y</span>
          </div>
        </Button>
        
        {/* Floating indicator */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
          <Accessibility className="w-3 h-3 text-white" />
        </div>
      </div>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <HandHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Accessibility Center</CardTitle>
                  <p className="text-sm text-gray-600">Customize your experience for better accessibility</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility settings"
                className="border-2 border-gray-300 hover:border-red-400"
              >
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-8 p-6">
              {/* Vision Settings */}
              <div className="space-y-6">
                <h3 className="font-bold text-xl text-gray-900 flex items-center space-x-3 border-b pb-2">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <span>Vision & Display</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between p-4 border-2 rounded-xl hover:border-blue-300 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900">High Contrast</p>
                      <p className="text-sm text-gray-600">Increase color contrast for better visibility</p>
                    </div>
                    <Button
                      variant={settings.highContrast ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('highContrast')}
                      className={settings.highContrast ? "bg-blue-600" : ""}
                    >
                      <Palette className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border-2 rounded-xl hover:border-blue-300 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900">Large Text</p>
                      <p className="text-sm text-gray-600">Increase default text size</p>
                    </div>
                    <Button
                      variant={settings.largeText ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('largeText')}
                      className={settings.largeText ? "bg-blue-600" : ""}
                    >
                      <Type className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border-2 rounded-xl hover:border-blue-300 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900">Dark Mode</p>
                      <p className="text-sm text-gray-600">Switch to dark theme</p>
                    </div>
                    <Button
                      variant={settings.darkMode ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('darkMode')}
                      className={settings.darkMode ? "bg-blue-600" : ""}
                    >
                      {settings.darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border-2 rounded-xl hover:border-blue-300 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900">Reduced Motion</p>
                      <p className="text-sm text-gray-600">Minimize animations and transitions</p>
                    </div>
                    <Button
                      variant={settings.reducedMotion ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('reducedMotion')}
                      className={settings.reducedMotion ? "bg-blue-600" : ""}
                    >
                      <Settings className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Font Size Control */}
              <div className="space-y-6">
                <h3 className="font-bold text-xl text-gray-900 border-b pb-2">Font Size Control</h3>
                <div className="flex items-center justify-between p-4 border-2 rounded-xl bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => adjustFontSize('decrease')}
                      disabled={settings.fontSize <= 80}
                      className="border-2"
                    >
                      <ZoomOut className="w-5 h-5" />
                    </Button>
                    <Badge variant="outline" className="px-4 py-2 text-lg font-bold">
                      {settings.fontSize}%
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => adjustFontSize('increase')}
                      disabled={settings.fontSize >= 150}
                      className="border-2"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => adjustFontSize('reset')}
                    className="border-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Navigation Settings */}
              <div className="space-y-6">
                <h3 className="font-bold text-xl text-gray-900 flex items-center space-x-3 border-b pb-2">
                  <Keyboard className="w-6 h-6 text-green-600" />
                  <span>Navigation & Input</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between p-4 border-2 rounded-xl hover:border-green-300 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900">Keyboard Navigation</p>
                      <p className="text-sm text-gray-600">Enhanced keyboard support and focus indicators</p>
                    </div>
                    <Button
                      variant={settings.keyboardNav ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('keyboardNav')}
                      className={settings.keyboardNav ? "bg-green-600" : ""}
                    >
                      <Keyboard className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border-2 rounded-xl hover:border-green-300 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900">Screen Reader</p>
                      <p className="text-sm text-gray-600">Enhanced announcements and descriptions</p>
                    </div>
                    <Button
                      variant={settings.screenReader ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('screenReader')}
                      className={settings.screenReader ? "bg-green-600" : ""}
                    >
                      <Volume2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={resetSettings}
                  className="w-full py-3 border-2 border-gray-300 hover:border-red-400 hover:bg-red-50"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset All Settings to Default
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add CSS for accessibility classes */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(1.1);
        }
        
        .large-text {
          font-size: 120% !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .keyboard-nav *:focus {
          outline: 4px solid #3b82f6 !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  )
}