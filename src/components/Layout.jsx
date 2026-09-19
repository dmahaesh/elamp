import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'

export default function Layout() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-ink text-mist">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
