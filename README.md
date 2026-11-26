# vasucolourworld
It's a website developed for my painting store where it creates the awarness among the people about the paint products we deal with and the top painters details and the offers / sales we run

# Vasu Colour World Paints - Website

Modern, modular, mobile-responsive website for **Vasu Colour World Paints** (Authorized Asian Paints & Kansai Nerolac Dealer in Pathapatnam, Srikakulam District, AP).

---

## 📁 Project Directory Structure

```text
vasu-colour-world-paints/
├── index.html                   # Clean, semantic HTML structure
├── README.md                    # Developer and editor documentation
│
├── assets/                      # Media and brand graphics
│   └── images/
│       ├── logo.jpg             # Store brand logo (Header & Hero)
│       ├── asian-paints.jpg     # Official Asian Paints brand logo
│       ├── nerolac.jpg          # Official Kansai Nerolac brand logo
│       └── products/            # In-store paint product packshot images (Royale, Apex, Impressions, etc.)
│
├── css/
│   └── style.css                # Layout, typography, permanent combined theme, and carousel styling
│
└── js/
    ├── data.js                  # Central configuration: shades, store products catalog, painters, store contacts
    ├── can-3d.js                # Three.js interactive 3D paint can with rotation & lighting
    ├── products.js              # In-store paint products carousel with side-scroll & filter chips
    ├── painters.js              # Verified painters directory rendering with ratings & WhatsApp links
    ├── paint-data.js            # Official technical coverage chart & room calculation formulas
    ├── chatbot.js               # Paint coverage and quantity calculation chatbot
    └── main.js                  # Application entry point & card 3D tilt interactions
```

---

## 🛠️ How to Update and Customize

All common updates are centralized in **`js/data.js`**, so anyone can make changes without needing to touch complex HTML or 3D graphics code.

### 1. Adding or Editing Paint Shades
Open `js/data.js` and locate `SHADES`:
```javascript
SHADES: [
  { name: "Royal violet", hex: "#7b2fbf" },
  { name: "Sky blue",     hex: "#1d6fe0" },
  { name: "Leaf green",   hex: "#2aa84a" },
  // Add new shade:
  { name: "Sunset Gold",  hex: "#e5a93b" }
]
```
- The website will automatically update both the **interactive 3D can**, the **wall visualizer**, and the **shade palette**.

### 2. Adding or Editing In-Store Paint Products
Open `js/data.js` and edit `STORE_PRODUCTS`:
```javascript
STORE_PRODUCTS: [
  {
    id: "ap-royale-luxury",
    name: "Royale Luxury Emulsion",
    brand: "Asian Paints",
    brandKey: "asian",          // 'asian' or 'nerolac'
    category: "Interior Luxury",
    categoryKey: "interior",     // 'interior', 'exterior', or 'wallcare'
    finish: "Silky Smooth Sheen with Teflon Protection",
    coverage: "140 – 160 sq. ft. / L (2 coats)",
    packs: "20L, 10L, 4L, 1L",
    image: "assets/images/products/royale-luxury.png",
    colorAccent: "#7b2fbf"
  }
]
```
- Place any new product image into `assets/images/products/` and reference its path in `image`.
- The product will automatically show in the side-scrolling row with filter chips, "Calculate Quantity" integration, and WhatsApp inquiry button.

### 3. Updating Verified Painters
Open `js/data.js` and locate `PAINTERS`:
```javascript
PAINTERS: [
  {
    name: "Nagavamsam Simayya (Shyam)",                      // Painter name
    skill: "Interior wall painting & textures", // Specialty
    years: 12,                                 // Years of experience (or null)
    rating: 4.9,                               // Star rating out of 5.0 (or null)
    jobs: 140,                                 // Completed jobs (or null)
    color: "#7b2fbf",                          // Avatar badge theme color
    phone: "+919177801493"                     // WhatsApp inquiry number
  }
]
```
- Each card automatically creates a direct **WhatsApp click-to-chat link** pre-filled with the painter's name and skill.
- **Side-Scrolling Carousel**: Exactly 4 profiles are shown in view on desktop. Any 5th and subsequent profiles scroll sideways horizontally with touch swiping, trackpad scrolling, and `<` / `>` navigation buttons.

### 3. Updating Store Contact Information
Open `js/data.js` and edit `STORE_INFO`:
```javascript
STORE_INFO: {
  name: "Vasu Colour World Paints",
  phonePrimary: "+91 94413 56529",
  phoneSecondary: "+91 73306 79280",
  whatsappNumber: "919441356529"
}
```

### 4. Updating Brand Logos or Photos
Replace the files inside `assets/images/`:
- `logo.jpg`: Store logo (Header and Hero section)
- `asian-paints.jpg`: Asian Paints dealership logo
- `nerolac.jpg`: Kansai Nerolac dealership logo

### 6. Permanent Combined Hybrid Theme
The website uses a permanent, unified Combined / Hybrid theme:
- **Cinematic Dark Sections**: Header, Hero (with 3D Paint Can), Brands, Painters, Store Visit, and Footer (`#090e24` / midnight navy).
- **Crisp Light Sections**: Products, Shades Visualizer, and Why Us (`#ffffff`).

Theme switching has been removed in favor of this single, polished aesthetic. You can customize colors in `css/style.css`:
```css
:root {
  --header-bg: #090e24;   /* Header & Hero background */
  --content-bg: #ffffff;  /* Content sections background */
  --content-ink: #0f172a; /* Content text */
  --p: #7b2fbf;           /* Brand purple accent */
  --b: #1d6fe0;           /* Blue accent */
  --r: #e8262b;           /* Nerolac red accent */
}
```

---

## 🚀 How to Run and Test

1. **Local Test (No server required)**:
   - Double-click `index.html` to open it in Chrome, Safari, Edge, or Firefox.
   - It runs completely offline using standard HTML5 and WebGL.

2. **Web Deployment**:
   - Simply upload the entire `vasu-colour-world-paints` folder to any web host (Vercel, Netlify, GitHub Pages, Hostinger, cPanel, etc.).
   - No build step, Node.js, or compilation needed.

