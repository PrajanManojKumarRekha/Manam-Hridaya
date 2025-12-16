# Design Guidelines: Maanam Hridaya Nonprofit Organization

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern nonprofit platforms like charity: water, Pencils of Promise, and Patagonia's environmental initiatives - combining warm approachability with visual sophistication. The decorative botanical elements and ornamental frames from your brand materials will create a distinctive, welcoming identity.

## Core Design Elements

### Typography
- **Primary Headings (H1)**: Serif font (Playfair Display or Crimson Text), 48-56px desktop, 32-40px mobile, medium weight
- **Secondary Headings (H2/H3)**: Sans-serif (Inter or Poppins), 32-40px for H2, 24-28px for H3, semibold
- **Body Text**: Sans-serif (Inter), 16-18px, regular weight, 1.6 line height for readability
- **Accent Text**: Serif for decorative quotes or mission statements, italic for emphasis

### Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Card spacing: p-6 to p-8
- Element gaps: gap-6 to gap-8 in grids

### Component Library

**Homepage Structure**:

1. **Hero Section** (80vh):
   - Centered layout with decorative frame around mission statement
   - Large M&H logo integrated into botanical illustration
   - Primary CTA button with subtle backdrop blur
   - Decorative flourishes in corners matching brand aesthetic

2. **Mission Statement Section**:
   - Max-width prose container (max-w-3xl)
   - Large, serif typography for impact
   - Botanical divider elements between sections

3. **Past Events Gallery**:
   - Horizontal scrollable carousel OR masonry grid (2-3 columns desktop, 1 mobile)
   - Event cards with:
     - Featured image (16:9 ratio)
     - Event title (H3)
     - Date badge in corner
     - Short description (2-3 lines, truncated)
     - Decorative border/frame treatment
   - "View All Events" link at end

4. **Upcoming Events Section**:
   - Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
   - Prominent date/time badges
   - Location information
   - Register/RSVP button on each card
   - Alternating decorative botanical accents

5. **Contact & Funding Appeal**:
   - Two-column layout (lg:grid-cols-2)
   - Left: Contact information with icons
   - Right: Heartfelt funding appeal with CTA button
   - Decorative frame around entire section

**Team Page Structure**:
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Team member cards with:
  - Circular or rounded-square profile images
  - Name (H3, serif)
  - Role/title (body text, uppercase tracking)
  - Description paragraph
  - Decorative ornamental separator between name and role
  - Hover state: subtle elevation

**Navigation**:
- Fixed header with logo left, nav links right
- Hamburger menu on mobile
- Subtle shadow on scroll

**Footer**:
- Three-column layout (desktop): About, Quick Links, Contact
- Social media icons
- Newsletter signup with decorative input styling
- Copyright with botanical divider above

### Decorative Elements
- Organic botanical illustrations as section dividers
- Ornamental frames around key content blocks (mission, funding appeal)
- Subtle flourishes in corners of cards
- Hand-drawn or organic line elements connecting sections
- Use SVG illustrations matching the aesthetic in provided images

### Images

**Large Hero Image**: Yes - feature an impactful image showing the organization's work or community impact behind the decorative mission frame

**Image Placement**:
- Hero: Full-width background with overlay and decorative frame overlay
- Past Events: Multiple event photos (16:9 landscape format)
- Team Page: Individual headshots (square or portrait format, 400x400px minimum)
- Mission Section: Optional supporting image showing community/impact

**Image Style**: Warm, authentic photography showing real people and community impact. Prefer natural lighting and candid moments over staged shots.

### Interaction Patterns
- Cards: Gentle lift on hover (transform translateY(-4px))
- Buttons: Smooth color transitions, maintain backdrop blur on hero buttons
- Scroll reveal: Fade-in for cards and sections (subtle, not distracting)
- Gallery: Smooth horizontal scroll with momentum

### Accessibility
- Minimum contrast ratio 4.5:1 for all text
- Focus states on all interactive elements with visible outline
- Alt text for all images
- Semantic HTML structure with proper heading hierarchy
- Keyboard navigation support

### Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

**Key Principle**: Balance decorative elegance with readability and approachability. The design should feel warm and inviting while maintaining nonprofit credibility and professionalism.