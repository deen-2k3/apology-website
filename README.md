# A Little Message 💌

A small, gentle, single-page website: a personal apology letter for a best friend, turned into an interactive experience.

Built with **React 18 + Vite**, **Framer Motion** and **Lucide React** icons. Plain modern CSS, no UI framework.

## What's inside

1. **Welcome screen**: "Hey, Bestie! 🥺" in a glass card with an animated button.
2. **Envelope**: tap it. The flap opens, a letter slides out, and the full letter appears below.
3. **My apology**: the letter itself, on soft paper with each paragraph fading in as you scroll.
4. **A little reminder about our friendship**: three animated cards (You Matter, No Expectations, Take Your Time).
5. **One last thing**: an optional "Okay, I Read Everything ❤️" button that shows a calm thank-you note. Nothing is required of her.

Extras: floating CSS particles, twinkling stars, small SVG illustrations (flower, moon, two mugs), and reduced-motion support. Layout is responsive from phone to desktop.

## Project structure

```
apology-website/
├── index.html               # page shell, fonts (Caveat + Quicksand), favicon
├── package.json
├── vite.config.js
├── netlify.toml             # Netlify build settings
├── README.md
└── src/
    ├── main.jsx             # React entry
    ├── App.jsx              # page flow: welcome → envelope → letter sections
    ├── index.css            # design tokens, glassmorphism, envelope + all animations
    ├── data/
    │   └── content.js       # ALL the text on the page (edit words here)
    ├── utils/
    │   └── scroll.js        # smooth scroll helper
    └── components/
        ├── Background.jsx       # fixed layer: colour washes, particles, stars
        ├── Illustrations.jsx    # FlowerDoodle, MoonDoodle, TwoMugs (inline SVG)
        ├── SectionHeading.jsx   # reusable eyebrow + handwritten heading
        ├── Welcome.jsx          # 1. welcome screen
        ├── Envelope.jsx         # 2. interactive envelope
        ├── Apology.jsx          # 3. the apology letter
        ├── FriendshipCards.jsx  # 4. three friendship cards
        └── FinalSection.jsx     # 5. final message + thank-you animation
```

## Customising the words

Every piece of text lives in `src/data/content.js`. You can change the greeting, the letter, the card text or the signature (`— your friend`) there without touching any component.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
cd apology-website
npm install
npm run dev
```

Open http://localhost:5173.

To build and check the production version:

```bash
npm run build
npm run preview
```

The production files are written to `dist/`.

## Deploy

### Option A: Vercel

1. Push the `apology-website` folder to a GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Vercel detects **Vite** automatically (Build command `npm run build`, Output directory `dist`). Click **Deploy**.

Or deploy from the command line:

```bash
npm i -g vercel
vercel          # first time: answer the prompts, accept the detected Vite settings
vercel --prod
```

### Option B: Netlify

1. Push the folder to GitHub.
2. Go to https://app.netlify.com/start, connect the repository and deploy. `netlify.toml` already sets the build command to `npm run build` and the publish folder to `dist`.

Drag-and-drop alternative: run `npm run build`, then drag the `dist` folder onto https://app.netlify.com/drop.

Or deploy from the command line:

```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

## Notes

- Animations use only `transform` and `opacity`. Phones get fewer particles and a lighter blur.
- If the viewer's device has "reduce motion" turned on, decorative animations are switched off.
- The page has no tracking and no backend, and it does not send any data anywhere.
