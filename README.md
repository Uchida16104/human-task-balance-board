# Human Task Balance Board

A **human-centered task management web application** that integrates mental well-being awareness into everyday task tracking.
This project focuses on **simplicity, reliability, and local-first operation**, ensuring it runs without errors in modern browsers with no build step required.

---

## Overview

Traditional task management tools often emphasize productivity and efficiency alone, which can unintentionally increase stress and burnout.

**HumanTask Balance Board** takes a different approach:

* Tasks are managed alongside **mood and energy awareness**
* All features are **optional and non-intrusive**
* Data is stored **locally by default**
* The application runs **entirely client-side**, without requiring accounts or servers

This project is designed as a **practical, extensible baseline**, not a finished product.

---

## Key Features

### Task Management

* Add tasks
* Edit tasks
* Save / overwrite task content
* Cancel edits safely
* Delete tasks
* All changes persist immediately

### Mental Well-Being Awareness

* Simple mood check-in (Low / Normal / High)
* Mood is stored alongside tasks
* No scoring, ranking, or pressure

### Visualization

* Lightweight Mermaid diagram showing conceptual relationships
* Optional Lottie animation for visual calm
* SVG-based rendering for performance

### Local-First Data Storage

* **LocalStorage** for instant persistence
* **IndexedDB** initialized for structured future use
* **PouchDB** for sync-capable abstraction (no remote required)
* **CouchDB-ready**, but not mandatory

### Accessibility & UX

* Minimal UI
* Clear actions
* No modal overload
* No dark patterns

---

## Non-Goals (Important)

This project **does NOT**:

* Provide medical diagnosis or treatment
* Replace professional mental health care
* Score, rank, or evaluate emotional states
* Force user participation in well-being features
* Require user accounts or personal data submission

---

## Technology Stack

All libraries are loaded via CDN and initialized safely.

### Frontend Frameworks & UI

* **Alpine.js** (state management)
* **HTMX** (`hx-push-url="true"` supported)
* **Tailwind CSS** (styling)
* **hyperscript** (micro-interactions)
* **Shoelace** (accessible components)
* **Iconify** (icons)

### Animation & Visualization

* **Motion One**
* **AOS**
* **Swiper**
* **Mermaid**
* **Lottie-web**
* **SVG**

### Data & Storage

* **LocalStorage**
* **IndexedDB**
* **PouchDB**
* **CouchDB (optional / compatible)**

### Authentication (Conceptual)

* **BASIC Authentication (JavaScript pseudo-implementation only)**

> No credentials are stored, transmitted, or enforced by default.

---

## Project Structure

```
.
└─ index.html   # Fully self-contained application
```

There is **no build step**, **no bundler**, and **no server requirement**.

---

## How to Run

### Option 1: Local (Recommended for Development)

1. Clone the repository
2. Open `index.html` in a modern browser

That’s it.

### Option 2: Static Hosting (e.g., Vercel, GitHub Pages)

* Deploy the repository as a static site
* No configuration required

---

## Data Persistence Behavior

* Tasks and mood are saved automatically
* Storage key: `localStorage["state"]`
* Edit state (`editing`) is UI-only and never persisted
* Deletions are permanent

---

## Reliability Guarantees

This implementation is designed to:

* Run without JavaScript runtime errors
* Avoid race conditions
* Avoid missing dependencies
* Avoid network dependency failures
* Avoid framework responsibility overlap

All external services are **optional and non-blocking**.

---

## Extensibility Roadmap (Optional)

Potential future enhancements:

* IndexedDB-based full persistence
* PouchDB ↔ CouchDB synchronization toggle
* HTMX multi-page navigation
* Undo / redo history
* Accessibility audit (WCAG)
* Offline-first sync strategy
* Privacy threat modeling

---

## Philosophy

> Productivity should adapt to humans — not the other way around.

HumanTask Balance Board is intentionally **small, clear, and respectful** of users’ mental space.

---

## License

Specify a license of your choice (e.g., MIT, Apache-2.0).

---

## Developer

***Hirotoshi Uchida***
