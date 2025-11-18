# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NilenRavel** is a Next.js 16 travel agency website built with TypeScript, Tailwind CSS v4, and React 19. The site showcases tourist destinations and corporate travel services with dynamic destination pages, an admin panel for content management, and image upload capabilities.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Core Structure

- **App Router**: Next.js 16 App Router with TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS (@tailwindcss/postcss)
- **Fonts**: Geist Sans and Geist Mono via next/font
- **Icons**: react-icons (v5.5.0)

### Key Directories

- `/app` - Next.js app router pages and components
- `/app/components` - Reusable React components
- `/app/destinos/[destino]` - Dynamic destination pages
- `/app/admin` - Content management admin panel
- `/app/api` - API routes for CRUD operations
- `/data` - JSON data files (destinos.json)
- `/public/mundo-turistico` - Destination images

### Data Management

**destinos.json** is the single source of truth for all destination content. Structure:

```typescript
{
  "[destinoId]": {
    id: string;                    // URL slug (e.g., "cdmx", "chihuahua")
    title: string;                 // Display title
    subtitle: string;              // Hero subtitle
    heroImage: string;             // Hero image path
    heroImageAlt: string;          // Hero alt text
    carouselImages: Array<{        // Image carousel
      src: string;
      alt: string;
    }>;
    sectionTitle: string;          // Main section title
    traslados: Array<{             // Airport transfers
      title: string;
      description: string;
    }>;
    toursSectionTitle: string;     // Tours section title
    tours: Array<{                 // Available tours
      title: string;
      duration: string;
      description?: string;
    }>;
    customTours: {                 // Custom tour info
      description: string;
      minimum: string;
    };
    recommendedDestinos?: Array<{  // Related destinations
      title: string;
      href: string;
      image: string;
      alt: string;
    }>;
  }
}
```

### API Routes

**GET /api/destinos** - Fetch all destinations
**POST /api/destinos** - Create new destination (body: `{destinoId, destinoData}`)
**PUT /api/destinos** - Update existing destination (body: `{destinoId, destinoData}`)
**DELETE /api/destinos?id=[destinoId]** - Delete destination
**POST /api/upload** - Upload image files (FormData with `file` and optional `subfolder`)

### Dynamic Routing

The `/destinos/[destino]` route dynamically generates pages from destinos.json. The `destino` param is matched against destination IDs (case-insensitive). Returns 404 if destination not found.

### Admin Panel

Located at `/app/admin/page.tsx` - a client-side interface for:
- Creating/editing/deleting destinations
- Uploading images (hero, carousel)
- Managing tours, transfers, and recommendations
- Live preview of destination pages

**Note**: Currently has no authentication - implement auth before production deployment.

### Components

- **Header/Footer** - Site-wide navigation and footer
- **Hero/HeroTuristico/HeroCorporativo** - Different hero sections
- **ImageCarousel** - Auto-rotating image gallery
- **DestinosGrid** - Grid layout for destination cards
- **NavigationMenu** - Main navigation component
- **TopHeader** - Top bar with contact info

### Contact Integration

Email: reservas2@nilenlcc.com.mx
WhatsApp: +52 55 6195 2964

Both are hardcoded in destination pages (app/destinos/[destino]/page.tsx:194-208).

## Important Notes

- File-based data storage: All destination data persists to `data/destinos.json`
- Images must be placed in `/public/mundo-turistico/` to be accessible
- The admin panel modifies destinos.json directly via the API routes
- TypeScript is configured but type checking happens only at build time via `npm run build`
- Next.js 16 uses async params - always await the `params` object in page components
