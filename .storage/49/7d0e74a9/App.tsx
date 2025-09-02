import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/hooks/useAuth'
import Index from './pages/Index'
import Courses from './pages/Courses'
import Jobs from './pages/Jobs'
import CoursePlayer from './pages/CoursePlayer'
import CVBuilder from './pages/CVBuilder'
import EmployerTraining from './pages/EmployerTraining'
import Subscribe from './pages/Subscribe'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/course/:courseSlug" element={<CoursePlayer />} />
          <Route path="/cv-builder" element={<CVBuilder />} />
          <Route path="/employer-training" element={<EmployerTraining />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App