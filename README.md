# Kish Energy Website (kishenergy.ir)

A premium, dark-themed corporate website for **Kish Energy** — an Iran-based energy company specializing in energy trading/brokerage, EPC projects, and critical industrial equipment supply.

This website is engineered for maximum **SEO (Search Engine Optimization)**, **GEO (Generative Engine Optimization)**, and **LLM Search Indexing (ChatGPT, Gemini, Perplexity, etc.)**.

## Technology Stack
- **Framework:** Next.js 15 (App Router)
- **Export Mode:** Static HTML Export (`output: 'export'`)
- **Language:** TypeScript
- **Styling:** CSS Modules (Vanilla CSS, zero dependencies)
- **Deployment:** GitHub Pages + GitHub Actions CI/CD
- **Bilingual Support:** English (Primary) & Farsi (RTL layout)

## Features

### 1. High-Performance Static Delivery
- Fully pre-rendered HTML pages at build time.
- Standard metadata, dynamic canonical references, Open Graph tags, and Twitter Cards.
- Near-instant load times (100% core web vitals).

### 2. Generative Engine Optimization (GEO) & LLM Discoverability
- **JSON-LD Schema Markups:** Integrated Organization, LocalBusiness, Service (per business segment), FAQPage, and Article schemas.
- **Natural Language Q&A:** FAQ section structured as direct answers, optimized for LLM citations.
- **LLM Scraper Feeds:** `public/llms.txt` and `public/llms-full.txt` standard files offering structured summary profiles for AI agents and search bots.
- **E-E-A-T Signals:** Clear certifications, detailed project case studies, and compliance references.

### 3. Responsive Bilingual Experience
- Seamless EN/FA language switching.
- Dynamic RTL (right-to-left) document mapping and Vazirmatn typography styling when Farsi is active.

---

## Directory Structure

```
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages CI/CD deployment
├── public/
│   ├── robots.txt          # Crawler instructions
│   ├── sitemap.xml         # XML site map
│   ├── llms.txt            # LLM crawler summary profile
│   └── llms-full.txt       # Detailed LLM documentation feed
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog list and details [slug]
│   │   ├── careers/        # Job opportunities list
│   │   ├── contact/        # Contact form and HQ offices
│   │   ├── faq/            # Stateful Q&A Accordion
│   │   ├── projects/       # Categorized portfolio list
│   │   ├── services/       # Capabilities documentation
│   │   ├── globals.css     # Dark mode tokens & resets
│   │   └── layout.tsx      # App wrapper & Org schemas
│   ├── components/         # Reusable layouts and hooks
│   │   ├── AnimatedCounter # Viewport counting numbers
│   │   ├── Footer          # Multi-column links + Graph pointers
│   │   ├── Header          # Responsive navigation header
│   │   ├── SectionHeading  # Reusable page segment header
│   │   └── LanguageProvider# Client bilingual context
│   └── lib/
│       ├── blogData.ts     # Blog database posts
│       ├── i18n/           # EN/FA translation maps
│       └── schema.ts       # Structured JSON-LD schemas
```

---

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Static Build Export

To build and export the application to static HTML:
```bash
npm run build
```
The pre-rendered HTML files will be output to the `./out/` directory.

### Auto Deployment

The repository includes a GitHub Action in `.github/workflows/deploy.yml` that automatically builds and deploys the static site to GitHub Pages whenever you push to the `main` branch.
To configure this:
1. Push to your repository: `https://github.com/exzd/kishenergy-website`.
2. Go to the repository **Settings** > **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. If deploying a custom domain (`kishenergy.ir`), configure it under **Custom domain** and add the CNAME record in your DNS settings.
