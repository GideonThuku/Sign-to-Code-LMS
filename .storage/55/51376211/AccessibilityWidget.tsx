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
  RotateCcw
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
      {/* Accessibility Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Open accessibility settings"
        >
          <Accessibility className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Accessibility className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Accessibility Settings</CardTitle>
                  <p className="text-sm text-gray-600">Customize your experience</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility settings"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Vision Settings */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Vision</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">High Contrast</p>
                      <p className="text-sm text-gray-600">Increase color contrast</p>
                    </div>
                    <Button
                      variant={settings.highContrast ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('highContrast')}
                    >
                      <Palette className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Large Text</p>
                      <p className="text-sm text-gray-600">Increase text size</p>
                    </div>
                    <Button
                      variant={settings.largeText ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('largeText')}
                    >
                      <Type className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-gray-600">Switch to dark theme</p>
                    </div>
                    <Button
                      variant={settings.darkMode ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('darkMode')}
                    >
                      {settings.darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Reduced Motion</p>
                      <p className="text-sm text-gray-600">Minimize animations</p>
                    </div>
                    <Button
                      variant={settings.reducedMotion ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('reducedMotion')}
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Font Size Control */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Font Size</h3>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => adjustFontSize('decrease')}
                      disabled={settings.fontSize <= 80}
                    >
                      <ZoomOut className="w-4 h-4" />
                    </Button>
                    <Badge variant="outline" className="px-3 py-1">
                      {settings.fontSize}%
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => adjustFontSize('increase')}
                      disabled={settings.fontSize >= 150}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => adjustFontSize('reset')}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Navigation Settings */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <Keyboard className="w-4 h-4" />
                  <span>Navigation</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Keyboard Navigation</p>
                      <p className="text-sm text-gray-600">Enhanced keyboard support</p>
                    </div>
                    <Button
                      variant={settings.keyboardNav ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('keyboardNav')}
                    >
                      <Keyboard className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Screen Reader</p>
                      <p className="text-sm text-gray-600">Enhanced announcements</p>
                    </div>
                    <Button
                      variant={settings.screenReader ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSetting('screenReader')}
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={resetSettings}
                  className="w-full"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset to Default
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add CSS for accessibility classes */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%);
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
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
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