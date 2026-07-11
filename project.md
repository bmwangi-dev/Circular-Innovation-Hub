# Circular Innovation Hub (CIH) — Complete Project & Data Assessment

> **Purpose**: This document is the single source of truth for every piece of hardcoded data across the entire CIH website. It exists so the backend migration (to Appwrite) can be done without re-reading every `.tsx` file. Every stat, service, partner, project, course module, pricing plan, form field, nav item, footer link, image path, SEO meta tag, and JSON-LD schema is captured below, organized by page.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Infrastructure](#2-tech-stack--infrastructure)
3. [File Structure](#3-file-structure)
4. [Configuration Files](#4-configuration-files)
5. [Brand Reference](#5-brand-reference)
6. [Navigation System](#6-navigation-system)
7. [Footer System](#7-footer-system)
8. [Page-by-Page Data Inventory](#8-page-by-page-data-inventory)
   - 8.1 Home (`/`)
   - 8.2 About (`/about`)
   - 8.3 Projects (`/projects`)
   - 8.4 Projects Detail (`/projects/:slug`)
   - 8.5 Corporates (`/corporates`)
   - 8.6 Advisory (`/advisory`)
   - 8.7 Co-Working (`/co-working`)
   - 8.8 Startup Hub (`/startup-hub`)
   - 8.9 Mentorship (`/mentorship`)
   - 8.10 BPO (`/bpo`)
   - 8.11 Academy (`/academy`)
   - 8.12 Apply (`/apply`)
   - 8.13 Contact Us (`/contactUs`)
   - 8.14 NotFound (`*`)
9. [Shared Components](#9-shared-components)
10. [Utility & Library Files](#10-utility--library-files)
11. [Styling System](#11-styling-system)
12. [SEO & Structured Data Register](#12-seo--structured-data-register)
13. [Complete Image Inventory](#13-complete-image-inventory)
14. [Build & Deployment Pipeline](#14-build--deployment-pipeline)
15. [Known Gaps & Roadmap](#15-known-gaps--roadmap)

---

## 1. Project Overview

**Circular Innovation Hub (CIH)** is a purely static marketing SPA for a Kenyan innovation hub focused on the circular economy. No backend, no database, no API, no CMS — all content is hardcoded TypeScript data inside page components. The site has 13 pages + a 404 catch-all.

- **Live URL**: https://www.circularinnovationhub.com
- **Type**: SPA (React 19 + Vite 8 + Tailwind v4)
- **Hosting**: Vercel (static)
- **Year founded (org)**: 2020 (mentioned on About page)
- **Office locations**: Nairobi, Kenya + Wilmington, Delaware, USA

---

## 2. Tech Stack & Infrastructure

| Layer           | Technology              | Version  |
|-----------------|-------------------------|----------|
| Framework       | React                   | 19.2.5   |
| Language        | TypeScript              | ~6.0.2   |
| Build Tool      | Vite                    | 8.0.10   |
| CSS             | Tailwind CSS            | 4.2.4    |
| Routing         | React Router DOM        | 7.14.2   |
| Icons           | Lucide React            | 1.3.0    |
| Image CDN       | Cloudinary (configured but unused) | SDK 1.x |
| SEO             | react-helmet-async      | 3.0.0    |
| PWA             | vite-plugin-pwa         | 1.3.0    |
| **No**          | backend, database, API, CMS, auth, forms engine | — |

### Infrastructure

| Service   | Purpose                      |
|-----------|------------------------------|
| Vercel    | Hosting, CDN, SSL, rewrites  |
| Vercel    | Git-based auto-deploy        |
| `dist/`   | Build output (deployed)      |

---

## 3. File Structure

```
/
├── .gitignore
├── .qodo/agents, .qodo/workflows
├── .agents, .codex
├── README.md
├── eslint.config.js
├── index.html                       # HTML shell with meta tags
├── package.json                     # Dependencies & scripts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vercel.json                      # SPA rewrites, headers
├── vite.config.ts                   # Build config, PWA, Tailwind plugin
│
├── scripts/
│   └── generate-sitemap.ts          # Build-time sitemap generator
│
├── public/                          # Static assets at root /
│   ├── robots.txt
│   ├── cih_logo_vec.png             # Main logo (also OG image & PWA icon)
│   ├── africanslums_logo.jpg
│   ├── ajry_logo.jpg
│   ├── chatpr_logo.jpg
│   ├── naitech_logo.jpg
│   ├── stitchingdeon_logo.jpg
│   ├── weecentre_logo.jpg
│   ├── conecptofcircularity.png      # Circularity diagram
│   ├── space-1.jpg through space-5.jpg
│   ├── training-1.webp through training-6.jpg
│   ├── webinar-1.jpg through webinar-5.jpg
│   └── ECE-COHORT01-BROCHURE.pdf
│
├── src/
│   ├── main.tsx                     # React entry point
│   ├── App.tsx                      # Route definitions (React.lazy)
│   ├── index.css                    # Tailwind v4 + custom keyframes/classes
│   ├── assets/images/
│   │   ├── CIH_logo.png
│   │   └── CIH_logo_nav.png
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── JourneyTimeline.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── SEO.tsx
│   │   └── Ui/NavbarDropdown.tsx
│   ├── lib/
│   │   ├── cloudinary.tsx           # OptimizedImage component
│   │   ├── cloudinaryAssets.ts      # Cloudinary public IDs (all undefined)
│   │   └── schema.ts               # JSON-LD generators
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── ProjectsDetail.tsx
│       ├── Corporates.tsx
│       ├── Advisory.tsx
│       ├── CoWorking.tsx
│       ├── StartupHub.tsx
│       ├── Mentorship.tsx
│       ├── Bpo.tsx
│       ├── Academy.tsx
│       ├── Apply.tsx
│       ├── ContactUs.tsx
│       └── NotFound.tsx
└── dist/                            # Build output
```

---

## 4. Configuration Files

### `index.html`
- Title tag: `Circular Innovation Hub`
- Meta description: `Circular Innovation Hub drives Africa's circular economy transition through advisory, co-working, BPO, startup hub, mentorship, and academy programs. Based in Nairobi with global reach.`
- Meta keywords: `circular economy, innovation hub, sustainability, Kenya, Nairobi, green business, circular innovation, startup incubator, corporate training`
- OG: title/description/url/image/type/site_name/locale
- Twitter: card/site/title/description/image
- Geo tags: position/placename/region
- Theme color: `#3d7118`

### `package.json` scripts
- `dev` — Vite dev server
- `build` — `tsc && vite build && npm run generate-sitemap`
- `generate-sitemap` — `tsx scripts/generate-sitemap.ts`
- `lint` — ESLint on `src/`
- `preview` — Vite preview

### `vite.config.ts` PWA manifest
- name: `Circular Innovation Hub`
- short_name: `CIH`
- theme_color: `#3d7118`
- background_color: `#ffffff`
- display: `standalone`
- icon: `/cih_logo_vec.png`

### `vercel.json` rewrites
All routes → `/index.html` (SPA fallback)

---

## 5. Brand Reference

| Token        | Hex       | Usage                                         |
|--------------|-----------|-----------------------------------------------|
| Brand Green  | `#3d7118` | Navbar bg, primary buttons, nav active states, theme color |
| Brand Gold   | `#e1ac00` | Accents, hover states, popular badges, gradient end |
| Dark Green   | `#0d1f0a` | Dark card backgrounds (Apply page CTA card)    |
| Dark BG      | `#0e1a06` | Project detail sidebar CTA card                |
| Dark Gray    | `#10220a` | Accordion toggle button bg                     |

### Gradients
- `gradient-text`: `linear-gradient(135deg, #3d7118 0%, #e1ac00 100%)`
- `bg-gradient-brand`: same as above
- Hero headline gradient: `from-[#3d7118] via-green-400 to-[#e1ac00]`
- Button shine: `from-[#3d7118] via-[#3d7118] to-[#e1ac00]`
- CTA sections: `from-[#3d7118] via-[#3d7118] to-[#e1ac00]`

---

## 6. Navigation System

### Desktop Nav Order (left to right)

| Item         | Type       | Path             | Dropdown Items |
|--------------|------------|------------------|----------------|
| Home         | link       | `/`              | —              |
| About        | link       | `/about`         | —              |
| Services     | dropdown   | —                | Corporates, Advisory, Co-working, BPO |
| Projects     | link       | `/projects`      | —              |
| Entrepreneurs| dropdown   | —                | Startup Hub, Mentorship |
| Academy      | link       | `/academy`       | —              |
| Contact Us   | link       | `/contactUs`     | —              |

### Services Dropdown Items

| Name       | Path           | Icon      | Description                                          |
|------------|----------------|-----------|------------------------------------------------------|
| Corporates | `/corporates`  | Building  | Partner with us for sustainable business transformation |
| Advisory   | `/advisory`    | Briefcase | Expert guidance on circular economy strategy           |
| Co-working | `/co-working`  | Coffee    | Premium workspace in a collaborative environment       |
| BPO        | `/bpo`         | Headphones| Streamline operations with our BPO solutions           |

### Entrepreneurs Dropdown Items

| Name         | Path            | Icon      | Description                              |
|--------------|-----------------|-----------|------------------------------------------|
| Startup Hub  | `/startup-hub`  | Rocket    | Launch and scale your startup faster     |
| Mentorship   | `/mentorship`   | Lightbulb | Guidance from experienced mentors        |

### Mobile Drawer Items
Same items as desktop but in accordion-style groups. Has a "Join Community" button in the footer.

---

## 7. Footer System

### Quick Links

| Label             | Path           |
|-------------------|----------------|
| About Us          | `/about`       |
| Entrepreneurs     | `/startup-hub` |
| Corporates        | `/corporates`  |
| Advisory Services | `/advisory`    |
| Co-working        | `/co-working`  |
| BPO               | `/bpo`         |

### USA Address
- Entity: Circular Innovation Hub Corp.
- Street: 1209 Orange St.
- City/State: Wilmington De 19801

### Kenya Address
- Entity: Circular Innovation Hub
- Street: 233, Owashika Road, Lavington, Nairobi.
- Email: info@circularinnovationhub.com
- Phone: +254712746922

### Social Links

| Platform  | URL                                                                |
|-----------|--------------------------------------------------------------------|
| Facebook  | https://www.facebook.com/CircularIHub/?_rdc=2&_rdr                |
| X         | https://x.com/Circular_IHub                                       |
| Instagram | https://www.instagram.com/circularinnovationhub                   |
| LinkedIn  | https://www.linkedin.com/company/circularinnovationhub/posts/?feedView=all |

### Copyright
`© 2026 All rights reserved.` (hardcoded year)

### Tagline
"Inspiring and enabling the transition to a sustainable world through circular economy excellence."

---

## 8. Page-by-Page Data Inventory

### 8.1 Home (`/` — `Home.tsx`)

#### SEO
- Title: `Home`
- Description: `Circular Innovation Hub drives Africa's circular economy transition through advisory, co-working, BPO, startup hub, mentorship, and academy programs. Based in Nairobi with global reach.`
- Path: `/`
- Schemas: Organization, WebSite, WebPage

#### Hero Carousel Images (3 images, 5s rotation)
| Index | Path              |
|-------|-------------------|
| 0     | `/training-2.webp`|
| 1     | `/training-3.webp`|
| 2     | `/training-5.webp`|

#### Floating Decorative Icons
| Icon     | Position              | Color     | Opacity |
|----------|-----------------------|-----------|---------|
| Leaf     | top-20 left-[10%]     | `#e1ac00` | 50%     |
| Recycle  | bottom-32 right-[15%] | `#3d7118` | 50%     |
| Sparkles | top-1/2 right-[5%]    | `#e1ac00` | 50%     |
| Sun      | bottom-40 left-[5%]   | `#e1ac00` | 30%     |
| Droplets | top-40 right-[20%]    | `#3d7118` | 30%     |

#### Hero Text
- Headline: `We bring your ideas to life`
- Subtitle: `We are a one-stop-shop for Circular Economy Excellence in Africa, inspiring and enabling the transition to a sustainable world.`
- Mission: `Our mission is to be an active part of fast-tracking the development towards a more circular and sustainable society, by creating a collaborative platform where stakeholders can grow, meet, influence and be seen.`

#### Stats Dashboard (4 cards)

| #   | Value | Label                                            | Icon     |
|-----|-------|--------------------------------------------------|----------|
| 1   | 85%   | Waste diverted from landfills through our programs | Recycle  |
| 2   | 200+  | Entrepreneurs empowered across the continent       | Users    |
| 3   | $2.5M+| Circular economy investments facilitated           | TrendingUp |
| 4   | CTA   | Get in touch → `/contactUs`                      | —        |

#### What We Offer (4 service cards)

| Icon      | Title                   | Description                                                                 | Link            |
|-----------|-------------------------|-----------------------------------------------------------------------------|-----------------|
| Rocket    | Accelerator Program     | Walk with you from idea generation to scale up...                           | `/startup-hub`  |
| Coffee    | Co-working Space & Events | Conducive environment for office space, conferences, networking events...   | `/co-working`   |
| Briefcase | Corporate Training      | Sustainability toolkit to help corporate entities transition...             | `/corporates`   |
| Lightbulb | Advisory Services       | Expert guidance on circular economy strategies...                           | `/advisory`     |

#### Impact Metrics Section

| #   | Value | Label                 | Icon       |
|-----|-------|-----------------------|------------|
| 1   | 11    | COHORTS RUN           | Target     |
| 2   | 200   | STARTUPS INCUBATED    | Users      |
| 3   | 600   | TRAININGS             | Recycle    |
| 4   | 26    | COUNTRIES REACHED     | Megaphone  |

#### Partners (6 partners)

| Name           | Logo Path               | Cloudinary Public ID |
|----------------|-------------------------|----------------------|
| African Slums  | `/africanslums_logo.jpg`| undefined            |
| Wee Centre     | `/weecentre_logo.jpg`   | undefined            |
| Stichting Deon | `/stitchingdeon_logo.jpg`| undefined           |
| Naitech        | `/naitech_logo.jpg`     | undefined            |
| AJRY           | `/ajry_logo.jpg`        | undefined            |
| Chat PR        | `/chatpr_logo.jpg`      | undefined            |

#### CTA Section
- Headline: `Partner with us today!`
- Description: `Join us in building a sustainable future for Africa. Let's create lasting impact together.`
- Button: `Get in touch` → `/contactUs`

---

### 8.2 About (`/about` — `About.tsx`)

#### SEO
- Title: `About Us`
- Description: `Learn about Circular Innovation Hub — our mission to drive Africa's circular economy transition through the three pillars of People, Planet, and Sustainability.`
- Path: `/about`
- Schemas: Organization, WebPage, BreadcrumbList

#### Hero
- Background: `/training-3.webp`
- Headline: `Building Africa's future through circular innovation.`

#### Three Pillars

| Icon  | Title        | Description                                                                 |
|-------|--------------|-----------------------------------------------------------------------------|
| Users | People       | Community development and engagement for a circular economy.                |
| Globe | Planet       | Promoting the overall well being of the environment by reducing waste...    |
| Recycle | Sustainability | Creating new products and sustainable business models for startups...    |

#### Mission
- Text: `To be a global leader in sustainable development solutions that address the root causes of poverty and inequality, while promoting social inclusion and environmental sustainability.`
- Badge: `Impact-driven since 2020`

#### Vision
- Text: `A world where circular economy principles drive prosperity, protect our planet, and empower communities across Africa and beyond.`
- Badge: `Global reach, local impact`

#### Concept of Circularity
- 3 paragraphs explaining take-make-waste model, Circularity Gap report (70% of GHG from material handling), closed loop concept
- Motto: `Waste not, Want not!`
- Diagram image: `/conecptofcircularity.png`

#### CTA
- Headline: `Join Our Community`
- Button: `Get in touch` → `/contactUs`

---

### 8.3 Projects (`/projects` — `Projects.tsx`)

#### SEO
- Title: `Projects`
- Description: `Explore Circular Innovation Hub's transformative projects driving circular economy innovation, sustainability, and community impact across Africa.`
- Path: `/projects`
- Schemas: Organization, WebPage, BreadcrumbList

#### Impact Stats (4 stats)

| Value | Label                 | Description              | Icon       |
|-------|-----------------------|--------------------------|------------|
| 4     | Major Projects        | Successfully delivered   | Award      |
| 600+  | Participants Trained  | Across all programs      | Users      |
| 50+   | Partner Organizations | Collaborating with us    | Handshake  |
| 85%   | Satisfaction Rate     | From participants        | TrendingUp |

#### Category Filters

`All`, `Training`, `Event`, `Workshop`

#### Projects Data (4 projects)

| Slug                         | Name                                      | Category  | Date | Image (Webflow CDN) |
|------------------------------|-------------------------------------------|-----------|------|---------------------|
| `mentorship-coaching-program`| Mentorship And Coaching Program           | Training  | 2025 | https://cdn.prod.website-files.com/635673d6c8505112db680f36/6891fe5f4b0df4907fec586f_IMG-20250805-WA0051-p-1080.jpg |
| `circular-table`             | Circular Table                            | Event     | 2024 | https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e336892aabedfae90fd89_Circular%20Table%203-p-800.jpg |
| `grant-writing-workshop`     | Grant Application, Proposal Writing & Tendering Workshop | Workshop | 2024 | https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e333c92b89e39c3c434d1_Grant%20Application%202-p-1080.jpg |
| `barcode-training-program`   | Barcode Training Program                  | Training  | 2024 | https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e334c8666671121420e8a_Barcode%20Training%20Program-p-800.jpg |

#### CTA
- Headline: `Partner With Us`
- Button: `Get in touch` → `/contactUs`

---

### 8.4 Projects Detail (`/projects/:slug` — `ProjectsDetail.tsx`)

#### `mentorship-coaching-program`

| Field          | Value                                                                 |
|----------------|-----------------------------------------------------------------------|
| category       | Training                                                              |
| date           | 2025                                                                  |
| location       | Nairobi, Kenya                                                        |
| heroImage      | Webflow CDN (same as Projects.tsx)                                    |
| summary        | A transformative mentorship and coaching initiative launched in Q1 2025... |
| fullDescription| The Mentorship and Coaching Program was a 13-week in-person initiative... |
| impactStats    | Mentees: 48, Mentor Hours: 240+, Funding Secured: $85K               |
| keyHighlights  | Weekly workshops on business modelling and financial planning; Peer‑learning cohorts across 5 African countries |
| nextSteps      | Applications for the next cohort open in Q3 2025. Sign up for our newsletter to be notified. |

#### `circular-table`

| Field          | Value                                                                 |
|----------------|-----------------------------------------------------------------------|
| category       | Event                                                                 |
| date           | 2024                                                                  |
| location       | Nairobi, Kenya                                                        |
| summary        | The Circular Table connects entrepreneurs and innovators in waste management... |
| fullDescription| A dynamic networking and knowledge sharing event series...             |
| impactStats    | Attendees: 150+, Business Matches: 30+, New Projects: 3               |
| keyHighlights  | Keynote from leading circular economy experts; Pitch session for waste innovators; Live circular design workshop |
| nextSteps      | (default fallback)                                                     |

#### `grant-writing-workshop`

| Field          | Value                                                                 |
|----------------|-----------------------------------------------------------------------|
| category       | Workshop                                                              |
| date           | 2024                                                                  |
| location       | Virtual / Nairobi                                                     |
| summary        | A full day workshop helping entrepreneurs gain practical proposal and tendering skills. |
| fullDescription| Co‑designed with procurement experts and grant specialists... 80% of attendees felt more confident; 6 organisations secured grants post-workshop |
| impactStats    | Participants: 64, Funding Won: $120K, Satisfaction Rate: 92%          |
| keyHighlights  | Live editing of real proposals; Templates for grant budgets and logical frameworks; In-person office hours with grant reviewers |
| nextSteps      | (default fallback)                                                     |

#### `barcode-training-program`

| Field          | Value                                                                 |
|----------------|-----------------------------------------------------------------------|
| category       | Training                                                              |
| date           | 2024                                                                  |
| location       | Nairobi, Kenya                                                        |
| summary        | In partnership with GS1 Kenya, equipping entrepreneurs with barcode and traceability skills. |
| fullDescription| Two‑day hands‑on course on GS1 standards... 40+ entrepreneurs from agribusiness/manufacturing/retail; 8 businesses registered for GS1 barcodes |
| impactStats    | Entrepreneurs Trained: 40+, New Barcodes Issued: 250+, Market Access Gained: 8 businesses |
| keyHighlights  | Certification from GS1 Kenya; Practical exercises using real products; Post‑training support hotline |
| nextSteps      | (default fallback)                                                     |

#### Category Colors

| Category | Style                                                    |
|----------|----------------------------------------------------------|
| Training | `bg-[#3d7118]/10 text-[#3d7118] border border-[#3d7118]/20` |
| Event    | `bg-[#e1ac00]/10 text-[#8a6600] border border-[#e1ac00]/25` |
| Workshop | `bg-blue-50 text-blue-700 border border-blue-200`         |

---

### 8.5 Corporates (`/corporates` — `Corporates.tsx`)

#### SEO
- Title: `Corporates`
- Description: `Partner with Circular Innovation Hub for corporate sustainability transformation. Circular economy consulting, ESG strategy, and sustainable business solutions for corporates.`
- Path: `/corporates`
- Schemas: Organization, WebPage, BreadcrumbList

#### Hero Carousel
| Index | Path              |
|-------|-------------------|
| 0     | `/training-1.webp`|
| 1     | `/training-2.webp`|
| 2     | `/training-5.webp`|

#### Hero Stats (right column)
| Value | Label             |
|-------|-------------------|
| 40%   | Avg. Cost Reduction |
| 65%   | Waste Diversion   |
| 30K+  | Tons CO₂ Saved    |
| Join 50+ | Partners       |

#### Service Offerings (4 cards)

| Icon          | Title                       | Description                                                                 | Metrics                              |
|---------------|-----------------------------|-----------------------------------------------------------------------------|--------------------------------------|
| Settings      | Sustainability Toolkit      | Comprehensive framework to help your organization transition...             | Reduce carbon footprint by up to 40% |
| RefreshCw     | Circular Strategy Consulting | Expert guidance on redesigning business models for circularity...          | Save $500K+ annually                 |
| UsersRound    | Employee Training Programs  | Workshops and certification programs to upskill your workforce...           | 500+ professionals trained           |
| Presentation  | Impact Reporting            | Measurable ESG metrics and sustainability reporting aligned with global standards | GRI & SASB compliant                 |

#### Partnership Benefits (6 items)

| Icon        | Title             | Description                                              |
|-------------|-------------------|----------------------------------------------------------|
| TrendingUp  | Cost Savings      | Reduce operational costs through circular practices       |
| Shield      | Risk Mitigation   | Future-proof against regulatory changes                   |
| Users       | Talent Attraction | Attract top talent who value sustainability               |
| Award       | Brand Enhancement | Strengthen your brand as a sustainability leader          |
| Globe       | Market Access     | Access new circular economy markets                       |
| BarChart3   | Measurable Impact | Track and report your sustainability metrics              |

#### Sustainability Metrics Tracker
| Metric                 | Value |
|------------------------|-------|
| ESG Score Improvement  | 35%   |
| Waste Reduction        | 65%   |
| Cost Savings           | 40%   |

#### ROI Section
| Metric               | Value |
|----------------------|-------|
| Average ROI          | 3-6x  |
| Breakeven            | 12-18 months |
| Energy cost reduction| 25%   |

#### CTA
- Headline: `Ready to Transform Your Business?`
- Button: `Schedule a Consultation` → `/contactUs`

---

### 8.6 Advisory (`/advisory` — `Advisory.tsx`)

#### SEO
- Title: `Advisory`
- Description: `Expert circular economy advisory services from Circular Innovation Hub. Strategic guidance on sustainability, ESG, circular business models, and green transformation.`
- Path: `/advisory`
- Schemas: Organization, WebPage, BreadcrumbList

#### Hero Carousel
| Index | Path             |
|-------|------------------|
| 0     | `/webinar-2.jpg` |
| 1     | `/webinar-3.jpeg`|

#### Hero Stats
| Value | Label              |
|-------|--------------------|
| 50+   | Clients Served     |
| 40%   | Avg. Cost Reduction|
| 15+   | African Countries  |
| 100%  | Satisfaction       |

#### Advisory Services (6 cards)

| Icon               | Title                        | Description                                                       | Deliverables                                          |
|--------------------|------------------------------|-------------------------------------------------------------------|-------------------------------------------------------|
| RefreshCw          | Circular Strategy Development | Comprehensive circular economy roadmap tailored to your organization | Strategic plan, KPIs, implementation timeline          |
| ChartNoAxesCombined| Impact Measurement & Reporting | Quantify your environmental and social impact                      | ESG reports, carbon footprint analysis, impact dashboards |
| Brain              | Circular Design Thinking     | Workshops to embed circular principles into product design         | Design sprints, prototype validation, circular criteria |
| Scale              | Policy & Regulatory Advisory | Navigate complex sustainability regulations                        | Regulatory audits, compliance roadmaps, policy briefs  |
| Workflow           | Supply Chain Circularity     | Transform supply chain with circular sourcing                      | Supply chain audit, circular sourcing guidelines       |
| UsersRound         | Stakeholder Engagement       | Build alliances that amplify circular economy impact               | Partner mapping, engagement strategy, collaboration frameworks |

#### Why Choose CIH Advisory (4 items)

| Icon      | Title               | Description                                    |
|-----------|---------------------|------------------------------------------------|
| Award     | 5+ Years Experience | Decade of circular economy expertise across Africa |
| Users     | 50+ Clients Served  | Trusted by leading organizations across sectors |
| Globe     | Pan-African Network | Deep connections across the continent          |
| TrendingUp| Proven Results      | Average 40% cost reduction for clients         |

#### Advisory Approach (4 steps)

| Step | Title                      | Description                                                   |
|------|----------------------------|---------------------------------------------------------------|
| 01   | Discovery & Assessment     | Deep dive into current operations, challenges, and goals      |
| 02   | Strategy Development       | Tailored circular economy roadmap with clear KPIs             |
| 03   | Implementation Support     | Hands-on guidance to execute strategy effectively             |
| 04   | Measurement & Optimization | Continuous tracking and refinement for maximum impact         |

#### Locations (2 offices)

| City             | Address                              | Phone             | Email                        | Flag |
|------------------|--------------------------------------|-------------------|------------------------------|------|
| Wilmington, USA  | 1209 Orange St., Wilmington, DE 19801| +1 (302) 123-4567 | usa@circularhub.africa       | 🇺🇸  |
| Nairobi, Kenya   | 233, Owashika Road, Lavington, Nairobi| +254 712 746922   | africa@circularhub.africa    | 🇰🇪  |

#### CTA
- Headline: `Ready to Transform Your Organization?`
- Button: `Schedule a Consultation` → `/contactUs`

---

### 8.7 Co-Working (`/co-working` — `CoWorking.tsx`)

#### SEO
- Title: `Co-working Space`
- Description: `Premium co-working space in Nairobi by Circular Innovation Hub. Hot desks, dedicated desks, boardrooms, and meeting facilities in a collaborative environment.`
- Path: `/co-working`
- Schemas: Organization, WebPage, BreadcrumbList

#### Hero Carousel (5 images)
| Index | Path          |
|-------|---------------|
| 0     | `/space-1.jpg`|
| 1     | `/space-2.jpg`|
| 2     | `/space-3.jpg`|
| 3     | `/space-4.jpg`|
| 4     | `/space-5.jpg`|

#### Hero Stats
| Value  | Label           |
|--------|-----------------|
| 35%    | Avg. Savings    |
| 24/7   | Access          |
| 100+   | Active Members  |
| Prime  | Lavington       |

#### Amenities (6 items)

| Icon     | Title                    | Description                                            |
|----------|--------------------------|--------------------------------------------------------|
| Wifi     | High-Speed WiFi          | Reliable internet connection throughout the space       |
| Coffee   | Complimentary Beverages  | Tea, coffee, drinking chocolate, and water              |
| Car      | On-Site Parking          | Secure parking available for members                    |
| Printer  | Printing Services        | High-quality printing and scanning                      |
| Calendar | Internal Events Access   | FIKA-Fridays, member-speech evenings, wellness sessions |
| Users    | Admin Support            | Dedicated administrative support team                   |

#### Garden Highlight Bar
- Serene Environment
- On-Site Parking
- Shared Kitchenette

#### Pricing Plans

| Plan        | Price     | Period   | Popular | Key Features |
|-------------|-----------|----------|---------|--------------|
| Daily Pass  | KES 950   | /day     | No      | Access 8am-5pm Mon-Fri, WiFi, printing, beverages, garden, events |
| Weekly Pass | KES 4,500 | /week    | **Yes** | Same as Daily (no locker) |
| Monthly Pass| KES 17,000| /month   | No      | Same as Daily + Locker access |

#### Dedicated Desk
- Price: KES 22,000/month
- Features (8): 24/7 access, WiFi, beverages, bookable meeting/training rooms, complimentary parking, private storage, lockable desk, personalized workspace

#### Boardroom
- Price: KES 1,500/hour
- Features (8): Private meeting room for up to 6 people, Zoom room, WiFi, webcam, beverages, printing, whiteboard + markers, flipchart + markers

#### CTA
- Headline: `Book it, Experience it!`
- Button: `Book a Tour` → `/contactUs`

---

### 8.8 Startup Hub (`/startup-hub` — `StartupHub.tsx`)

#### SEO
- Title: `Startup Hub`
- Description: `Launch and scale your startup with Circular Innovation Hub's Startup Hub. Access mentorship, funding opportunities, co-working space, and a vibrant entrepreneurial community in Nairobi.`
- Path: `/startup-hub`
- Schemas: Organization, WebPage, BreadcrumbList

#### YouTube Embed
- URL: `https://www.youtube.com/embed/T2C1Axws2OY?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`

#### Key Drivers (3 cards)

| Icon    | Title           | Description                                                     | Footer Metric         |
|---------|-----------------|-----------------------------------------------------------------|-----------------------|
| Network | Community       | Connect with like-minded founders, investors, and industry experts | 1,500+ active members |
| Cpu     | Innovation      | Access cutting-edge tools and methodologies                     | 150+ innovations launched |
| Briefcase| Entrepreneurship| Build sustainable business models that create lasting impact    | 200+ startups supported |

#### Accelerator Program Steps (3 items)

| Icon     | Text                                                                 |
|----------|----------------------------------------------------------------------|
| UserCheck| Identify youth and women-owned businesses in our thematic areas      |
| FileText | Research and showcase new technologies through trainings and webinars |
| Users    | Conduct outreach workshops on circular principles for innovators     |

#### Resources (4 cards)

| Icon      | Title                 | Description                                              |
|-----------|-----------------------|----------------------------------------------------------|
| BookOpen  | Business Toolkit      | Templates, guides, and resources to help build your startup |
| Users     | Mentor Network        | Connect with experienced entrepreneurs and industry experts |
| DollarSign| Funding Opportunities | Access to grants, investors, and funding programs          |
| Calendar  | Workshops & Events    | Regular training sessions and networking events            |

#### Impact Stats

| Value | Label             |
|-------|-------------------|
| 600   | Trainings         |
| 200   | Startups Trained  |
| $2.5M+| Funding Secured   |
| 200+  | Jobs Created      |

#### Upcoming Events (3 events)

| Title                       | Date             | Type        | Spots               |
|-----------------------------|------------------|-------------|---------------------|
| Pitch Practice Session      | March 20, 2025   | Workshop    | 15 spots left       |
| Investor Networking Mixer   | April 5, 2025    | Networking  | 50 spots left       |
| Circular Economy Bootcamp   | April 15-17, 2025| Training    | Registration Open   |

---

### 8.9 Mentorship (`/mentorship` — `Mentorship.tsx`)

#### SEO
- Title: `Mentorship`
- Description: `Get expert mentorship for your venture at Circular Innovation Hub. Guidance on business operations, HR, investor readiness, product development, and compliance.`
- Path: `/mentorship`
- Schemas: Organization, WebPage, BreadcrumbList

#### Focus Areas (5 items)

| Icon        | Title                              | Description                                                                |
|-------------|------------------------------------|----------------------------------------------------------------------------|
| FileText    | Process Improvements and SOPs      | Document repeatable workflows, clarify responsibilities, build operating systems |
| Users       | Human Resource Management          | Team structure, role clarity, performance routines, culture, people practices |
| TrendingUp  | Investor Readiness and Fundraising | Pitch preparation, financial storytelling, fundraising strategy             |
| Award       | Product Development                | Product-market fit, customer feedback loops, value propositions             |
| Scale       | Legal and Regulatory Compliance    | Company obligations, registrations, agreements, compliance risks            |

#### Delivery Notes (3 items)
1. Structured guidance tied to the venture's current stage and operating gaps.
2. Practical review of internal systems, team needs, product decisions, and fundraising readiness.
3. Clear recommendations founders can use to strengthen day-to-day execution.

#### Journey Timeline (5 steps, stage 5 highlighted)

| Step | Title                              | Description                                                                 |
|------|------------------------------------|-----------------------------------------------------------------------------|
| 1    | Join Startup Hub                   | Founders enter the startup track and gain access to CIH community...        |
| 2    | Digital Literacy & Business Coaching| Training builds confidence with digital tools, business modeling...         |
| 3    | Innovators' Lab                    | Hands-on product building, prototyping, customer validation...              |
| 4    | Investor Readiness & Workshops     | Sharpen pitch materials, financial storytelling, fundraising strategy...    |
| 5    | Mentorship Stage                   | Strengthens SOPs, teams, products, compliance, and fundraising readiness... |

---

### 8.10 BPO (`/bpo` — `Bpo.tsx`)

#### SEO
- Title: `BPO Services`
- Description: `Streamline your operations with Circular Innovation Hub's BPO services. Customer support, data entry, virtual assistance, and back-office solutions from Nairobi.`
- Path: `/bpo`
- Schemas: Organization, WebPage, BreadcrumbList

#### Hero Carousel (3 images)
| Index | Path              |
|-------|-------------------|
| 0     | `/training-1.webp`|
| 1     | `/training-2.webp`|
| 2     | `/training-3.webp`|

#### Hero Stats
| Value | Label           |
|-------|-----------------|
| 60%   | Cost Savings    |
| 24/7  | Availability    |
| 99.9% | Accuracy Rate   |
| 50+   | Clients         |

#### BPO Services (6 cards)

| Icon        | Title                    | Description                                              | Features (tags)                                    |
|-------------|--------------------------|----------------------------------------------------------|----------------------------------------------------|
| Headphones  | Customer Support         | 24/7 multilingual customer service solutions             | Omnichannel support, Technical support, Help desk management |
| Database    | Data Management          | Secure and efficient data entry, processing, analytics   | Data entry & processing, Document digitization, Data quality assurance |
| FileCheck   | Document Processing      | Streamlined document management and processing           | Invoice processing, Form processing, Document verification |
| Users       | HR Outsourcing           | Complete human resources management and recruitment      | Payroll processing, Recruitment support, Employee onboarding |
| TrendingUp  | Finance & Accounting     | Professional financial management and accounting         | Bookkeeping, Accounts payable/receivable, Financial reporting |
| MessageSquare| Social Media Management | Strategic social media management and content creation   | Content creation, Community management, Social listening |

#### Why Choose CIH BPO (4 items)

| Icon      | Title           | Description                            |
|-----------|-----------------|----------------------------------------|
| Shield    | Data Security   | ISO-certified security protocols        |
| Clock     | 24/7 Operations | Round-the-clock service delivery        |
| TrendingUp| Cost Savings    | Up to 60% reduction in costs            |
| Globe     | Global Reach    | Multi-lingual support across time zones |

#### BPO Pricing Plans (3 tiers)

| Plan        | Price  | Period | Popular | Features                                                          |
|-------------|--------|--------|---------|-------------------------------------------------------------------|
| Starter     | Custom | /month | No      | Up to 100 hours/month, Email & chat support, Basic reporting, Standard SLA, Dedicated agent |
| Professional| Custom | /month | **Yes** | Up to 500 hours/month, Omnichannel support, Advanced analytics, Priority SLA, Team of 3 agents, Account manager |
| Enterprise  | Custom | /month | No      | Unlimited hours, Dedicated team, Custom integrations, 24/7 support, Quarterly business reviews, Custom reporting |

#### Industries Served (6 industries)

| Industry   | Icon          |
|------------|---------------|
| E-commerce | ShoppingBag   |
| Fintech    | CreditCard    |
| Healthcare | Heart         |
| Logistics  | Truck         |
| Technology | Cpu           |
| Education  | GraduationCap |

#### CTA
- Headline: `Ready to Transform Your Operations?`
- Button: `Get a Free Consultation` → `/contactUs`

---

### 8.11 Academy (`/academy` — `Academy.tsx`)

#### SEO
- Title: `Academy`
- Description: `Join Circular Innovation Hub Academy. Frontend Development and Business Development courses with a circular economy lens. Practical, mentor-led programs in Nairobi.`
- Path: `/academy`
- Schemas: Organization, WebPage, Course (×2), BreadcrumbList

#### Hero Carousel (2 images)
| Index | Path            |
|-------|-----------------|
| 0     | `/space-5.jpg`  |
| 1     | `/webinar-5.jpg`|

#### Cohort Info
- Code: `ECE-CIH01`
- Name: `Entrepreneurship of Circular Economy`
- Facilitator: `Computers for Schools Kenya Institute of ICT (CFSK Institute of ICT)`

#### Highlights Strip (4 items)

| Icon             | Label                                      |
|------------------|--------------------------------------------|
| Layers3          | Cohort 1: ECE-CIH01                        |
| Clock3           | 2 practical courses                        |
| MonitorSmartphone| Hybrid learning                            |
| GraduationCap    | Facilitated by CFSK Institute of ICT       |

#### Course 1: Frontend Development

| Field       | Value                                                           |
|-------------|-----------------------------------------------------------------|
| Price       | KES 20,000                                                      |
| Duration    | 4 weeks intensive                                               |
| Mode        | Hybrid: in-person and guided online practice                    |
| Schedule    | Morning sessions \| 9:00 AM - 1:00 PM                           |
| Start Date  | July 2026 intake                                                |
| Summary     | A practical frontend course for beginners, secondary school graduates... |
| Brochure    | https://drive.google.com/file/d/1dKgo_f-LBXlmGAhjKukuYjGSFMrfuzql/view |

**Outcomes** (4):
1. Build responsive pages with HTML, CSS, JavaScript, and React
2. Use GitHub workflows for collaboration and deployment
3. Create a portfolio-ready capstone project
4. Understand how frontend skills support green and circular ventures

**Modules** (4):

| Module | Title                  | Topics                                                              |
|--------|------------------------|---------------------------------------------------------------------|
| 1      | Web Foundations        | HTML semantics, CSS layout, Responsive design, Git and GitHub basics |
| 2      | JavaScript Essentials  | DOM manipulation, Events, Reusable functions, Data rendering        |
| 3      | React Interfaces       | Components and props, State, Routing, Forms and validation          |
| 4      | Capstone and Deployment| Project planning, UI refinement, Deployment, Portfolio review       |

#### Course 2: Business Development

| Field       | Value                                                           |
|-------------|-----------------------------------------------------------------|
| Price       | KES 60,000                                                      |
| Duration    | Foundational and advanced track                                 |
| Mode        | Hybrid: workshops, coaching, and applied venture work           |
| Schedule    | Morning sessions \| 9:00 AM - 1:00 PM                           |
| Start Date  | July 2026 intake                                                |
| Summary     | A focused circular business development course for early-stage entrepreneurs... |
| Brochure    | https://drive.google.com/file/d/1gCyfeqSTB19E0dwhHPGuguY8NC36YryF/view |

**Outcomes** (4):
1. Understand circular economy principles and local Kenyan case studies
2. Map stakeholders, product lifecycles, and venture opportunities
3. Design value propositions, circular business models, and revenue streams
4. Prepare financial forecasts, impact metrics, and investor-ready pitches

**Modules** (8):

| Module | Title                        | Topics                                                                                  |
|--------|------------------------------|-----------------------------------------------------------------------------------------|
| 1      | Circular Journey Mapping     | Circular economy principles, Lifecycle mapping, Sector-specific product journeys, Kenyan case studies |
| 2      | Stakeholder Engagement       | Stakeholder mapping, Value-chain roles, Empathy building, Stakeholder interaction role-play |
| 3      | Business Modeling            | Business Model Canvas, Key resources and partners, Revenue streams, Circular venture design |
| 4      | Value Proposition and Pitching| Value Proposition Canvas, Customer segments, 2-minute pitch development, Peer pitch feedback |
| 5      | Financial Modeling           | Cost structure, B2B/B2C/subscription models, Break-even analysis, Financial forecasting |
| 6      | Advanced Circular Design     | Circular design principles, Circular Design Toolkit, Supply chain mapping, Risk assessment |
| 7      | Scaling, Branding, and Impact| Scaling strategies, Partnerships and digital platforms, Brand storytelling, Impact measurement |
| 8      | Investor Readiness and Follow-up| Investor pitch decks, Investor personas, Triple Bottom Line reporting, Weekly check-ins & mentorship |

#### Fast-track Section (4 cards)

| Icon    | Title               | Text                                                              |
|---------|---------------------|-------------------------------------------------------------------|
| Code2   | Technical confidence| Go from web basics to usable React interfaces.                    |
| BarChart3| Business clarity    | Turn ideas into models customers and funders can understand.      |
| Leaf    | Circular lens       | Apply sustainability thinking without losing commercial discipline.|
| Rocket  | Portfolio output    | Finish with a project, pitch, or roadmap you can share.           |

#### CTA
- Headline: `Ready to join the next intake?`
- Button: `Start your application` → Google Form (https://docs.google.com/forms/d/e/1FAIpQLSeUeZdizKkMMhsVpyBlfAddy4n_Z07oJ-rQdIUhKycNOZ8iTQ/viewform)

---

### 8.12 Apply (`/apply` — `Apply.tsx`)

#### SEO
- Title: `Apply to CIH Academy`
- Description: `Apply to the Circular Innovation Hub Academy. Choose between Frontend Development and Business Development courses. Start your journey in circular economy entrepreneurship.`
- Path: `/apply`
- **noIndex: true**
- Schemas: Organization, WebPage, BreadcrumbList

#### Cohort Info (shown in page)
- Code: `ECE-CIH01`
- Name: `Entrepreneurship of Circular Economy`
- Facilitator: `CFSK Institute of ICT`

#### Course Options (2)

| Field    | Frontend Development                     | Business Development                      |
|----------|------------------------------------------|-------------------------------------------|
| Schedule | Morning sessions \| 9:00 AM - 1:00 PM    | Morning sessions \| 9:00 AM - 1:00 PM     |
| Duration | 4 weeks intensive                        | Foundational + advanced                   |
| Mode     | Hybrid learning                          | Hybrid workshops                          |
| Outcome  | Finish with a responsive web project...  | Leave with a clearer circular business model... |

#### Form Fields

| Section               | Field Name          | Type       | Required | Options / Notes                    |
|-----------------------|---------------------|------------|----------|------------------------------------|
| Personal Information  | fullName            | text       | Yes      | placeholder: "Enter your full name"|
| Personal Information  | email               | email      | Yes      | placeholder: "you@example.com"     |
| Personal Information  | phone               | tel        | Yes      | placeholder: "+254 7XX XXX XXX"   |
| Personal Information  | organization        | text       | No       | placeholder: "Optional"           |
| Your Background       | applicantType       | select     | Yes      | Student, Secondary school graduate, Entrepreneur, Professional, Organization team |
| Your Background       | experienceLevel     | select     | Yes      | Beginner, Some experience, Intermediate, Advanced |
| Why Join?             | motivation          | textarea   | Yes      | placeholder: "What do you hope to learn..." |
| Availability & Discovery| availabilityConfirmed | radio   | Yes      | Yes, Maybe, No                     |
| Availability & Discovery| discoverySource    | select     | Yes      | Social media, Referral, CIH event, CFSK Institute of ICT, School or organization, Other |

#### Form Behavior
- URL param: `?course=frontend` or `?course=business` pre-selects course
- On submit: console.log + success message + timeout 5s + form reset
- **No data is sent anywhere**

---

### 8.13 Contact Us (`/contactUs` — `ContactUs.tsx`)

#### SEO
- Title: `Contact Us`
- Description: `Get in touch with Circular Innovation Hub. Located in Nairobi, Kenya and Wilmington, Delaware, USA. Call +254712746922 or email info@circularinnovationhub.com.`
- Path: `/contactUs`
- Schemas: Organization, LocalBusiness, WebPage, BreadcrumbList

#### Inquiry Category Options (radio buttons)

| ID        | Title             | Description                                        | Icon             |
|-----------|-------------------|----------------------------------------------------|------------------|
| admissions| Admissions        | Programs, intake dates, eligibility & applications  | GraduationCap    |
| general   | General Inquiry   | Partnerships, collaborations & information          | BriefcaseBusiness|
| support   | Support           | Technical help or assistance                        | LifeBuoy         |

#### Form Fields

| Field   | Type       | Required | Placeholder                   |
|---------|------------|----------|-------------------------------|
| name    | text       | Yes      | Full Name                     |
| email   | email      | Yes      | Email Address                 |
| category| radio      | Yes      | admissions/general/support    |
| subject | text       | No       | Subject                       |
| message | textarea   | Yes      | How can we help?              |

#### Form Behavior
- On submit: console.log + success toast (5s) + form reset
- **No data is sent anywhere**

#### Contact Details

| Item            | Value                                                        |
|-----------------|--------------------------------------------------------------|
| Admissions Line | +254 712 746922                                              |
| Email           | info@circularinnovationhub.com                               |
| Kenya Office    | 233 Owashika Road, Lavington, Nairobi, Kenya                 |
| USA Office      | Circular Innovation Hub Corp, 1209 Orange St, Wilmington, DE 19801, United States |

#### Google Maps Iframes

| Office | Embed URL                                                                                  |
|--------|-------------------------------------------------------------------------------------------|
| Kenya  | https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8187967399263!2d36.76112727590381!3d-1.2825274356239482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b1ccd2a3aab%3A0xcf4919beeb3f5df4!2sCircular%20Innovation%20Hub%20(CIH)!5e0!3m2!1sen!2ske!4v1777818812818!5m2!1sen!2ske |
| USA    | https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.0!2d-75.5486956!3d39.7447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd5349f6e6b3%3A0x9b3e1e2b9c2a1e4a!2s1209+Orange+St%2C+Wilmington%2C+DE+19801!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus |

---

### 8.14 NotFound (`*` — `NotFound.tsx`)

#### SEO
- **noIndex: true**
- Title: `404 - Page Not Found`
- Content: Centered 404 page with "Back to Home" link

---

## 9. Shared Components

### `Layout.tsx`
- Wraps pages in `Navbar` + `<main>` + `Footer`
- Scrolls to top on route change

### `Navbar.tsx`
- Fixed top, z-50, bg `#3d7118`
- Logo: `CIH_logo_nav.png` (local fallback) or Cloudinary
- Desktop: inline nav + 2 dropdowns
- Mobile: drawer overlay with accordion groups
- See Section 6 for full nav data

### `NavbarDropdown.tsx` (Ui/)
- Props: `{ label, basePath?, items: DropdownItem[] }`
- Each item: `{ name, path, icon, description }`
- Hover open (200ms delay) + click-outside dismiss

### `Footer.tsx`
- 4-column grid: Brand + Quick Links + USA Address + Kenya Address
- Social icons row (Facebook, X, Instagram, LinkedIn)
- See Section 7 for full footer data

### `SEO.tsx`
- Props: `{ title, description, canonical?, path?, ogImage?, ogType?, noIndex?, breadcrumbs?, jsonLd? }`
- Constants: `SITE_URL = "https://www.circularinnovationhub.com"`, `DEFAULT_OG_IMAGE = "/cih_logo_vec.png"`, `TWITTER_HANDLE = "@Circular_IHub"`
- Appends `| Circular Innovation Hub` to all titles

### `JourneyTimeline.tsx`
- Props: `{ highlightedStage?: number }` (default 5)
- 5-step startup journey with 3 responsive layouts (desktop concentric circles, tablet alternating, mobile single column)
- See Mentorship section for step data

---

## 10. Utility & Library Files

### `src/lib/schema.ts`

**Constants**: `SITE_URL`, `BUSINESS_NAME`, `BUSINESS_DESCRIPTION`, `LOGO_URL`, `SOCIAL_LINKS`, `ADDRESS_KENYA`, `ADDRESS_USA`

**Functions** (all return JSON-LD objects):

| Function                     | @Type           | Used On Pages                                                     |
|------------------------------|-----------------|-------------------------------------------------------------------|
| `organizationSchema()`       | Organization    | All pages                                                         |
| `websiteSchema()`            | WebSite         | Home only                                                         |
| `localBusinessSchema()`      | LocalBusiness   | ContactUs only                                                    |
| `breadcrumbSchema(items)`    | BreadcrumbList  | Generated inside SEO component from breadcrumbs prop              |
| `webPageSchema(title, desc, url)` | WebPage    | All pages                                                         |
| `faqSchema(questions)`       | FAQPage         | Not currently used (available for future)                         |
| `courseSchema(name, desc, url, provider?)` | Course | Academy (×2)                                               |

### `src/lib/cloudinary.tsx`

**Exports**:
- `OptimizedImage` component — renders Cloudinary `AdvancedImage` with fallback `<img>`
- `getOptimizedImage` function — generates Cloudinary URL with transforms

**Props**: `publicId?`, `fallbackSrc?`, `width?`, `height?`, `resizeMode?`, `deliveryType?`, plus standard `<img>` attrs

**Cloud name**: `import.meta.env.VITE_CLOUDINARY_CLOUD_NAME` (fallback: `"ddk4dqftp"`)

### `src/lib/cloudinaryAssets.ts`

All values are `undefined` — Cloudinary integration is configured but unused. Images fall back to `public/` files.

```typescript
export const cloudinaryAssets = {
  logo: undefined,
  partners: {
    africanSlums: undefined,
    weeCentre: undefined,
    stichtingDeon: undefined,
    naitech: undefined,
    ajry: undefined,
    chatPr: undefined,
  },
  circularityConcept: undefined,
} as const;
```

---

## 11. Styling System

### Technology: Tailwind CSS v4

### Font: `Inter, system-ui, Avenir, Helvetica, Arial, sans-serif`

### Custom Keyframes

| Name                | Transform                              | Used For                     |
|---------------------|----------------------------------------|------------------------------|
| `float`             | translateY(-10px) → translateY(0)      | Floating decorative icons    |
| `float-delayed`     | Same, 2s delay                         | Floating icons (offset)      |
| `pulse-glow`        | scale + opacity pulse                  | Background glow circles      |
| `slide-up`          | translateY(30px) → translateY(0) + opacity | Scroll reveals          |
| `slide-in-left`     | translateX(-30px) → translateX(0) + opacity | Section entrances      |
| `slide-in-right`    | translateX(30px) → translateX(0) + opacity | Section entrances      |
| `scale-in`          | scale(0.9) → scale(1) + opacity        | Project cards                |
| `bounce-slow`       | Gentle scale bounce                    | CTA section icons            |
| `shine`             | translateX(-100%) → translateX(100%)   | Button shimmer overlay       |
| `spin-slow`         | 360° rotation (20s)                    | Decorative elements          |
| `partner-logo-shimmer`| Gradient sweep skeleton              | Partner logo loading state   |

### Custom Utility Classes

| Class                          | Purpose                                | Usage                                      |
|--------------------------------|----------------------------------------|--------------------------------------------|
| `.animate-float`               | Floating motion                        | Hero decorative icons                      |
| `.animate-float-delayed`       | Floating with delay                    | Hero decorative icons                      |
| `.animate-pulse-glow`          | Pulse + glow                           | Background gradient circles                |
| `.animate-slide-up`            | Fade in + move up                      | Headlines, paragraphs                      |
| `.animate-slide-in-left`       | Fade in + move left                    | Section content blocks                     |
| `.animate-slide-in-right`      | Fade in + move right                   | Section content blocks                     |
| `.animate-scale-in`            | Scale entrance                         | Project cards                              |
| `.animate-bounce-slow`         | Gentle bounce                          | CTA section icons (Handshake, Award, etc.) |
| `.animate-spin-slow`           | Slow rotation (20s)                    | Sun icon, decorative elements              |
| `.partner-logo-skeleton`       | Skeleton shimmer bg                    | Partner logo loading                       |
| `.hover-lift`                  | translateY + shadow on hover           | Cards across all pages                     |
| `.btn-shine`                   | Shimmer overlay on hover               | Primary CTA buttons                        |
| `.gradient-text`               | Green-to-gold gradient text            | Section headings                           |
| `.shine-effect`                | Shimmer overlay                        | Decorative                                 |
| `.bg-gradient-brand`           | 135deg #3d7118 → #e1ac00              | CTA backgrounds                            |
| `.bg-gradient-brand-reverse`   | Reverse gradient                       | Occasional                                 |
| `.line-clamp-1`                | Single line truncation                 | Text overflow                              |
| `.hide-scrollbar`              | Hide scrollbar (all browsers)          | Mobile drawer                              |
| `.delay-100` through `.delay-500` | Staggered animation delays         | Multi-element animations                   |

---

## 12. SEO & Structured Data Register

### Per-Page Meta Tags

| Page           | Title                               | Description                                                                 | noIndex |
|----------------|-------------------------------------|-----------------------------------------------------------------------------|---------|
| Home           | Home                                | Circular Innovation Hub drives Africa's circular economy transition...       | No      |
| About          | About Us                            | Learn about Circular Innovation Hub — our mission...                        | No      |
| Projects       | Projects                            | Explore Circular Innovation Hub's transformative projects...                 | No      |
| ProjectsDetail | (dynamic project name)              | (dynamic project summary)                                                    | No      |
| Corporates     | Corporates                          | Partner with Circular Innovation Hub for corporate sustainability...        | No      |
| Advisory       | Advisory                            | Expert circular economy advisory services from Circular Innovation Hub...   | No      |
| CoWorking      | Co-working Space                    | Premium co-working space in Nairobi by Circular Innovation Hub...           | No      |
| Startup Hub    | Startup Hub                         | Launch and scale your startup with Circular Innovation Hub's Startup Hub... | No      |
| Mentorship     | Mentorship                          | Get expert mentorship for your venture at Circular Innovation Hub...        | No      |
| BPO            | BPO Services                        | Streamline your operations with Circular Innovation Hub's BPO services...   | No      |
| Academy        | Academy                             | Join Circular Innovation Hub Academy. Frontend Development and Business... | No      |
| Apply          | Apply to CIH Academy                | Apply to the Circular Innovation Hub Academy...                             | **Yes** |
| Contact Us     | Contact Us                          | Get in touch with Circular Innovation Hub...                                | No      |
| NotFound       | (not set via SEO, just text)        | —                                                                           | **Yes** |

### JSON-LD Schemas Per Page

| Page           | Organization | WebSite | WebPage | LocalBusiness | Course | BreadcrumbList |
|----------------|:---:|:---:|:---:|:---:|:---:|:---:|
| Home           | ✓   | ✓   | ✓   |     |     |     |
| About          | ✓   |     | ✓   |     |     | ✓   |
| Projects       | ✓   |     | ✓   |     |     | ✓   |
| ProjectsDetail | ✓   |     | ✓   |     |     | ✓   |
| Corporates     | ✓   |     | ✓   |     |     | ✓   |
| Advisory       | ✓   |     | ✓   |     |     | ✓   |
| CoWorking      | ✓   |     | ✓   |     |     | ✓   |
| Startup Hub    | ✓   |     | ✓   |     |     | ✓   |
| Mentorship     | ✓   |     | ✓   |     |     | ✓   |
| BPO            | ✓   |     | ✓   |     |     | ✓   |
| Academy        | ✓   |     | ✓   |     | 2×  | ✓   |
| Apply          | ✓   |     | ✓   |     |     | ✓   |
| Contact Us     | ✓   |     | ✓   | ✓   |     | ✓   |

---

## 13. Complete Image Inventory

### Hero / Carousel Images

| File              | Pages Used                          | Dimensions |
|-------------------|-------------------------------------|------------|
| `/training-2.webp`| Home, Corporates, BPO               | 1920×1080  |
| `/training-3.webp`| Home, About, BPO                    | 1920×1080  |
| `/training-5.webp`| Home, Corporates                    | 1920×1080  |
| `/training-1.webp`| Corporates, BPO                     | 1920×1080  |
| `/space-5.jpg`    | Academy, Co-Working                 | 1920×1080  |
| `/space-1.jpg`    | Co-Working                          | 1920×1080  |
| `/space-2.jpg`    | Co-Working                          | 1920×1080  |
| `/space-3.jpg`    | Co-Working                          | 1920×1080  |
| `/space-4.jpg`    | Co-Working                          | 1920×1080  |
| `/webinar-2.jpg`  | Advisory                            | 1920×1080  |
| `/webinar-3.jpeg` | Advisory                            | 1920×1080  |
| `/webinar-5.jpg`  | Academy                             | 1920×1080  |

### Logos & Brand Images

| File                      | Pages Used          | Description        |
|---------------------------|---------------------|--------------------|
| `/cih_logo_vec.png`       | All (PWA icon, OG) | Main logo          |
| `src/assets/CIH_logo.png` | —                   | Full color logo    |
| `src/assets/CIH_logo_nav.png` | Navbar, Footer | Navigation logo    |

### Partner Logos

| File                       | Page Used |
|----------------------------|-----------|
| `/africanslums_logo.jpg`   | Home      |
| `/weecentre_logo.jpg`      | Home      |
| `/stitchingdeon_logo.jpg`  | Home      |
| `/naitech_logo.jpg`        | Home      |
| `/ajry_logo.jpg`           | Home      |
| `/chatpr_logo.jpg`         | Home      |

### Content Images

| File                          | Page Used | Description              |
|-------------------------------|-----------|--------------------------|
| `/conecptofcircularity.png`   | About     | Circularity diagram      |
| `/ECE-COHORT01-BROCHURE.pdf`  | Academy   | Course brochure PDF      |

### External Images (Webflow CDN)

| Project Slug                  | URL                                                                                                |
|-------------------------------|----------------------------------------------------------------------------------------------------|
| `mentorship-coaching-program` | https://cdn.prod.website-files.com/635673d6c8505112db680f36/6891fe5f4b0df4907fec586f_IMG-20250805-WA0051-p-1080.jpg |
| `circular-table`              | https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e336892aabedfae90fd89_Circular%20Table%203-p-800.jpg |
| `grant-writing-workshop`      | https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e333c92b89e39c3c434d1_Grant%20Application%202-p-1080.jpg |
| `barcode-training-program`    | https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e334c8666671121420e8a_Barcode%20Training%20Program-p-800.jpg |

---

## 14. Build & Deployment Pipeline

### Local
```bash
npm run dev        # Vite HMR dev server
```

### Production Build
```bash
npm run build      # 1. tsc → 2. vite build → 3. generate-sitemap
```

### Output: `dist/`
- Bundled JS (vendor + page chunks)
- Compiled CSS (Tailwind)
- Static assets from `public/`
- `sitemap.xml`

### Deployment (Vercel)
- Automatic on push to production branch
- Build command: `npm run build`
- Output dir: `dist/`
- SPA rewrite: all routes → `/index.html`
- Cache: assets/images → 1 year immutable

### Preview
```bash
npm run preview    # Vite preview of dist/
```

---

## 15. Known Gaps & Roadmap

### Functional Gaps

| Area          | Issue                                                                 |
|---------------|-----------------------------------------------------------------------|
| Forms         | Contact and Apply forms call `console.log` only — no data captured    |
| CMS           | All content hardcoded — every text change requires a full deploy      |
| Cloudinary    | `cloudinaryAssets.ts` all `undefined` — CDN integration unused        |
| Env Variables | No `.env` files checked in or documented anywhere                     |
| API           | No backend exists for form submissions, dynamic content, or auth      |
| Sitemap       | Generated at build time only — content changes between deploys missed |
| Analytics     | No analytics scripts loaded at all                                    |

### Missing Infrastructure

| Area          | Issue                                                                 |
|---------------|-----------------------------------------------------------------------|
| Testing       | Zero test files (unit, integration, E2E)                              |
| CI/CD         | No CI pipeline — relies solely on Vercel auto-deploy                  |
| Cookie Notice | No GDPR/privacy consent banner                                        |
| i18n          | English only                                                          |
| Accessibility | No a11y audit or tooling                                              |
| Storybook     | No component documentation environment                                |
| Rate Limiting | No protection on public form endpoints (once backend exists)          |

### Improvement Opportunities

1. **Form backend** — Capture leads via serverless function or form service
2. **CMS integration** — Sanity/Contentful/Appwrite for editable content
3. **Cloudinary activation** — Upload images & set public IDs in `cloudinaryAssets.ts`
4. **Environment variables** — Move config to `.env` files
5. **Analytics** — Add Plausible, Umami, or GA4
6. **Testing** — Vitest + React Testing Library
7. **CI pipeline** — GitHub Actions for lint + type-check + build on PR
8. **Blog/News** — Add content section for SEO and updates
9. **Search** — Add site search across projects and (future) blog

---

## 16. Cloudinary Setup

Cloudinary is integrated into the project but **not actively used** — every asset's public ID is `undefined`, causing all images to fall back to local `public/` files.

### Dependencies

| Package                  | Version  | Purpose                        |
|--------------------------|----------|--------------------------------|
| `@cloudinary/react`      | ^1.14.4  | React `<AdvancedImage>` component |
| `@cloudinary/url-gen`    | ^1.22.0  | Cloudinary URL builder SDK      |

### Configuration (`src/lib/cloudinary.tsx`)

```typescript
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "ddk4dqftp",
  },
});
```

- Cloud name reads from `VITE_CLOUDINARY_CLOUD_NAME` env var
- Hardcoded fallback: `"ddk4dqftp"`
- No `.env` file is present in the project

### How It Works

The `OptimizedImage` component follows a **dual-path fallback** pattern:

1. If `publicId` is provided → render Cloudinary `<AdvancedImage>` with auto-format, auto-quality, and optional resize (cover with auto-gravity, or contain)
2. If `publicId` is missing → render nothing initially
3. If the Cloudinary image errors AND `fallbackSrc` exists → swap to a plain `<img>` tag with the fallback path
4. If both `publicId` and `fallbackSrc` are missing → render nothing

### Image Transformations

Generated by the `getOptimizedImage` function:

| Setting       | Value                         |
|---------------|-------------------------------|
| Format        | `auto` (browser-best format)  |
| Quality       | `auto` (CDN-optimized)        |
| Delivery Type | `upload` (default) or `fetch` |
| Resize (cover)| `auto` + `autoGravity()` + width × height |
| Resize (contain) | `fit` + width × height     |

### Usage Pattern Across the Site

Every image on the site uses `OptimizedImage` like this:

```tsx
<OptimizedImage
  publicId={cloudinaryAssets.someKey}   // always undefined → skipped
  fallbackSrc="/local-image.jpg"        // always used instead
  alt="..."
  width={...}
  height={...}
  resizeMode="contain"                  // or "cover"
  deliveryType="upload"                 // or "fetch" for external URLs
/>
```

### Asset Registry (`src/lib/cloudinaryAssets.ts`)

All keys are `undefined` — this is the master list of what needs Cloudinary public IDs assigned:

```typescript
export const cloudinaryAssets = {
  logo: undefined,                          // CIH logo (used in Navbar, Footer)
  partners: {
    africanSlums: undefined,                // Partner logos on Home page
    weeCentre: undefined,
    stichtingDeon: undefined,
    naitech: undefined,
    ajry: undefined,
    chatPr: undefined,
  },
  circularityConcept: undefined,            // Circularity diagram on About page
} as const;
```

### Where `OptimizedImage` is Used

| Component/Page  | What Images                                    | deliveryType |
|-----------------|------------------------------------------------|--------------|
| Navbar          | CIH logo                                       | upload       |
| Footer          | CIH logo                                       | upload       |
| Home            | Partner logos (6)                              | upload       |
| About           | Circularity concept diagram                    | upload       |
| Projects        | Project card images (4, from Webflow CDN)      | **fetch**    |
| ProjectsDetail  | Project hero images (4, from Webflow CDN)      | **fetch**    |

### What Needs to Happen to Activate Cloudinary

1. Upload all local `public/` images to a Cloudinary media library
2. Set the corresponding public IDs in `cloudinaryAssets.ts`
3. Set `VITE_CLOUDINARY_CLOUD_NAME` in a `.env` file (or accept the `ddk4dqftp` fallback if that account is valid)
4. The `deliveryType="fetch"` images (Webflow CDN) can either stay as fetch or be uploaded and switched to `upload`
