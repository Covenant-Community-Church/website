
# Reformed Baptist Church Design System

## Overview
This design system embodies a **traditional yet welcoming Reformed Baptist aesthetic** that balances theological gravitas with modern accessibility. The approach emphasizes dignity, reverence, and timeless beauty while remaining approachable to contemporary visitors.

## Core Design Philosophy
- **Classical Foundation**: Traditional typography and proportions reflecting Reformed heritage
- **Modern Accessibility**: Clean, readable interfaces for all users
- **Theological Reverence**: Visual hierarchy that honors Scripture and doctrine
- **Welcoming Spirit**: Approachable design for seekers and visitors

## Typography System

### Font Stack
```css
/* Headings - Classical, Scholarly */
font-family: 'Libre Baskerville', serif;

/* Body Text - Clean, Readable */
font-family: 'Almarai', sans-serif;
```
### Typography Hierarchy
- **H1**: 4xl-6xl (36px-60px), font-bold (700), Libre Baskerville
- **H2**: 3xl-4xl (30px-36px), font-bold (700), Libre Baskerville  
- **H3**: xl-2xl (20px-24px), font-bold (700), Libre Baskerville
- **Body**: base-xl (16px-20px), Almarai
- **Small Text**: sm (14px), Almarai

### Implementation
```
css
.font-heading { font-family: 'Libre Baskerville', serif; }
.font-body { font-family: 'Almarai', sans-serif; }
```
## Color Palette

### Primary Colors
```css
:root {
--navy: #28365D;      /* Authority, theological seriousness */
--brown: #362E17;     /* Warmth, grounded faith */
--warm: #F6F3EA;      /* Hospitality, invitation */
--white: #FFFFFF;     /* Purity, clarity */
--black: #000000;     /* Solemnity, formality */
}
```
### Color Usage Guidelines
- **Navy**: Primary buttons, emphasis, call-to-actions
- **Brown**: Primary text, headings, body content
- **Warm**: Background accents, section highlights
- **White**: Clean backgrounds, content areas
- **Black**: Footer, high-contrast elements

### Accessibility
All color combinations meet WCAG AA contrast requirements:
- Brown text on White: 4.5:1 ratio
- Navy on Warm: 4.5:1 ratio
- White text on Navy: 7:1 ratio

## Component System

### Buttons

#### Primary Button
```css
.btn-primary {
  @apply bg-navy text-white px-8 py-3 rounded-2xl font-body font-semibold 
         hover:bg-navy/90 transition-colors duration-300;
}
```


#### Secondary Button
```css
.btn-secondary {
  @apply border-2 border-navy text-navy px-8 py-3 rounded-2xl font-body font-semibold 
         hover:bg-navy hover:text-white transition-colors duration-300;
}
```


### Cards & Containers

#### Standard Card
```css
.card {
  @apply bg-white rounded-2xl p-6 shadow-sm border border-gray-100;
}
```


#### Accent Section
```css
.section-accent {
  @apply bg-warm py-20;
}

.section-white {
  @apply bg-white py-20;
}
```


### Icons

#### Icon Container
```css
.icon-container {
  @apply w-16 h-16 bg-warm rounded-full flex items-center justify-center;
}

.icon-container svg {
  @apply w-8 h-8 text-navy;
}
```


## Layout System

### Container Widths
```css
.container-max {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```


### Grid Systems
- **3-Column Grid**: `grid md:grid-cols-3 gap-12` for feature sections
- **2-Column Grid**: `grid md:grid-cols-2 gap-8` for content pairs
- **Responsive Breakpoints**: Mobile-first approach with md: and lg: variants

### Spacing Scale
```css
/* Consistent spacing using Tailwind scale */
.spacing-section { @apply py-20; }      /* Between major sections */
.spacing-content { @apply mb-16; }      /* Between content blocks */
.spacing-elements { @apply mb-6; }      /* Between related elements */
.spacing-tight { @apply mb-4; }         /* Between closely related items */
```


## Interactive Elements

### Hover Effects
```css
.hover-lift {
  @apply transition-transform duration-300 hover:-translate-y-1;
}

.hover-color {
  @apply transition-colors duration-300;
}
```


### Transitions
- **Standard Duration**: 300ms for color changes, transforms
- **Easing**: Default ease-in-out for natural feel
- **Subtle Movement**: Minimal transforms to maintain dignity

## Responsive Design

### Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small desktop */
xl: 1280px  /* Large desktop */
```


### Mobile-First Approach
- Base styles for mobile (320px+)
- Progressive enhancement with `md:` and `lg:` prefixes
- Touch-friendly tap targets (minimum 44px)

### Typography Scaling
```css
/* Responsive text sizing */
.heading-responsive {
  @apply text-4xl md:text-6xl; /* 36px mobile, 60px desktop */
}

.subheading-responsive {
  @apply text-xl md:text-2xl; /* 20px mobile, 24px desktop */
}
```


## Content Guidelines

### Scripture Integration
- **Prominent Placement**: Biblical passages as design focal points
- **Clear Attribution**: Proper verse citations
- **Reverent Treatment**: Appropriate typography hierarchy

### Photography Standards
- **Aspect Ratio**: 4:5 portrait orientation for leadership photos
- **Resolution**: Minimum 1080x1350px for portrait images
- **Quality**: High-resolution, professional presentation

### Iconography
- **Christian Symbols**: Crosses, books, shepherd imagery
- **Simple Design**: Clean, recognizable SVG icons
- **Consistent Style**: Outline style with 2px stroke width

## Accessibility Standards

### Semantic HTML
```html
<!-- Proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>

<!-- Meaningful alt text -->
<img src="pastor.jpg" alt="Pastor John Smith speaking at the pulpit">

<!-- Accessible buttons -->
<button type="button" aria-label="Open navigation menu">
```


### Keyboard Navigation
- All interactive elements accessible via keyboard
- Visible focus indicators
- Logical tab order

### Screen Reader Support
- Semantic HTML structure
- ARIA labels where needed
- Descriptive link text

## Implementation Notes

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: '#28365D',
        brown: '#362E17',
        warm: '#F6F3EA',
      },
      fontFamily: {
        heading: ['Libre Baskerville', 'serif'],
        body: ['Almarai', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '15px',
      }
    }
  }
}
```


### CSS Custom Properties
```css
:root {
  --rounded-corners: 15px;
  --section-padding: 5rem 0;
  --content-max-width: 80rem;
}
```


## Design Checklist

### Before Launch
- [ ] All text meets contrast requirements
- [ ] Images have appropriate alt text
- [ ] Keyboard navigation works throughout
- [ ] Mobile experience is optimized
- [ ] Typography hierarchy is consistent
- [ ] Color usage follows guidelines
- [ ] Loading states are handled
- [ ] Error states are designed

### Content Review
- [ ] Scripture quotations are accurate
- [ ] Theological language is precise but accessible
- [ ] Contact information is current
- [ ] Images represent church community well
- [ ] Navigation reflects church structure

This design system serves to honor Reformed Baptist theological heritage while creating a genuinely welcoming digital environment for seekers, new believers, and mature saints alike.
