# elektronen-mikroskop.com

## Project Overview

A German-language business website for **elektronen-mikroskop.com**, a company specializing in preparation techniques and accessories for electron microscopy. The company provides equipment, tools, and consumables for scanning electron microscope (SEM/REM) sample preparation.

## Project Type

Static HTML website

## Business Domain

B2B sales and distribution of:
- Sample coating equipment
- Sample cleaning devices
- Vibration dampening systems
- Preparation tools and tweezers
- Sample holders
- Conductive adhesives
- Sample storage solutions
- Calibration and test equipment
- Starter kits for electron microscopy labs

## Technology Stack

- **HTML5**: Semantic markup with German content
- **Bootstrap**: Grid system and responsive components (navbar, modals)
- **Custom CSS/SCSS**: Referenced but not yet implemented (`scss/main.css`)
- **JavaScript**: Modal functionality (`js/modal.js` - referenced but not yet implemented)
- **PWA Support**: Web manifest and favicon assets included

## Project Structure

```
elektronen-mikroskop/
├── .git/                   # Git repository
├── .github/                # GitHub configuration (empty)
├── .gitignore              # Ignores node_modules
├── src/                    # Source files
│   ├── index.html          # Main HTML page (267 lines)
│   ├── favicon.ico         # Browser favicon
│   ├── favicon-16x16.png   # Small favicon
│   ├── favicon-32x32.png   # Standard favicon
│   ├── apple-touch-icon.png # iOS home screen icon
│   ├── android-chrome-192x192.png  # Android icon
│   ├── android-chrome-512x512.png  # Android icon (large)
│   ├── safari-pinned-tab.svg       # Safari pinned tab icon
│   ├── mstile-150x150.png          # Windows tile icon
│   ├── browserconfig.xml           # IE/Edge tile config
│   └── site.webmanifest            # PWA manifest
└── PROJECT.md              # This file
```

## Current State

### Implemented Features

1. **Responsive Layout**: Bootstrap-based grid system
2. **Navigation**: Collapsible navbar with hamburger menu
3. **Hero Section**: Brand introduction with heading and subheading
4. **Product Portfolio Grid**: 9 product categories in masonry layout:
   - Probenbeschichtung (Sample coating)
   - Probenreinigung (Sample cleaning)
   - Schwingungsdämpfung (Vibration dampening)
   - Präparationswerkzeuge (Preparation tools)
   - Probenträger (Sample holders)
   - Klebstoffe (Adhesives)
   - Probenaufbewahrung (Sample storage)
   - Justieren, Testen, Kalibrieren (Testing/calibration)
   - Starterkits (Starter kits)
5. **Contact Section**: Phone number and contact information
6. **Footer**: Copyright notice and Impressum modal trigger
7. **Legal**: Full Impressum (German legal notice) in modal
8. **PWA Assets**: Complete set of favicons and manifest files

### Missing/Incomplete Features

1. **CSS Files**:
   - `scss/main.css` - referenced but not present
   - `bootstrap/css/bootstrap.min.css` - referenced but not present
   - Custom SCSS source files missing

2. **JavaScript Files**:
   - `js/modal.js` - referenced but not present (for Impressum modal)

3. **Images**:
   - `scss/images/Brand.svg` - logo referenced but not present
   - `scss/images/I_Probenbeschichtung.svg` - product illustrations (used for all 9 categories, likely placeholders)

4. **Navigation**: Menu items are placeholders ("Home", "Link", "Disabled")

5. **External Dependencies**: Bootstrap CSS not included in project

### Technical Issues

1. **HTML Syntax**: Line 39 has a malformed ID attribute (`id="navbar d-flex flex-column "`)
2. **Missing Assets**: Several referenced files don't exist in the repository
3. **Incomplete Navbar**: Collapse functionality requires Bootstrap JS and modal.js
4. **Product Images**: All product categories use the same placeholder SVG

## Contact Information

- **Company**: Carsten Pape Handelsvertretung
- **Address**: Mozartstraße 20, 72127 Kusterdingen, Germany
- **Phone**: +49 (0) 7071 / 93 46 - 60
- **Email**: sales@elektronen-mikroskop.com
- **VAT ID**: DE 259 743 491

## Development Notes

### To Complete the Project

1. Add missing CSS files or update references
2. Implement modal.js for Impressum functionality
3. Add brand logo and product illustrations
4. Update navigation menu with actual links
5. Add Bootstrap JS for navbar toggle functionality
6. Create SCSS source files if using Sass compilation
7. Fix HTML syntax error on line 39

### Design System

- **Colors**:
  - Primary theme: #b900f3 (purple/magenta)
  - Tile color: #00aba9 (teal)
  - Safari accent: #5bbad5 (light blue)

- **Layout**: Container-fluid with custom background classes (background-1, background-2)

- **Typography**: German language content focused on technical/scientific audience

### Git Status

- **Branch**: main
- **Untracked files**: .gitignore, src/
- **Status**: New repository, no commits yet

## License & Legal

Content copyright © 2024 elektronen-mikroskop.com. Legal notice generated via e-recht24.de.
