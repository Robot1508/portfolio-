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


## Technical Arsenal 3-Pillar Consolidation & Chapter Updates

- [x] Streamline Technical Arsenal from 6 cards into 3 focused, high-impact pillars in a responsive 3-column grid (`grid-cols-1 md:grid-cols-3 gap-6`):
  - Pillar 01: MACHINE LEARNING & DATA INTELLIGENCE (Python, SQL, C++, Pandas, NumPy, Scikit-learn, XGBoost, YOLO) — "MODELS WITH MEASURABLE SIGNAL"
  - Pillar 02: FULL-STACK & SYSTEMS (FastAPI, PostgreSQL, React, Next.js, Node.js, Supabase, Tailwind CSS) — "STRUCTURED FOR SCALE"
  - Pillar 03: CLOUD, AI & DEPLOYMENT (AWS Lambda, Google Cloud Platform, Gemini API, Vertex AI, Git / GitHub, Docker) — "SHIP, OBSERVE, SCALE"
- [x] Removed redundant syntax/theoretical tags (CTEs, Window Functions, 3NF Normalization, OOP, Systems & Data Processing).
- [x] Removed generic development tools (VS Code, PowerShell, Prompt Engineering, JSON Schema Validation, Git Rebase / Bisect).
- [x] Consolidated framework duplicates (dropped Express.js & Firebase in favor of FastAPI, PostgreSQL, Supabase).
- [x] Updated Chapter Titles & Subheadings:
  - Chapter 00: "CHAPTER 00 — OVERVIEW" with "ENGINEERING INTELLIGENCE INTO SCALABLE SYSTEMS"
  - Chapter 01: "CHAPTER 01 — FEATURED SYSTEMS" with "Production AI, Multimodal ML & Data Pipelines"
  - Chapter 02: "CHAPTER 02 — TECHNICAL ARSENAL" with "Core Architecture, Intelligent Models & Delivery"
  - Chapter 03: "CHAPTER 03 — EXPERIENCE & JOURNEY" with "Open-Source Mentorship, Engineering Roles & Hackathons"
  - Chapter 04: "CHAPTER 04 — CONNECT" with "LET’S BUILD SCALABLE INTELLIGENCE"
- [x] Fixed TypeScript event callback typing in `src/shaders/landing-pages/LandingPageFrame.tsx` (`(event: React.SyntheticEvent)`) with frame element casting.
- [x] Added dark translucent scrim/card (`bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-3xl`) behind hero headline and subtitle text for crisp readability over 3D canvas.
- [x] Added three primary hero action buttons: "View Work ↓" (smooth-scrolls to #work), "GitHub Profile ↗" (opens https://github.com/Robot1508 in new tab), and "Download Resume" (links to `/resume.pdf` with download attribute).
- [x] Streamlined Chapter 02 (Technical Arsenal) into 3 high-impact pillars in a responsive 3-column layout (`grid grid-cols-1 md:grid-cols-3 gap-6`):
  - Pillar 01: MACHINE LEARNING & DATA (Python, SQL, C++, Pandas, NumPy, Scikit-learn, XGBoost, YOLO) — "MODELS WITH MEASURABLE SIGNAL" — "Statistical modeling, computer vision, and high-throughput data processing."
  - Pillar 02: FULL-STACK & SYSTEMS (FastAPI, PostgreSQL, React, Next.js, Node.js, Supabase, Tailwind CSS) — "STRUCTURED FOR SCALE" — "Scalable APIs, normalized relational databases, and modern reactive interfaces."
  - Pillar 03: CLOUD, AI & DEPLOYMENT (AWS Lambda, Google Cloud, Gemini API, Vertex AI, Git / GitHub, Docker) — "SHIP, OBSERVE, SCALE" — "Serverless execution, multimodal AI orchestration, and automated delivery pipelines."
- [x] Updated project dataset with `githubUrl` and `liveUrl` fields with exact casing (`RouteRush`: `https://github.com/Robot1508/RouteRush`).
- [x] Rendered action bars in all 5 featured project cards with "View Code ↗" and "Live Demo ↗" / "Architecture ↗" with dark glassmorphic styling and isolated click handling.
- [x] Configured direct GitHub navigation (`https://github.com/Robot1508`) in desktop navbar, mobile drawer, Chapter 04 connect strip, and footer ELSEWHERE links.

