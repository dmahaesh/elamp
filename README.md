# Natyaras — AI Film Studio landing page

Cinematic marketing site for **Natyaras**, an AI film studio for creators and studios.
Built with Vite + React + Tailwind CSS v4 + Motion.

## Features

- Cinematic hero with a rotating background video reel
- Model / feature grid with a flagship video spotlight
- Showcase gallery (vertical short clips, arrow navigation)
- Film-strip "How it works" section with animated sprockets
- Use cases with full native video players (play/pause, seek, volume, fullscreen)
- **Submit your movie idea** flow — Google sign-in + ₹1 Lakh Story Award, with
  long scripts uploadable as `.txt`
- Waitlist (Google login) and FAQ
- Fixed "Submit your story" prompt bar

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the build
```

## Configuration

Copy `.env.example` to `.env` and fill in:

| Variable | Purpose |
| --- | --- |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth Web client ID (enables real Google login). |
| `VITE_SUBMISSIONS_ENDPOINT` | POST endpoint that saves submitted stories to your table (Supabase / Apps Script / API). Falls back to `localStorage` when empty. |

## Media

The video clips used by the site live in `public/`. The original working folders
(`video/`, `movie/`, `short video/`) are gitignored — swap the files in `public/`
to update the media.
