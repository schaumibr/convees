import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Welcome from './pages/Welcome'
import About from './pages/About'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import ResetPassword from './pages/ResetPassword'
import AuthCallback from './pages/AuthCallback'

function App() {
  return (
     
    
    <BrowserRouter basename="/convees">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
           
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
