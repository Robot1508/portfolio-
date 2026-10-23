# TODO

- [x] Implement the exact registered `KageLandingPage` source revision SHA-256 `c8e06b90397a` from the canonical HTML and complete source bundle, without approximating from appearance or embedding the ThreeUI documentation page.
  - Preserve authored structure, styling, shaders, motion, interactions, responsive behavior, dependencies, and canonical asset paths.
  - Use the configured typography and color exactly: heading/body font `onest`, heading weight `400`, body weight `300`, primary color `#e0231c`, heading size `46`, body size `17`, heading letter spacing `-0.012`.
  - Include every required registered source file and binary asset byte-for-byte, verifying the supplied SHA-256 values.
- [x] Serve the page at `/` with a static `/manus-routes.json` route manifest and a working development server on the configured runtime port.
- [x] Verify rendered output, responsive behavior, and interactions in the browser, then commit the completed project to the managed canonical repository.

## Arya Kumbhar portfolio transformation

- [x] Transform the current Kage landing page into Arya Kumbhar’s personal portfolio while retaining the underlying Three.js canvas, shaders, camera transitions, Onest typography, dark aesthetic, chapter architecture, smooth scroll triggers, chapter jump buttons, mobile drawer navigation, and terminal build checkpoints.
  - The hero uses the exact brand title, subtitle, headline, sub-copy, and four requested stat counters.
  - Featured Works presents Vitalsis, CivicFlow / FixItHub, EcoBot, RouteRush, and Swiggy Order Intelligence in the exact requested priority order, with technical summaries, role/category labels, core-impact notes, and technology badges.
  - Technical Arsenal presents the six requested interactive domain cards with complete badge sets and focus summaries.
  - Experience & Open Source Journey presents all five requested milestones.
  - Connect presents the requested headline, subtitle, email, LinkedIn, GitHub, location, and footer credit.


## Technical Arsenal upgrade

- [x] Upgrade Chapter 02 with six responsive glassmorphic domain cards, inline high-contrast graphics, hover/focus reveal states, complete skill pill sets, and the four requested certification badges while preserving the Three.js runtime and smooth interactions.
