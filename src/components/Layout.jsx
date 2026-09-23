import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'

function PageFallback() {
  return (
    <div className="grid min-h-[70vh] place-items-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-flare" />
    </div>
  )
}

export default function Layout() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-ink text-mist">
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
