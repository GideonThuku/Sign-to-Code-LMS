import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/hooks/useAuth'
import Index from './pages/Index'
import Courses from './pages/Courses'
import CoursePlayer from './pages/CoursePlayer'
import CVBuilder from './pages/CVBuilder'
import Jobs from './pages/Jobs'
import Subscribe from './pages/Subscribe'
import EmployerTraining from './pages/EmployerTraining'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:slug" element={<CoursePlayer />} />
            <Route path="/cv-builder" element={<CVBuilder />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/employer-training" element={<EmployerTraining />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
)

export default App