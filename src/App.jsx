import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'

// Route-level code splitting: only Home + the shell load on first paint;
// each other page is fetched on navigation.
const Envision = lazy(() => import('./pages/Envision.jsx'))
const Lens = lazy(() => import('./pages/Lens.jsx'))
const Amplify = lazy(() => import('./pages/Amplify.jsx'))
const Multiply = lazy(() => import('./pages/Multiply.jsx'))
const Profit = lazy(() => import('./pages/Profit.jsx'))
const Work = lazy(() => import('./pages/Work.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/envision" element={<Envision />} />
        <Route path="/lens" element={<Lens />} />
        <Route path="/amplify" element={<Amplify />} />
        <Route path="/multiply" element={<Multiply />} />
        <Route path="/profit" element={<Profit />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
