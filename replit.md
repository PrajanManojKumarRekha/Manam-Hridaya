# Maanam Hridaya - Nonprofit Organization Website

## Overview

This is a nonprofit organization website for "Maanam Hridaya" - an organization focused on empowering children through education, digital literacy, and hygiene awareness. The application is a full-stack web application with a React frontend and Express backend, designed to showcase the organization's mission, team, events, and provide contact/donation functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with hot module replacement

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- shadcn/ui primitives in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **HTTP Server**: Node.js native HTTP server
- **Development**: Uses Vite middleware for HMR during development
- **Production**: Static file serving from built assets

The backend is minimal, with routes registered in `server/routes.ts` and a storage abstraction in `server/storage.ts` using an in-memory implementation.

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's schema builder
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Migrations**: Managed via `drizzle-kit push`

Currently uses in-memory storage (`MemStorage` class) but is configured for PostgreSQL via `DATABASE_URL` environment variable.

### Design System
- Custom color theming with CSS variables (light mode optimized)
- Typography: Playfair Display (serif headings), Inter/DM Sans (body text)
- Warm, approachable aesthetic inspired by modern nonprofit platforms
- Responsive design with mobile-first considerations

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migration and schema push tool

### UI Libraries
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **class-variance-authority**: Component variant management

### Build & Development
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server-side bundling for production
- **tsx**: TypeScript execution for development

### Fonts (External CDN)
- Google Fonts: Playfair Display, DM Sans, Inter, Architects Daughter, Fira Code, Geist Mono

### Optional Integrations (Dependencies Present)
- Session management: `connect-pg-simple`, `express-session`
- Authentication: `passport`, `passport-local`
- File uploads: `multer`
- Email: `nodemailer`
- Payments: `stripe`
- AI: `openai`, `@google/generative-ai`

Note: Many of these are bundled dependencies but not yet implemented in the current codebase.