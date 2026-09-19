import { PenLine, Clapperboard, Megaphone, Share2, TrendingUp } from 'lucide-react'

// The ELAMP product architecture. Each pillar is one homepage section and one
// internal page. Shared by the homepage flow, navbar, footer and page headers.
export const pillars = [
  {
    key: 'envision',
    letter: 'E',
    name: 'Envision',
    verb: 'Write it.',
    head: 'Turn an idea into a story.',
    tagline: 'Envision your story.',
    blurb:
      'Scriptwriting, story development, characters, concepts, treatments, screenplays and ad concepts.',
    path: '/envision',
    icon: PenLine,
  },
  {
    key: 'lens',
    letter: 'L',
    name: 'Lens',
    verb: 'Create it.',
    head: 'Turn the story into content.',
    tagline: 'Bring it to the lens.',
    blurb:
      'AI filmmaking, ads, shorts, scenes, characters, voices, music, editing and final production.',
    path: '/lens',
    icon: Clapperboard,
  },
  {
    key: 'amplify',
    letter: 'A',
    name: 'Amplify',
    verb: 'Promote it.',
    head: 'Make people notice.',
    tagline: 'Amplify your reach.',
    blurb:
      'Campaigns, social content and promotional hooks — powered by creator and celebrity networks that generate attention around your film, brand or story.',
    path: '/amplify',
    icon: Megaphone,
  },
  {
    key: 'multiply',
    letter: 'M',
    name: 'Multiply',
    verb: 'Distribute it.',
    head: 'Distribute everywhere.',
    tagline: 'Multiply your audience.',
    blurb:
      "ELamp's owned media properties, partner networks, social platforms, creators and other distribution channels multiply the audience for your content.",
    path: '/multiply',
    icon: Share2,
  },
  {
    key: 'profit',
    letter: 'P',
    name: 'Profit',
    verb: 'Monetize it.',
    head: 'Turn attention into revenue.',
    tagline: 'Profit from what you create.',
    blurb:
      'Monetize films, ads, IP and audiences through advertising, licensing, sponsorships, subscriptions, commerce and other revenue models.',
    path: '/profit',
    icon: TrendingUp,
  },
]
