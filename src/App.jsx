import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Envision from './pages/Envision.jsx'
import Lens from './pages/Lens.jsx'
import Amplify from './pages/Amplify.jsx'
import Multiply from './pages/Multiply.jsx'
import Profit from './pages/Profit.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

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
