# ROAB Foundation

```
╔══════════════════════════════════════════════════════════╗
║                  ROAB FOUNDATION ARCHIVES                ║
║              Retro Computing Heritage Project            ║
║                [ CLASSIFIED MATERIAL ]                   ║
╚══════════════════════════════════════════════════════════╝
```

## Overview

The **ROAB Foundation** is a retro-style web archive that celebrates vintage computing aesthetics and preserves historical digital records in their original format.

This project features an authentic typewriter-style interface reminiscent of 1980s-90s computer systems and government terminals.

## Features

- **Authentic Typewriter Typography**: Uses `Courier Prime` font family throughout for a genuine retro computing feel
- **CRT Monitor Aesthetic**: Green-on-black color scheme with scanline effects
- **Vintage Interface Elements**:
  - Terminal emulation windows
  - File archive listings
  - Document registry tables
  - Classification labels
  - Status indicators
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Respects user motion preferences

## Typography System

All text elements use the monospace typewriter font stack:

```css
font-family: 'Courier Prime', "Courier New", Courier, monospace;
```

### Typography Usage

- **Navigation**: Bold uppercase typewriter font
- **Headings**: Large bold uppercase with increased letter spacing
- **Body Text**: Readable compact monospace font
- **File Numbers/Dates**: Specialized styling with increased letter spacing
- **Classification Labels**: Red uppercase labels with borders
- **Terminal Messages**: Glowing green monospace text
- **Error Messages**: Red monospace text on dark background
- **Status Indicators**: Bold uppercase monospace indicators

## Color Scheme

```
Primary Background:  #0a0e27 (Dark navy)
Primary Text:        #00ff00 (Bright green)
Secondary Text:      #00dd00 (Darker green)
Accent Color:        #ff6b00 (Orange)
Error/Alert:         #ff0000 (Red)
Muted Text:          #008800 (Dark green)
```

## File Structure

```
ROAB-foundation/
├── index.html          # Main HTML document
├── styles.css          # Complete styling and typography
└── README.md          # This file
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/thatguythatscribbles-blip/ROAB-foundation.git
   ```

2. Open `index.html` in your web browser

3. No build process or dependencies required - it's pure HTML and CSS!

## Font Stack Details

The project uses **Courier Prime** as the primary typewriter font via Google Fonts. This provides:

- Authentic monospace appearance
- Excellent readability on screens
- Support for all modern browsers
- Fallback to system fonts if Google Fonts unavailable

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design Principles

✓ **Authenticity**: Every element reflects genuine retro computer aesthetics  
✓ **Readability**: Despite vintage styling, text remains clearly readable  
✓ **Consistency**: Monospace font used throughout for visual cohesion  
✓ **Accessibility**: Proper contrast ratios and motion preferences respected  
✓ **Nostalgia**: Green CRT monitor aesthetic and terminal interfaces  

## Typography DO's and DON'Ts

### ✓ DO
- Use monospace typewriter fonts
- Increase letter spacing for headings
- Use uppercase for titles and labels
- Apply text-shadow for vintage glow effects
- Maintain consistent line-height for readability

### ✗ DON'T
- Use rounded modern fonts (Arial, Roboto, Poppins, Inter, Comic Sans)
- Apply sans-serif fonts to any primary content
- Use decorative scripts as primary fonts
- Mix typewriter font with modern sans-serif fonts
- Sacrifice readability for aesthetics

## Customization

To customize the appearance:

1. **Change Font**: Modify the `@import` URL or font-family in `:root`
2. **Adjust Colors**: Update CSS variables in `:root`
3. **Modify Layout**: Edit grid templates and flexbox properties
4. **Add Content**: Insert new sections following the existing structure

## License

This project is open source and available for personal and commercial use.

## Contributing

Feel free to fork, modify, and improve this project!

---

```
╔══════════════════════════════════════════════════════════╗
║      ROAB FOUNDATION v1.0 - EST. 1984 | PRESERVED 2026  ║
║           Typewriter Aesthetic Digital Archive           ║
╚══════════════════════════════════════════════════════════╝
```