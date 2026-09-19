import PageHero from '../components/PageHero.jsx'
import Features from '../components/Features.jsx'
import Showcase from '../components/Showcase.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import UseCases from '../components/UseCases.jsx'

// L — Lens: the studio where the story becomes content.
export default function Lens() {
  return (
    <>
      <PageHero pillarKey="lens" />
      <Features />
      <Showcase />
      <HowItWorks />
      <UseCases />
    </>
  )
}
