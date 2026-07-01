export const frontendPhases = [
  {
    id: "fe-1",
    title: "FRONTEND — Sprint 1: HTML5, CSS3 & JavaScript ES6+ (Bulan 1–2)",
    description: "Fondasi web development: struktur halaman, styling modern, dan JavaScript ES6+ yang solid.",
    project: "personal-portfolio-website",
    tasks: [
      {
        id: "fe1-1",
        title: "HTML5 Semantic & Accessibility",
        done: false,
        details: [
          "Semantic tags: header, nav, main, section, article, aside, footer",
          "Form elements: input types, label, fieldset, validation attributes",
          "SEO basics: meta tags, Open Graph, structured data (JSON-LD)",
          "Web accessibility (a11y): ARIA roles, alt text, tabindex, screen reader",
          "Document outline & heading hierarchy (h1-h6)"
        ]
      },
      {
        id: "fe1-2",
        title: "CSS3 & Modern Layout",
        done: false,
        details: [
          "Selectors: class, id, attribute, pseudo-class, pseudo-element, combinators",
          "Box model: margin, padding, border, box-sizing",
          "Flexbox: justify-content, align-items, flex-wrap, gap",
          "CSS Grid: grid-template, areas, responsive grid layout",
          "Responsive design: media queries, mobile-first approach, clamp()",
          "CSS Variables (custom properties), calc(), viewport units (vw, vh, vmin)",
          "Cross-browser compatibility: vendor prefixes, feature detection (CSS @supports)",
          "Modern CSS: container queries, :has(), subgrid, CSS nesting"
        ]
      },
      {
        id: "fe1-3",
        title: "JavaScript ES6+ Fundamentals",
        done: false,
        details: [
          "let/const vs var (scope & hoisting), temporal dead zone",
          "Arrow functions, default parameters, rest/spread operator (...)",
          "Template literals & tagged templates",
          "Destructuring (array & object), optional chaining (?.), nullish coalescing (??)",
          "Array methods: map, filter, reduce, find, some, every, flat, sort",
          "Object methods: Object.keys/values/entries, assign, spread",
          "Promises & async/await: microtask queue, error handling (try/catch)",
          "Fetch API: GET, POST, PUT, DELETE, headers, error handling",
          "Modules: import/export (named & default), dynamic import()",
          "DOM manipulation: querySelector, addEventListener, classList, dataset",
          "Event handling: bubbling, capturing, delegation, preventDefault, stopPropagation",
          "localStorage, sessionStorage, cookies, IndexedDB basics"
        ]
      },
      {
        id: "fe1-p1",
        title: "🚀 PROJECT: personal-portfolio-website",
        done: false,
        details: [
          "Buat portfolio website responsive dengan HTML/CSS/JS murni (tanpa framework!)",
          "Implementasi dark/light mode toggle pakai CSS variables",
          "Buat form kontak dengan client-side validation",
          "Fetch data dari public API (contoh: GitHub API) untuk display repo list",
          "Deploy ke Vercel/Netlify/GitHub Pages",
          "Lighthouse audit score: Performance > 90, Accessibility > 90"
        ]
      },
      {
        id: "fe1-s1",
        title: "🎯 SYARAT LULUS SPRINT 1",
        done: false,
        details: [
          "Bisa bikin layout responsive (mobile + desktop) pakai Flexbox & Grid tanpa copy-paste",
          "Paham JavaScript event loop: bisa jawab beda microtask vs macrotask",
          "Bisa fetch REST API & handle loading/error state",
          "Website deploy & lulus Lighthouse audit"
        ]
      }
    ]
  },
  {
    id: "fe-2",
    title: "FRONTEND — Sprint 2: React.js + TypeScript (Bulan 3–4)",
    description: "Library paling dicari di JD: React.js + TypeScript untuk komponen reusable & type-safe.",
    project: "react-task-manager (SPA)",
    tasks: [
      {
        id: "fe2-1",
        title: "React.js Core",
        done: false,
        details: [
          "JSX syntax, component (function component), props, children",
          "useState: state management dasar, lazy initialization",
          "useEffect: side effects, cleanup function, dependency array",
          "useRef: mutable reference (TIDAK trigger re-render), DOM access",
          "useMemo & useCallback: performance optimization (kapan pakai, kapan JANGAN)",
          "useReducer: complex state logic (alternative useState)",
          "useContext: share state tanpa prop drilling",
          "Conditional rendering: &&, ternary, && vs ?? vs ||",
          "List rendering: .map(), key prop (kenapa index as key is BAD)",
          "Event handling di React: onClick, onChange, synthetic event",
          "React.memo, memoization pattern, re-render optimization",
          "Error Boundary: tangkap error di component tree"
        ]
      },
      {
        id: "fe2-2",
        title: "TypeScript untuk React",
        done: false,
        details: [
          "Basic types: string, number, boolean, array, tuple, enum, union, intersection",
          "Interface vs Type alias (kapan pakai yang mana)",
          "Generics: <T>, constraint (extends), utility types (Partial, Pick, Omit, Record)",
          "Type narrowing: typeof, instanceof, in, discriminated union",
          "React + TS: FC type, PropsWithChildren, EventHandler, RefObject<T>",
          "Type assertion (as) vs type casting — kenapa assertion itu 'escape hatch'",
          "tsconfig.json: strict mode, target, path aliases (@/*)",
          "Generics di API call: generic fetch function <T>",
          "Utility: ReturnType, Parameters, Awaited, satisfies operator"
        ]
      },
      {
        id: "fe2-3",
        title: "React Patterns & Best Practices",
        done: false,
        details: [
          "Component composition: container vs presentational, custom hooks",
          "Custom Hooks: extract logic reusable (useFetch, useDebounce, useLocalStorage)",
          "Controlled vs Uncontrolled components (form)",
          "Higher-Order Component (HOC) — konsep & kapan pakai",
          "Render props pattern",
          "Compound component pattern (kayak <Select><Option/></Select>)",
          "Lifting state up: kapan pindah state ke parent",
          "Prop drilling problem & solusinya (Context / state library)"
        ]
      },
      {
        id: "fe2-p1",
        title: "🚀 PROJECT: react-task-manager (TypeScript SPA)",
        done: false,
        details: [
          "Buat Task Manager SPA dengan React + TypeScript (Vite)",
          "Fitur: CRUD task, filter (all/active/completed), search, sort by priority",
          "Implementasi custom hooks: useTasks (CRUD + localStorage), useDebounce (search)",
          "Type-safe API: mock backend pakai JSON Server atau MSW (Mock Service Worker)",
          "Responsive layout pakai Tailwind CSS",
          "Dark/light mode toggle",
          "Deploy ke Vercel",
          "Code splitting: lazy load halaman dengan React.lazy + Suspense"
        ]
      },
      {
        id: "fe2-s1",
        title: "🎯 SYARAT LULUS SPRINT 2",
        done: false,
        details: [
          "Bisa bikin React component pakai TypeScript tanpa 'any' type",
          "Paham useState/useEffect dependency array & bisa debug infinite loop",
          "Bisa extract logic jadi custom hooks",
          "Bisa jawab: 'Kenapa React 19/ng modern gak butuh React.memo di kebanyakan kasus?'"
        ]
      }
    ]
  },
  {
    id: "fe-3",
    title: "FRONTEND — Sprint 3: Next.js, State Management & API Integration (Bulan 5–6)",
    description: "Next.js full-stack, global state (Redux/Zustand), dan integrasi REST API yang clean.",
    project: "nextjs-fintech-dashboard",
    tasks: [
      {
        id: "fe3-1",
        title: "Next.js (App Router)",
        done: false,
        details: [
          "App Router vs Pages Router (kenapa App Router is the future)",
          "File-based routing: layout.tsx, page.tsx, loading.tsx, error.tsx, not-found.tsx",
          "Server Components vs Client Components (kapan pakai 'use client')",
          "Data fetching: fetch() di Server Component, cache, revalidate (ISR)",
          "Dynamic routes: [id], [slug], generateStaticParams",
          "Layout nesting & Template",
          "Metadata API: SEO, Open Graph per page",
          "API Routes (Route Handler): buat backend endpoint di Next.js",
          "Middleware: auth check, redirect, rewrite",
          "Next.js 16 features: Turbopack, Partial Prerendering (PPR)"
        ]
      },
      {
        id: "fe3-2",
        title: "State Management",
        done: false,
        details: [
          "Kapan butuh global state? (tidak semua state harus global!)",
          "React Context: use case sederhana (theme, auth, locale)",
          "Zustand: lightweight store, create(), selector, middleware (persist, devtools)",
          "Redux Toolkit (RTK): createSlice, configureStore, createAsyncThunk",
          "Redux vs Zustand vs Context: trade-off & kapan pilih yang mana",
          "Server state vs Client state: React Query / SWR untuk data fetching + caching",
          "TanStack Query (React Query): useQuery, useMutation, invalidation, optimistic update",
          "URL state: searchParams, useSearchParams, nuqs library",
          "Form state: react-hook-form + zod validation"
        ]
      },
      {
        id: "fe3-3",
        title: "REST API Integration & Data Layer",
        done: false,
        details: [
          "Fetch wrapper: typed API client (generic GET/POST/PUT/DELETE)",
          "Error handling: try/catch, error boundary, toast notification",
          "Loading states: skeleton, spinner, suspense fallback",
          "Authentication: JWT token storage (httpOnly cookie vs localStorage), auth middleware",
          "API pagination: cursor-based vs offset-based, infinite scroll",
          "WebSocket / Server-Sent Events (SSE) untuk real-time data (chart, notification)",
          "Optimistic UI update: update UI dulu, rollback kalau API gagal"
        ]
      },
      {
        id: "fe3-p1",
        title: "🚀 PROJECT: nextjs-fintech-dashboard",
        done: false,
        details: [
          "Buat dashboard fintech (kayak Stockbit/Bibit) dengan Next.js App Router",
          "Server Components untuk data fetch (portfolio data, stock list)",
          "Client Components untuk interaktif chart (pakai recharts / lightweight-charts)",
          "Implementasi Zustand untuk UI state (sidebar toggle, filter) + TanStack Query untuk server state",
          "Integrasi public API: crypto price (CoinGecko) atau stock data",
          "Auth flow: login page → JWT cookie → protected route via middleware",
          "Responsive sidebar + navbar + data table dengan pagination",
          "Deploy ke Vercel + environment variables"
        ]
      },
      {
        id: "fe3-s1",
        title: "🎯 SYARAT LULUS SPRINT 3",
        done: false,
        details: [
          "Bisa bedain Server Component vs Client Component & kapan pakai masing-masing",
          "Bisa setup state management yang tepat (gak over-engineer pakai Redux untuk todo list)",
          "Bisa integrasi REST API dengan proper error handling & loading state",
          "Dashboard jalan di Vercel dengan SEO metadata yang correct"
        ]
      }
    ]
  },
  {
    id: "fe-4",
    title: "FRONTEND — Sprint 4: Testing, Design System & Component Library (Bulan 7–8)",
    description: "Testing discipline (Jest + Testing Library), design system, Storybook, dan component reusability.",
    project: "design-system + test-suite",
    tasks: [
      {
        id: "fe4-1",
        title: "Frontend Testing",
        done: false,
        details: [
          "Testing pyramid frontend: Unit > Component > Integration > E2E",
          "Jest: test runner, describe/it/expect, beforeEach, mock functions",
          "@testing-library/react: getByRole, getByText, queryBy, findBy (async)",
          "Testing philosophy: test behavior, bukan implementation detail",
          "User Event: userEvent.click() vs fireEvent.click() (kenapa userEvent lebih baik)",
          "Mock: jest.mock(), MSW (Mock Service Worker) untuk intercept network",
          "Component test: render → interact → assert (Arrange-Act-Assert)",
          "Coverage: statement, branch, function, line coverage (target > 70%)",
          "E2E test: Playwright / Cypress (cross-browser, visual regression)",
          "Snapshot testing: kapan berguna, kapan JANGON pakai",
          "TDD di frontend: RED → GREEN → REFACTOR untuk React component"
        ]
      },
      {
        id: "fe4-2",
        title: "Design System & Storybook",
        done: false,
        details: [
          "Design system concept: design tokens (color, spacing, typography, shadow)",
          "Atomic Design: atoms → molecules → organisms → templates → pages",
          "Storybook: setup, stories (.stories.tsx), args, argTypes",
          "Storybook addon: Controls, Actions, Accessibility, Viewport, Docs",
          "Component API design: props naming, variant pattern (cva / clsx / tailwind-merge)",
          "shadcn/ui pattern: copy-paste component, bukan install library",
          "Figma → Code: translate design tokens ke CSS variables / Tailwind theme",
          "Design system documentation: usage guidelines, do's & don'ts"
        ]
      },
      {
        id: "fe4-3",
        title: "UI/UX Collaboration",
        done: false,
        details: [
          "Baca wireframe & mockup (Figma): translate ke component hierarchy",
          "Micro-interaction: hover, focus, transition, animation (framer-motion)",
          "Loading state design: skeleton screen vs spinner (kapan pakai yang mana)",
          "Empty state & error state design",
          "Accessibility audit: axe-core, Lighthouse a11y, keyboard navigation test",
          "Design handoff: clarify spacing, responsive breakpoint, interaction detail"
        ]
      },
      {
        id: "fe4-p1",
        title: "🚀 PROJECT: Design System + Full Test Suite",
        done: false,
        details: [
          "Buat design system: Button, Input, Select, Modal, Table, Card, Toast",
          "Setup Storybook untuk semua komponen dengan Controls & Docs addon",
          "Implementasi variant pattern pakai class-variance-authority (cva) + Tailwind",
          "Tulis unit + component test dengan Jest + @testing-library/react (coverage > 70%)",
          "Tulis 3 E2E test scenario pakai Playwright (login, create task, filter)",
          "Publish design system ke npm (atau private registry) sebagai reusable package",
          "Integrate design system ke project nextjs-fintech-dashboard (Sprint 3)"
        ]
      },
      {
        id: "fe4-s1",
        title: "🎯 SYARAT LULUS SPRINT 4",
        done: false,
        details: [
          "Bisa nulis test yang test behavior (bukan implementation detail)",
          "Bisa bikin komponen reusable dengan variant pattern & Storybook documentation",
          "Paham accessibility & bisa audit pakai axe-core / Lighthouse",
          "Design system bisa di-import & dipakai di project lain"
        ]
      }
    ]
  },
  {
    id: "fe-5",
    title: "FRONTEND — Sprint 5: Performance, Security & Production (Bulan 9–10)",
    description: "Performance optimization, web security, CI/CD, dependency management, & persiapan interview.",
    project: "production-grade-app + portfolio",
    tasks: [
      {
        id: "fe5-1",
        title: "Performance Optimization",
        done: false,
        details: [
          "Core Web Vitals: LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), INP (Interaction to Next Paint)",
          "Bundle analysis: webpack-bundle-analyzer / @next/bundle-analyzer",
          "Code splitting: dynamic import(), React.lazy, route-based splitting",
          "Image optimization: next/image, WebP/AVIF, lazy loading, responsive srcset",
          "Font optimization: next/font, font-display: swap, preload critical font",
          "Render optimization: virtualization (react-window), debounce, throttle",
          "Cache strategy: HTTP cache header (Cache-Control, ETag), service worker (PWA)",
          "Prefetch & preload: <link rel='preload'>, rel='prefetch', rel='dns-prefetch'",
          "SSR/SSG/ISR trade-off: kapan pilih yang mana untuk performance",
          "Measure: Lighthouse, PageSpeed Insights, Chrome DevTools Performance tab"
        ]
      },
      {
        id: "fe5-2",
        title: "Web Security",
        done: false,
        details: [
          "XSS (Cross-Site Scripting): React auto-escape, dangerouslySetInnerHTML danger",
          "CSRF (Cross-Site Request Forgery): SameSite cookie, CSRF token",
          "Content Security Policy (CSP): restrict script source, nonce, hash",
          "HTTPS & HSTS: TLS/SSL, redirect HTTP → HTTPS",
          "Auth security: JWT best practice (httpOnly cookie, short expiry, refresh token)",
          "OWASP Top 10 untuk frontend: injection, broken auth, sensitive data exposure",
          "Dependency security: npm audit, Dependabot, Snyk, lockfile (package-lock.json)",
          "Secret management: environment variable, .env, jangan hardcode API key di frontend!"
        ]
      },
      {
        id: "fe5-3",
        title: "Build Tools, CI/CD & Dependency Management",
        done: false,
        details: [
          "Build tools comparison: Webpack vs Vite vs Turbopack (kenapa Vite lebih cepat)",
          "Vite config: alias, proxy, plugin, env variable (VITE_ prefix)",
          "npm vs yarn vs pnpm: lockfile, workspace, monorepo (turborepo / nx)",
          "CI/CD pipeline: GitHub Actions / GitLab CI untuk lint → test → build → deploy",
          "Pre-commit hook: husky + lint-staged (auto format & lint sebelum commit)",
          "Dependency upgrade strategy: semantic versioning, major vs minor vs patch",
          "Renovate / Dependabot: automated dependency PR",
          "Monorepo: turborepo / nx untuk manage multiple packages/apps"
        ]
      },
      {
        id: "fe5-4",
        title: "Bonus: Tauri & Desktop Apps",
        done: false,
        details: [
          "Tauri: framework desktop app pakai web tech (alternative Electron)",
          "Tauri vs Electron: bundle size, memory, performance comparison",
          "Rust basics for Tauri: command, event, IPC (frontend ↔ backend)",
          "Build & distribute desktop app untuk macOS / Windows / Linux"
        ]
      },
      {
        id: "fe5-5",
        title: "Interview Preparation (Frontend)",
        done: false,
        details: [
          "JavaScript deep dive Q&A: closure, prototype, event loop, hoisting, this",
          "React Q&A: reconciliation, virtual DOM, fiber, keys, re-render triggers",
          "CSS Q&A: specificity, stacking context, BFC (Block Formatting Context)",
          "System design frontend: 'Design a real-time stock trading dashboard'",
          "Coding test: LeetCode (Array, String, Hash Map) + frontend-specific (DOM manipulation)",
          "Behavioral: STAR method — ceritakan pengalaman optimize performance, resolve bug",
          "Portfolio review: siapkan 2-3 project dengan README & live demo URL"
        ]
      },
      {
        id: "fe5-p1",
        title: "🚀 PROJECT: Production App + APPLY!",
        done: false,
        details: [
          "Optimize nextjs-fintech-dashboard: Lighthouse score > 95 (all categories)",
          "Setup CI/CD: GitHub Actions (lint → test → build → deploy to Vercel)",
          "Implement security: CSP header, npm audit pass, no secret exposure",
          "Polish semua repo: README lengkap, live demo URL, screenshot/GIF",
          "Update CV: React, Next.js, TypeScript, Tailwind, Jest, Storybook, Playwright",
          "Buat LinkedIn post: 'Membangun fintech dashboard real-time dengan Next.js'",
          "APPLY ke Stockbit, Bibit, tiket.com, & fintech lainnya dengan portfolio 🚀"
        ]
      },
      {
        id: "fe5-s1",
        title: "🎯 SYARAT LULUS SPRINT 5 — GET THE OFFER",
        done: false,
        details: [
          "Lighthouse Performance > 95, Accessibility > 95, Best Practices > 95",
          "CI/CD pipeline otomatis jalan (push → test → build → deploy)",
          "Bisa demo end-to-end: design system → Next.js app → API integration → deploy",
          "Bisa jawab interview: event loop, closure, React rendering, Core Web Vitals",
          "CONFIDENT APPLY & PASS INTERVIEW FRONTEND ENGINEER 🚀"
        ]
      }
    ]
  },
  {
    id: "fe-6",
    title: "FRONTEND — Sprint 6: Multi-Language (i18n), Tailwind & Trading Platform (Bulan 11–12)",
    description: "Spesifik untuk fintech/trading (MIFX, Stockbit): i18n, advanced Tailwind, real-time chart, & SEO.",
    project: "multi-lang-trading-platform (MIFX-style)",
    tasks: [
      {
        id: "fe6-1",
        title: "i18n (Internationalization) & Multi-Language",
        done: false,
        details: [
          "Konsep i18n vs l10n: internationalization vs localization",
          "next-intl / next-i18next: setup multi-language di Next.js App Router",
          "Translation files: messages/en.json, messages/id.json (key-value pair)",
          "Locale routing: /en/dashboard, /id/dashboard (middleware redirect)",
          "Language switcher component (toggle tanpa reload page)",
          "Pluralization & gender rules: '1 item' vs '5 items'",
          "Date/Time/Number formatting: Intl.DateTimeFormat, Intl.NumberFormat, currency",
          "RTL (Right-to-Left) support untuk Bahasa Arab/Hebrew (kalau dibutuhkan)",
          "Server-side translation: getTranslations() di Server Component",
          "Client-side translation: useTranslations() hook"
        ]
      },
      {
        id: "fe6-2",
        title: "Advanced Tailwind CSS",
        done: false,
        details: [
          "Tailwind v4 setup: @import 'tailwindcss', @theme inline {} block, PostCSS config",
          "Custom theme: color palette, spacing scale, typography, breakpoints",
          "Utility patterns: flex, grid, container, responsive prefix (sm:, md:, lg:)",
          "Component composition: @apply di CSS, atau clsx/cva untuk variant",
          "Dark mode: class strategy (dark:), CSS variables integration",
          "Animation: transition, keyframes, custom animation via @theme",
          "Responsive design system: mobile-first, clamp() untuk fluid typography",
          "Tailwind plugin: forms, typography, aspect-ratio",
          "Performance: PurgeCSS (otomatis di production), critical CSS extraction",
          "Design tokens: map Figma variables ke Tailwind theme config"
        ]
      },
      {
        id: "fe6-3",
        title: "Real-Time Data & Trading UI Patterns",
        done: false,
        details: [
          "WebSocket integration: connect ke price feed (crypto/forex/stock)",
          "Reconnect strategy: exponential backoff, heartbeat, connection state",
          "Real-time charting: lightweight-charts (TradingView) atau recharts",
          "Optimized rendering: batch updates, requestAnimationFrame, throttle tick data",
          "Order book UI: virtualized list (react-window), bid/ask spread visualization",
          "Market watch table: sortable, filterable, real-time price flash (green/red)",
          "Candlestick chart: OHLC data, timeframe switching (1m, 5m, 1h, 1D)",
          "State management untuk high-frequency update: Zustand + transient updates"
        ]
      },
      {
        id: "fe6-4",
        title: "Advanced Next.js Patterns (Pages Router & App Router)",
        done: false,
        details: [
          "Pages Router: _app.tsx, _document.tsx, getStaticProps, getServerSideProps",
          "Migration: Pages Router → App Router (strategi & common pitfalls)",
          "Advanced routing: catch-all ([...slug]), optional catch-all ([[...slug]])",
          "Parallel Routes: @slot syntax untuk dashboard layout",
          "Intercepting Routes: (..) untuk modal/instagram-style feed",
          "Route Handlers: streaming response (SSE), webhook receiver",
          "Server Actions: mutation tanpa bikin API endpoint (form action)",
          "Custom loading.tsx, error.tsx, global-error.tsx strategy",
          "Next.js + SEO: sitemap.xml, robots.txt, canonical URL, hreflang untuk i18n"
        ]
      },
      {
        id: "fe6-p1",
        title: "🚀 PROJECT: multi-lang-trading-platform",
        done: false,
        details: [
          "Buat trading platform UI (kayak MIFX/Stockbit) dengan Next.js App Router + TypeScript",
          "Implementasi i18n: support English & Bahasa Indonesia (next-intl), locale routing /en & /id",
          "Buat real-time market watch: WebSocket price feed (pakai Binance/CoinGecko public API)",
          "Render candlestick chart (lightweight-charts) dengan timeframe switcher",
          "Implementasi order book UI dengan virtualized list (react-window)",
          "Styling full pakai Tailwind CSS v4 (dark mode, responsive, design tokens)",
          "SEO: sitemap.xml, robots.txt, metadata per page, hreflang tag",
          "Deploy ke Vercel dengan custom domain (opsional)",
          "Lighthouse audit: Performance > 90, SEO > 95"
        ]
      },
      {
        id: "fe6-s1",
        title: "🎯 SYARAT LULUS SPRINT 6",
        done: false,
        details: [
          "Bisa implementasi i18n (English + Indonesia) dengan locale routing & translation files",
          "Bisa styling complex UI (trading dashboard) pakai Tailwind CSS tanpa inspekt element guessing",
          "Bisa handle real-time data (WebSocket) & render chart tanpa freeze/lag",
          "Paham Pages Router vs App Router & bisa migrasi antar keduanya",
          "APPLY ke MIFX, Stockbit, Bibit, & platform trading lainnya dengan portfolio 🚀"
        ]
      }
    ]
  }
];
