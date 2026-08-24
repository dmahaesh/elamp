import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Showcase from './components/Showcase.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import UseCases from './components/UseCases.jsx'
import SubmitIdea from './components/SubmitIdea.jsx'
import Waitlist from './components/Waitlist.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import StoryPromptBar from './components/StoryPromptBar.jsx'

export default function App() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-ink text-mist">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <HowItWorks />
        <UseCases />
        <SubmitIdea />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
      {/* spacer so the fixed prompt bar never covers the footer */}
      <div className="h-40 sm:h-32" />
      <StoryPromptBar />
    </div>
  )
}
