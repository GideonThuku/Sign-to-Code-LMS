import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/hooks/useAuth'
import Index from '@/pages/Index'
import About from '@/pages/About'
import Courses from '@/pages/Courses'
import Jobs from '@/pages/Jobs'
import CVBuilder from '@/pages/CVBuilder'
import EmployerTraining from '@/pages/EmployerTraining'
import Subscribe from '@/pages/Subscribe'
import LearningPlatform from '@/pages/LearningPlatform'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/cv-builder" element={<CVBuilder />} />
          <Route path="/employer-training" element={<EmployerTraining />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/course/:slug" element={<LearningPlatform />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App