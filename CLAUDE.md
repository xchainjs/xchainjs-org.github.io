# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the XChainJS organization website built with Next.js 13.5.6, React 18.2.0, and Tailwind CSS. It's a static site exported to the `out/` directory for hosting on GitHub Pages. The project showcases the XChainJS cross-chain development toolkit with modern design patterns and mobile-responsive components.

## Development Commands

### Core Commands
- `yarn dev` - Start development server
- `yarn build` - Build for production (static export)
- `yarn start` - Start production server (after build)
- `yarn lint` - Run ESLint for code quality checks

### Dependency Management
- `yarn install` - Install dependencies (project uses Yarn as package manager)

## Code Architecture

### Directory Structure
- `src/app/` - Next.js 13 App Router pages and layouts
- `components/` - Reusable React components (root level, not in src)
- `public/` - Static assets (logos, etc.)
- `fonts/` - Custom font files
- `out/` - Built static site output for deployment

### Key Components Architecture

#### Component Organization
Components are organized in the root `components/` directory with:
- Individual component folders (Card, Icon, Link, etc.)
- Each folder contains the component file and index.ts for exports
- `components/sections/` for page-specific sections
- Main export file at `components/index.ts`

#### Page Sections
The main page is composed of modular sections:
- `HeroSection` - Landing hero with main messaging
- `ProblemSolution` - Problem/solution story
- `BlockchainUniverse` - Interactive blockchain visualization
- `LivePlayground` - Code playground demonstration
- `DeveloperCommunity` - Community metrics and resources

#### Styling System
- Tailwind CSS with custom configuration including XChainJS brand colors
- Custom CSS classes in `globals.css` for glassmorphism effects, animations
- Brand colors: `chain-blue`, `electric-green`, `cyber-purple`, `dark` variants
- Mobile-first responsive design with touch-friendly interactions

## TypeScript Configuration

### Path Aliases
- `@/*` - Maps to `src/*`
- `@components` - Maps to `components` directory
- `@fonts` - Maps to `fonts` directory

### ESLint Rules
Uses `standard-with-typescript` configuration with React-specific rules:
- Disabled prop-types (TypeScript handles this)
- Disabled explicit return types for functions
- React hooks linting enabled

## Build Configuration

### Next.js Config
- Static export enabled (`output: 'export'`)
- CSS optimization disabled to prevent build issues
- Custom webpack configuration for CSS minimization
- Targets static hosting (GitHub Pages)

### Tailwind Setup
- Custom color system with XChainJS brand palette
- Extended animations and keyframes for floating/glow effects
- Mobile-responsive utilities and custom shadow effects
- Content paths include both src and root component directories

## Component Patterns

### Icon System
- Centralized icon components in `Icon/` directory
- `IconClass` enum for type-safe icon references
- SVG-based icons with consistent styling

### Link Components
- `ButtonLink` - Primary CTA buttons
- `IconLink` - Social media and external links
- `TextLink` - In-line text links
- All links handle external URLs with proper security attributes

### Layout Patterns
- Fixed header with mobile hamburger menu
- Glassmorphism effects for cards and overlays
- Grid-based layouts with responsive breakpoints
- Footer with organized link sections

## Development Considerations

### Mobile Responsiveness
- All components built mobile-first
- Touch targets meet 44px minimum requirement
- Prevent zoom on input focus (16px font size minimum)
- Smooth scrolling and touch-friendly interactions

### Performance
- Next.js static export for optimal loading
- Image optimization through Next.js Image component
- Custom font loading with display:swap
- Minimal JavaScript bundle

### External Integrations
- Crisp chat widget integration
- External links to documentation, Discord, GitHub
- Social media integration (Twitter, Telegram, Discord)

## Common Tasks

### Adding New Sections
1. Create component in `components/sections/`
2. Export in `components/index.ts`
3. Import and use in `src/app/page.tsx`

### Updating Brand Colors
1. Modify color definitions in `tailwind.config.ts`
2. Update corresponding CSS custom properties if needed

### Adding New Icons
1. Create SVG component in `components/Icon/icons/`
2. Add to IconClass enum in `components/Icon/Icon.tsx`
3. Export in `components/Icon/icons/index.ts`