# Customer Testimonial Photos (16:9 Ratio)

This folder contains customer home transformation photos displayed in the **Customer Homes & Stories** carousel on the website.

## Requirements for Uploading Photos:
1. **Aspect Ratio**: The photos must be in **16:9** landscape aspect ratio.
   - Recommended resolutions: `1920x1080`, `1280x720`, or `960x540` pixels.
2. **File Formats**: `.jpg`, `.jpeg`, `.png`, or `.webp`.
3. **Photo Subject**: The customer standing in front of or beside their newly painted home.

## How to Add or Change a Customer Story:
1. Drop your photo into this directory: `assets/images/testimonials/` (e.g., `customer-home-5.jpg`).
2. Open `js/data.js` and locate `window.VasuData.TESTIMONIALS`.
3. Add or update the entry:
```javascript
{
  id: "testimonial-5",
  customerName: "Customer or Family Name",
  location: "Village / Town Name",
  image: "assets/images/testimonials/customer-home-5.jpg",
  instagramReelUrl: "https://www.instagram.com/reel/YOUR_REEL_CODE/",
  caption: "Asian Paints Royale Luxury Emulsion home makeover"
}
```
4. Save the file. The website will automatically display the 16:9 image and direct visitors to that specific Instagram reel when they tap the "Watch Reel" button!
