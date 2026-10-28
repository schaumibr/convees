import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Welcome from './pages/Welcome'
import About from './pages/About'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import ResetPassword from './pages/ResetPassword'
import AuthCallback from './pages/AuthCallback'
// Add this at the top with other imports
import Career from './pages/Career'; 

// Inside your <Routes> block, add this:


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
          <Route path="/career" element={<Career />} />
           
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
