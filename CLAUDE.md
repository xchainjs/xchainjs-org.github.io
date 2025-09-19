# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

XChainJS website built with Next.js 13 (App Router), React 18, TypeScript, and Tailwind CSS. This is a static marketing website for the XChainJS cross-chain toolkit that exports to static files for GitHub Pages hosting.

## Development Commands

```bash
# Install dependencies
yarn install

# Development server
yarn dev

# Production build (static export)
yarn build

# Production server (after build)
yarn start

# Linting
yarn lint
```

## Architecture

### Next.js Configuration
- Uses `output: 'export'` for static site generation
- App Router structure with `src/app/` directory
- Static export optimized for GitHub Pages deployment

### Component Architecture
- Components located in `/components/` directory (not `/src/components/`)
- Centralized exports through `/components/index.ts`
- TypeScript path mapping: `@components` maps to `./components`
- Each component has its own directory with `index.ts` for clean imports

### Key Components Structure
- **Icon System**: Enum-based icon selection (`IconClass`) with centralized icon mapping in `Icon.tsx`
- **Layout Components**: `Title`, `Subtitle`, `Card`, `IntegrationCard`
- **Link Components**: `ButtonLink`, `IconLink`, `TextLink` with different styling variants
- **Section Components**: `XChainArmy`, `Contributors` for specific page sections

### Styling System
- Tailwind CSS with custom color palette for XChainJS branding
- Custom colors: `primary` (dark grays), `growth` (green), `enterprise` (turquoise)
- Responsive design with mobile-first approach
- Roboto Mono font from Google Fonts

### File Organization
- `/src/app/`: Next.js App Router pages and layouts
- `/components/`: Reusable UI components with individual folders
- `/components/sections/`: Page-specific section components
- `/components/Icon/icons/`: Individual SVG icon components
- `/fonts/`: Custom font files (Arcade Classic)
- `/public/logos/`: Static assets and logos

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` for `/src/*`, `@components` for `/components`, `@fonts` for `/fonts`
- Next.js TypeScript plugin integration

## Development Notes

- This is a marketing website, not an application - focus on content presentation and static generation
- All components use TypeScript with proper interface definitions
- Icon system uses enums for type safety - add new icons to both `IconClass` enum and `Icon.tsx` component
- Tailwind classes follow the existing responsive pattern (mobile-first with `md:` and `lg:` breakpoints)
- External links should use the `TextLink` component with `underlined` prop when appropriate