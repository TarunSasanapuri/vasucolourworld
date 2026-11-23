/**
 * ============================================================================
 * Vasu Colour World Paints - Technical Paint & Coverage Data
 * Complete Asian Paints & Kansai Nerolac Catalog (55 Products)
 * Includes coverage rates, pack sizes, and store room paint calculation logic.
 * Note: Calculation formulas and math steps are confidential to store operations.
 * ============================================================================
 */

const VasuPaintData = {
  CAN_SIZES: [20, 10, 4, 1],
  PUTTY_BAGS: [40, 20, 5, 1],

  PRODUCTS: [
    {
        "id": "ap-neobharat-latex-interior",
        "serial": "1.01",
        "name": "Neo Bharat Latex Interior",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "Latex Smart Upgrade",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 105.0,
            "max": 120.0,
            "avg": 112.5
        },
        "coverage2Coats": {
            "min": 210.0,
            "max": 240.0,
            "avg": 225.0
        },
        "description": "Smooth Finish + Higher Coverage + 1000+ Shades"
    },
    {
        "id": "ap-tractor-sparc",
        "serial": "1.02",
        "name": "Tractor Sparc",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "Economy Upgrade",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 110.0,
            "max": 130.0,
            "avg": 120.0
        },
        "coverage2Coats": {
            "min": 220.0,
            "max": 260.0,
            "avg": 240.0
        },
        "description": "1.5X Coverage Than Distemper, Smooth Finish"
    },
    {
        "id": "ap-tractor-sparc-ultra",
        "serial": "1.03",
        "name": "Tractor Sparc Ultra",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "Economy Upgrade",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 110.0,
            "max": 130.0,
            "avg": 120.0
        },
        "coverage2Coats": {
            "min": 220.0,
            "max": 260.0,
            "avg": 240.0
        },
        "description": "1.5X Coverage with Superior Washability"
    },
    {
        "id": "ap-tractor-emulsion",
        "serial": "1.04",
        "name": "Tractor Emulsion",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "4 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 120.0,
            "max": 140.0,
            "avg": 130.0
        },
        "coverage2Coats": {
            "min": 240.0,
            "max": 280.0,
            "avg": 260.0
        },
        "description": "Anti-Fade Smooth Matt with Superior Washability"
    },
    {
        "id": "ap-tractor-emulsion-ultra",
        "serial": "1.05",
        "name": "Tractor Emulsion Ultra",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "4 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 120.0,
            "max": 140.0,
            "avg": 130.0
        },
        "coverage2Coats": {
            "min": 240.0,
            "max": 280.0,
            "avg": 260.0
        },
        "description": "Anti-Damp Ultra Matt with Superior Washability"
    },
    {
        "id": "ap-tractor-emulsion-shyne",
        "serial": "1.06",
        "name": "Tractor Emulsion Shyne",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "4 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 125.0,
            "max": 145.0,
            "avg": 135.0
        },
        "coverage2Coats": {
            "min": 250.0,
            "max": 290.0,
            "avg": 270.0
        },
        "description": "Rich Glossy Sheen with High Washability"
    },
    {
        "id": "ap-apcolite-premium",
        "serial": "1.07",
        "name": "Apcolite Premium",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "5 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 130.0,
            "max": 150.0,
            "avg": 140.0
        },
        "coverage2Coats": {
            "min": 260.0,
            "max": 300.0,
            "avg": 280.0
        },
        "description": "Stain Resistant Nano Tech with High Washability"
    },
    {
        "id": "ap-apcolite-shyne-advanced",
        "serial": "1.08",
        "name": "Apcolite Shyne Advanced",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "6 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 130.0,
            "max": 150.0,
            "avg": 140.0
        },
        "coverage2Coats": {
            "min": 260.0,
            "max": 300.0,
            "avg": 280.0
        },
        "description": "Advanced Shyne with High Washability & Stain Resistance"
    },
    {
        "id": "ap-apcolite-alprotek",
        "serial": "1.09",
        "name": "Apcolite Alprotek",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "6 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 135.0,
            "max": 155.0,
            "avg": 145.0
        },
        "coverage2Coats": {
            "min": 270.0,
            "max": 310.0,
            "avg": 290.0
        },
        "description": "Flame Retardancy* + Stain Repellance (Lotus Effect)"
    },
    {
        "id": "ap-apcolite-alprotek-shyne",
        "serial": "1.10",
        "name": "Apcolite Alprotek Shyne",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "6 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 135.0,
            "max": 155.0,
            "avg": 145.0
        },
        "coverage2Coats": {
            "min": 270.0,
            "max": 310.0,
            "avg": 290.0
        },
        "description": "Lotus Effect\u2122 Tech + Flame Retardancy* Shyne Finish"
    },
    {
        "id": "ap-royale-luxury",
        "serial": "1.11",
        "name": "Royale Luxury Emulsion",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "8 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L, 200ml",
        "coverage1Coat": {
            "min": 140.0,
            "max": 160.0,
            "avg": 150.0
        },
        "coverage2Coats": {
            "min": 280.0,
            "max": 320.0,
            "avg": 300.0
        },
        "description": "Teflon\u2122 Surface Protector with Luxury Silk Sheen"
    },
    {
        "id": "ap-royale-luxury-shyne",
        "serial": "1.12",
        "name": "Royale Luxury Shyne Emulsion",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "8 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 140.0,
            "max": 160.0,
            "avg": 150.0
        },
        "coverage2Coats": {
            "min": 280.0,
            "max": 320.0,
            "avg": 300.0
        },
        "description": "Teflon\u2122 Enhanced High Gloss Luxury Finish"
    },
    {
        "id": "ap-royale-glitz",
        "serial": "1.13",
        "name": "Royale Glitz",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "1. Interior Emulsions",
        "type": "Interior Emulsions",
        "surface": "interior",
        "segment": "8 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 145.0,
            "max": 165.0,
            "avg": 155.0
        },
        "coverage2Coats": {
            "min": 290.0,
            "max": 330.0,
            "avg": 310.0
        },
        "description": "Ultra Sheen Luxury with Stain Shield & Luxury Fragrance"
    },
    {
        "id": "ap-neobharat-latex-exterior",
        "serial": "2.01",
        "name": "Neo Bharat Latex Exterior",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "Latex Tech",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 50.0,
            "max": 60.0,
            "avg": 55.0
        },
        "coverage2Coats": {
            "min": 100.0,
            "max": 120.0,
            "avg": 110.0
        },
        "description": "Latex Weather Protection with Superior Adhesion"
    },
    {
        "id": "ap-ace-sparc",
        "serial": "2.02",
        "name": "ACE Sparc",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "2 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 55.0,
            "max": 65.0,
            "avg": 60.0
        },
        "coverage2Coats": {
            "min": 110.0,
            "max": 130.0,
            "avg": 120.0
        },
        "description": "Anti-Fungal Clean Shield with High Water Resistance"
    },
    {
        "id": "ap-ace-exterior",
        "serial": "2.03",
        "name": "ACE Exterior Emulsion",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "4 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 55.0,
            "max": 65.0,
            "avg": 60.0
        },
        "coverage2Coats": {
            "min": 110.0,
            "max": 130.0,
            "avg": 120.0
        },
        "description": "Water-Resistant Exterior Finish with Colour Stay"
    },
    {
        "id": "ap-ace-exterior-ultra",
        "serial": "2.04",
        "name": "ACE Exterior Emulsion Ultra",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "4 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 55.0,
            "max": 65.0,
            "avg": 60.0
        },
        "coverage2Coats": {
            "min": 110.0,
            "max": 130.0,
            "avg": 120.0
        },
        "description": "Silicon Additives for Superior Water Repellency"
    },
    {
        "id": "ap-ace-shyne",
        "serial": "2.05",
        "name": "ACE Shyne",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "4 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 60.0,
            "max": 70.0,
            "avg": 65.0
        },
        "coverage2Coats": {
            "min": 120.0,
            "max": 140.0,
            "avg": 130.0
        },
        "description": "Glossy Sheen with Anti-Algal Outdoor Protection"
    },
    {
        "id": "ap-apex-dustproof",
        "serial": "2.06",
        "name": "Apex Dustproof",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "6 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 60.0,
            "max": 70.0,
            "avg": 65.0
        },
        "coverage2Coats": {
            "min": 120.0,
            "max": 140.0,
            "avg": 130.0
        },
        "description": "Dust Pick-Up Resistance (DPUR) & Anti-Algal Tech"
    },
    {
        "id": "ap-apex-dustproof-ultra",
        "serial": "2.07",
        "name": "Apex Dustproof Ultra",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "6 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 60.0,
            "max": 70.0,
            "avg": 65.0
        },
        "coverage2Coats": {
            "min": 120.0,
            "max": 140.0,
            "avg": 130.0
        },
        "description": "Advanced DPUR with Bio-Block Algal Defense"
    },
    {
        "id": "ap-apex-dustproof-shyne",
        "serial": "2.08",
        "name": "Apex Dustproof Shyne",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "6 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 65.0,
            "max": 75.0,
            "avg": 70.0
        },
        "coverage2Coats": {
            "min": 125.0,
            "max": 145.0,
            "avg": 135.0
        },
        "description": "Dust Resistance Combined with Rich Exterior Sheen"
    },
    {
        "id": "ap-apex-ultima",
        "serial": "2.09",
        "name": "Apex Ultima",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "8 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L, 200ml",
        "coverage1Coat": {
            "min": 75.0,
            "max": 85.0,
            "avg": 80.0
        },
        "coverage2Coats": {
            "min": 150.0,
            "max": 170.0,
            "avg": 160.0
        },
        "description": "High Performance Colour Stay & Anti-Algal Formula"
    },
    {
        "id": "ap-apex-ultima-protek",
        "serial": "2.10",
        "name": "Apex Ultima Protek",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "12 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 70.0,
            "max": 80.0,
            "avg": 75.0
        },
        "coverage2Coats": {
            "min": 140.0,
            "max": 160.0,
            "avg": 150.0
        },
        "description": "Laminated Waterproofing System with Fibre Reinforcement"
    },
    {
        "id": "ap-apex-ultima-protek-duralife",
        "serial": "2.11",
        "name": "Apex Ultima Protek Duralife",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "2. Exterior Emulsions",
        "type": "Exterior Emulsions",
        "surface": "exterior",
        "segment": "15 Years Warranty",
        "unit": "Litres",
        "packs": "20L, 10L, 4L",
        "coverage1Coat": {
            "min": 60.0,
            "max": 70.0,
            "avg": 65.0
        },
        "coverage2Coats": {
            "min": 120.0,
            "max": 140.0,
            "avg": 130.0
        },
        "description": "Nano-Polymer Heavy Duty Exterior System with Crack Bridging"
    },
    {
        "id": "ap-trucare-sparc-interior",
        "serial": "3.01",
        "name": "TruCare Sparc Interior",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "3. Interior Primers",
        "type": "Interior Primers",
        "surface": "interior",
        "segment": "Superior Whiteness",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 100.0,
            "max": 120.0,
            "avg": 110.0
        },
        "coverage2Coats": {
            "min": 200.0,
            "max": 240.0,
            "avg": 220.0
        },
        "description": "Economy High Whiteness Water Thinnable Interior Primer"
    },
    {
        "id": "ap-trucare-interior",
        "serial": "3.02",
        "name": "TruCare Interior",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "3. Interior Primers",
        "type": "Interior Primers",
        "surface": "interior",
        "segment": "High Adhesion",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 110.0,
            "max": 125.0,
            "avg": 117.5
        },
        "coverage2Coats": {
            "min": 215.0,
            "max": 250.0,
            "avg": 232.5
        },
        "description": "Water-Thinnable Interior Primer with Strong Adhesion"
    },
    {
        "id": "ap-damp-sheath-interior",
        "serial": "3.03",
        "name": "Damp Sheath Interior",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "3. Interior Primers",
        "type": "Interior Primers",
        "surface": "interior",
        "segment": "Damp Protection",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 90.0,
            "max": 110.0,
            "avg": 100.0
        },
        "coverage2Coats": {
            "min": 180.0,
            "max": 210.0,
            "avg": 195.0
        },
        "description": "Anti-Damp Breathable Crystalline Primer Barrier"
    },
    {
        "id": "ap-trucare-sparc-exterior",
        "serial": "4.01",
        "name": "TruCare Sparc Exterior",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "4. Exterior Primers",
        "type": "Exterior Primers",
        "surface": "exterior",
        "segment": "Alkali Resistant",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 65.0,
            "max": 80.0,
            "avg": 72.5
        },
        "coverage2Coats": {
            "min": 130.0,
            "max": 160.0,
            "avg": 145.0
        },
        "description": "Economy Exterior Wall Primer with High Alkali Resistance"
    },
    {
        "id": "ap-trucare-exterior",
        "serial": "4.02",
        "name": "TruCare Exterior",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "4. Exterior Primers",
        "type": "Exterior Primers",
        "surface": "exterior",
        "segment": "Sealing Shield",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 70.0,
            "max": 85.0,
            "avg": 77.5
        },
        "coverage2Coats": {
            "min": 140.0,
            "max": 170.0,
            "avg": 155.0
        },
        "description": "Exterior Wall Primer with Superior Sealing Properties"
    },
    {
        "id": "ap-damp-sheath-exterior",
        "serial": "4.03",
        "name": "Damp Sheath Exterior",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "4. Exterior Primers",
        "type": "Exterior Primers",
        "surface": "exterior",
        "segment": "Anti-Efflorescence",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 60.0,
            "max": 75.0,
            "avg": 67.5
        },
        "coverage2Coats": {
            "min": 120.0,
            "max": 150.0,
            "avg": 135.0
        },
        "description": "Deep Penetrating Anti-Efflorescence Exterior Primer"
    },
    {
        "id": "ap-damp-proof",
        "serial": "4.04",
        "name": "Damp Proof",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "4. Exterior Primers",
        "type": "Exterior Primers",
        "surface": "exterior",
        "segment": "10 Years Waterproofing",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 10.0,
            "max": 15.0,
            "avg": 12.5
        },
        "coverage2Coats": {
            "min": 20.0,
            "max": 30.0,
            "avg": 25.0
        },
        "description": "Reinforced Elastomeric Terrace & Wall Waterproofing"
    },
    {
        "id": "ap-damp-proof-advanced",
        "serial": "4.05",
        "name": "Damp Proof Advanced",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "4. Exterior Primers",
        "type": "Exterior Primers",
        "surface": "exterior",
        "segment": "10 Years Waterproofing",
        "unit": "Litres",
        "packs": "20L",
        "coverage1Coat": {
            "min": 10.0,
            "max": 12.0,
            "avg": 11.0
        },
        "coverage2Coats": {
            "min": 20.0,
            "max": 25.0,
            "avg": 22.5
        },
        "description": "Fiber-Reinforced Hydrostatic Waterproof Membrane"
    },
    {
        "id": "ap-trucare-acrylic-putty",
        "serial": "5.01",
        "name": "TruCare Acrylic Wall Putty",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "5. Putty",
        "type": "Putty",
        "surface": "both",
        "segment": "Glass Finish Putty",
        "unit": "Kg",
        "packs": "20 KG, 10 KG, 5 KG, 1 KG",
        "coverage1Coat": {
            "min": 15.0,
            "max": 18.0,
            "avg": 16.5
        },
        "coverage2Coats": {
            "min": 30.0,
            "max": 35.0,
            "avg": 32.5
        },
        "description": "Ready-to-Use Paste for Ultra-Smooth Glass Finish"
    },
    {
        "id": "ap-trucare-wall-putty",
        "serial": "5.02",
        "name": "TruCare Wall Putty",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "5. Putty",
        "type": "Putty",
        "surface": "both",
        "segment": "Cement Base",
        "unit": "Kg",
        "packs": "40 KG",
        "coverage1Coat": {
            "min": 9.0,
            "max": 11.0,
            "avg": 10.0
        },
        "coverage2Coats": {
            "min": 17.0,
            "max": 22.0,
            "avg": 19.5
        },
        "description": "White Cement-Based Wall Putty for Superior Adhesion"
    },
    {
        "id": "ap-smartcare-waterproof-putty",
        "serial": "5.03",
        "name": "SmartCare Waterproof Wall Putty",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "5. Putty",
        "type": "Putty",
        "surface": "both",
        "segment": "Waterproof Putty",
        "unit": "Kg",
        "packs": "40 KG",
        "coverage1Coat": {
            "min": 9.0,
            "max": 11.0,
            "avg": 10.0
        },
        "coverage2Coats": {
            "min": 17.0,
            "max": 22.0,
            "avg": 19.5
        },
        "description": "Hydrophobic Polymer Silicon Formula Resisting Efflorescence"
    },
    {
        "id": "ap-royale-play-metallics",
        "serial": "6.01",
        "name": "Royale Play Metallics",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "6. Texture & Glitters",
        "type": "Texture & Glitters",
        "surface": "both",
        "segment": "Designer Finish",
        "unit": "Litres",
        "packs": "1L, 200ml",
        "coverage1Coat": {
            "min": 50.0,
            "max": 70.0,
            "avg": 60.0
        },
        "coverage2Coats": {
            "min": 100.0,
            "max": 140.0,
            "avg": 120.0
        },
        "description": "Metallic Glaze Special Effects for Designer Feature Walls"
    },
    {
        "id": "ap-royale-play",
        "serial": "6.02",
        "name": "Royale Play",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "6. Texture & Glitters",
        "type": "Texture & Glitters",
        "surface": "both",
        "segment": "Designer Finish",
        "unit": "Litres",
        "packs": "1L, 200ml",
        "coverage1Coat": {
            "min": 40.0,
            "max": 60.0,
            "avg": 50.0
        },
        "coverage2Coats": {
            "min": 80.0,
            "max": 120.0,
            "avg": 100.0
        },
        "description": "Water-Based Special Effects Texture for Feature Accent Walls"
    },
    {
        "id": "ap-apcolite-premium-enamel-gloss",
        "serial": "7.01",
        "name": "Apcolite Premium Enamel Gloss",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "7. Enamels",
        "type": "Enamels",
        "surface": "both",
        "segment": "Long Lasting Gloss",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L, 500ml, 200ml",
        "coverage1Coat": {
            "min": 100.0,
            "max": 120.0,
            "avg": 110.0
        },
        "coverage2Coats": {
            "min": 200.0,
            "max": 240.0,
            "avg": 220.0
        },
        "description": "High Gloss Mirror-Like Finish for Wood & Metal Surfaces"
    },
    {
        "id": "ap-apcolite-rust-shield-pu-enamel",
        "serial": "7.02",
        "name": "Apcolite Rust Shield PU Enamel",
        "brand": "Asian Paints",
        "brandId": "asian-paints",
        "categoryGroup": "7. Enamels",
        "type": "Enamels",
        "surface": "both",
        "segment": "PU Anti-Rust",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L, 500ml, 200ml",
        "coverage1Coat": {
            "min": 90.0,
            "max": 110.0,
            "avg": 100.0
        },
        "coverage2Coats": {
            "min": 180.0,
            "max": 220.0,
            "avg": 200.0
        },
        "description": "Anti-Rust PU Enamel with Direct-to-Metal Protection"
    },
    {
        "id": "kn-beauty-little-master",
        "serial": "N1.01",
        "name": "Beauty Little Master",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Interior",
        "type": "Nerolac - Interior",
        "surface": "interior",
        "segment": "Economy Upgrade",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 100.0,
            "max": 120.0,
            "avg": 110.0
        },
        "coverage2Coats": {
            "min": 200.0,
            "max": 240.0,
            "avg": 220.0
        },
        "description": "Value Emulsion with Rich Matt & Anti-Bacterial Shield"
    },
    {
        "id": "kn-beauty-smooth",
        "serial": "N1.02",
        "name": "Beauty Smooth Emulsion",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Interior",
        "type": "Nerolac - Interior",
        "surface": "interior",
        "segment": "Smooth Matt",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 105.0,
            "max": 120.0,
            "avg": 112.5
        },
        "coverage2Coats": {
            "min": 210.0,
            "max": 240.0,
            "avg": 225.0
        },
        "description": "Smooth Interior Finish with Higher Hiding & Brightness"
    },
    {
        "id": "kn-beauty-smooth-shyne",
        "serial": "N1.03",
        "name": "Beauty Smooth Shyne",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Interior",
        "type": "Nerolac - Interior",
        "surface": "interior",
        "segment": "Sheen Upgrade",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 110.0,
            "max": 125.0,
            "avg": 117.5
        },
        "coverage2Coats": {
            "min": 220.0,
            "max": 250.0,
            "avg": 235.0
        },
        "description": "Glossy Sheen Emulsion with Excellent Stain Washability"
    },
    {
        "id": "kn-beauty-gold-classic",
        "serial": "N1.04",
        "name": "Beauty Gold Classic",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Interior",
        "type": "Nerolac - Interior",
        "surface": "interior",
        "segment": "Classic Gold",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 120.0,
            "max": 140.0,
            "avg": 130.0
        },
        "coverage2Coats": {
            "min": 240.0,
            "max": 280.0,
            "avg": 260.0
        },
        "description": "Classic Soft Sheen Emulsion with High Washability"
    },
    {
        "id": "kn-beauty-gold-washable",
        "serial": "N1.05",
        "name": "Beauty Gold Washable",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Interior",
        "type": "Nerolac - Interior",
        "surface": "interior",
        "segment": "Washable Gold",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 135.0,
            "max": 150.0,
            "avg": 142.5
        },
        "coverage2Coats": {
            "min": 260.0,
            "max": 300.0,
            "avg": 280.0
        },
        "description": "Superior Washable Premium Emulsion with Stain Resistance"
    },
    {
        "id": "kn-impression-hd",
        "serial": "N1.06",
        "name": "Impression HD",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Interior",
        "type": "Nerolac - Interior",
        "surface": "interior",
        "segment": "Ultra Luxury",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 140.0,
            "max": 160.0,
            "avg": 150.0
        },
        "coverage2Coats": {
            "min": 280.0,
            "max": 320.0,
            "avg": 300.0
        },
        "description": "Ultra Luxury High-Definition Silk Sheen Emulsion"
    },
    {
        "id": "kn-impression-kashmir",
        "serial": "N1.07",
        "name": "Impression Kashmir",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Interior",
        "type": "Nerolac - Interior",
        "surface": "interior",
        "segment": "Kashmir Luxury",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 140.0,
            "max": 160.0,
            "avg": 150.0
        },
        "coverage2Coats": {
            "min": 280.0,
            "max": 320.0,
            "avg": 300.0
        },
        "description": "Matte Luxury Architectural Silk Finish with Micro-Air Purification"
    },
    {
        "id": "kn-suraksha",
        "serial": "N2.01",
        "name": "Suraksha",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Exterior",
        "type": "Nerolac - Exterior",
        "surface": "exterior",
        "segment": "Weather Protection",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 50.0,
            "max": 60.0,
            "avg": 55.0
        },
        "coverage2Coats": {
            "min": 100.0,
            "max": 120.0,
            "avg": 110.0
        },
        "description": "Weatherproof Exterior Emulsion with Anti-Algal Protection"
    },
    {
        "id": "kn-suraksha-plus",
        "serial": "N2.02",
        "name": "Suraksha Plus",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Exterior",
        "type": "Nerolac - Exterior",
        "surface": "exterior",
        "segment": "Clean Shield",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 55.0,
            "max": 65.0,
            "avg": 60.0
        },
        "coverage2Coats": {
            "min": 110.0,
            "max": 130.0,
            "avg": 120.0
        },
        "description": "Enhanced Anti-Fungal Exterior Coat with Clean Shield"
    },
    {
        "id": "kn-excel",
        "serial": "N2.03",
        "name": "Excel",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Exterior",
        "type": "Nerolac - Exterior",
        "surface": "exterior",
        "segment": "Long Life",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 65.0,
            "max": 75.0,
            "avg": 70.0
        },
        "coverage2Coats": {
            "min": 130.0,
            "max": 150.0,
            "avg": 140.0
        },
        "description": "All-Weather Long Life Acrylic Exterior Emulsion"
    },
    {
        "id": "kn-excel-total",
        "serial": "N2.04",
        "name": "Excel Total",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Exterior",
        "type": "Nerolac - Exterior",
        "surface": "exterior",
        "segment": "Heat Guard Defense",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 75.0,
            "max": 85.0,
            "avg": 80.0
        },
        "coverage2Coats": {
            "min": 150.0,
            "max": 170.0,
            "avg": 160.0
        },
        "description": "Total Weather Defense with Heat Guard & Dirt Pick-up Resistance"
    },
    {
        "id": "kn-excel-mica-marble",
        "serial": "N2.05",
        "name": "Excel Mica Marble Stretch & Sheen",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Exterior",
        "type": "Nerolac - Exterior",
        "surface": "exterior",
        "segment": "Mica Marble Stretch",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 60.0,
            "max": 70.0,
            "avg": 65.0
        },
        "coverage2Coats": {
            "min": 120.0,
            "max": 140.0,
            "avg": 130.0
        },
        "description": "Elastomeric Stretch & Sheen with Crushed Mica Marble Barrier"
    },
    {
        "id": "kn-popular-primer",
        "serial": "N3.01",
        "name": "Popular Primer",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Primers",
        "type": "Nerolac - Primers",
        "surface": "interior",
        "segment": "Undercoat Barrier",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 105.0,
            "max": 125.0,
            "avg": 115.0
        },
        "coverage2Coats": {
            "min": 210.0,
            "max": 250.0,
            "avg": 230.0
        },
        "description": "High-Adhesion Water-Based Interior Undercoat"
    },
    {
        "id": "kn-exterior-primer",
        "serial": "N3.02",
        "name": "Exterior Primer",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Primers",
        "type": "Nerolac - Primers",
        "surface": "exterior",
        "segment": "Alkali Defense",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 70.0,
            "max": 80.0,
            "avg": 75.0
        },
        "coverage2Coats": {
            "min": 140.0,
            "max": 160.0,
            "avg": 150.0
        },
        "description": "Alkali-Resistant Exterior Masonry Primer"
    },
    {
        "id": "kn-no-damp",
        "serial": "N3.03",
        "name": "No Damp",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Primers",
        "type": "Nerolac - Primers",
        "surface": "exterior",
        "segment": "Waterproof Barrier",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L",
        "coverage1Coat": {
            "min": 15.0,
            "max": 20.0,
            "avg": 17.5
        },
        "coverage2Coats": {
            "min": 30.0,
            "max": 40.0,
            "avg": 35.0
        },
        "description": "Elastomeric Waterproof Dampproof Barrier for Walls & Slabs"
    },
    {
        "id": "kn-synthetic-enamel",
        "serial": "N4.01",
        "name": "Synthetic Enamel",
        "brand": "Kansai Nerolac",
        "brandId": "kansai-nerolac",
        "categoryGroup": "Nerolac - Enamel",
        "type": "Nerolac - Enamel",
        "surface": "both",
        "segment": "High Gloss Shield",
        "unit": "Litres",
        "packs": "20L, 10L, 4L, 1L, 500ml, 200ml",
        "coverage1Coat": {
            "min": 100.0,
            "max": 120.0,
            "avg": 110.0
        },
        "coverage2Coats": {
            "min": 200.0,
            "max": 240.0,
            "avg": 220.0
        },
        "description": "High Gloss Protective Enamel for Wood & Metal Structures"
    }
],

  /**
   * Parse pack size string into descending numerical array
   */
  parsePackSizes: function (packsStr, isPutty) {
    if (!packsStr || typeof packsStr !== 'string') return isPutty ? [40, 20, 5, 1] : [20, 10, 4, 1];
    const tokens = packsStr.split(/[,/|]+/).map(s => s.trim().toLowerCase());
    const sizes = [];
    tokens.forEach(tok => {
      if (tok.includes('200ml') || tok.includes('200 ml')) {
        sizes.push(0.2);
      } else if (tok.includes('500ml') || tok.includes('500 ml')) {
        sizes.push(0.5);
      } else {
        const num = parseFloat(tok);
        if (!isNaN(num) && num > 0) {
          sizes.push(num);
        }
      }
    });
    const unique = [...new Set(sizes)].sort((a, b) => b - a);
    return unique.length > 0 ? unique : (isPutty ? [40, 20, 5, 1] : [20, 10, 4, 1]);
  },

  /**
   * Helper to parse coverage object or string safely
   */
  parseCoverageObj: function (cov) {
    if (cov && typeof cov === 'object' && cov.min !== undefined) return cov;
    if (typeof cov === 'string') {
      const nums = cov.match(/[\d.]+/g);
      if (nums && nums.length >= 2) {
        const mn = parseFloat(nums[0]), mx = parseFloat(nums[1]);
        return { min: mn, max: mx, avg: (mn + mx) / 2 };
      } else if (nums && nums.length === 1) {
        const val = parseFloat(nums[0]);
        return { min: val, max: val, avg: val };
      }
    }
    return { min: 100, max: 120, avg: 110 };
  },

  /**
   * Calculate paint quantity and can packaging breakdown for area & coats.
   * Coverage rule:
   * - 1 coat: min 1-coat coverage
   * - 2 coats: avg(min 1-coat coverage, min 2-coat coverage)
   */
  calculate: function (productId, areaSqFt, coats = 2) {
    const product = this.PRODUCTS.find(p => p.id === productId) ||
      (typeof window !== 'undefined' && window.VasuData && window.VasuData.STORE_PRODUCTS && window.VasuData.STORE_PRODUCTS.find(p => p.id === productId)) ||
      this.PRODUCTS[0];
    if (!product || !areaSqFt || areaSqFt <= 0) return null;

    const numCoats = Math.max(1, Number(coats) || 2);
    const cov1 = this.parseCoverageObj(product.coverage1Coat);
    const cov2 = this.parseCoverageObj(product.coverage2Coats);
    const min1 = cov1.min;
    const min2 = cov2.min;

    let coveragePerLtr;
    if (numCoats === 1) {
      coveragePerLtr = min1;
    } else if (numCoats === 2) {
      coveragePerLtr = (min1 + min2) / 2;
    } else {
      coveragePerLtr = (min1 + min2) / 2;
    }

    const exactQty = (areaSqFt * numCoats) / coveragePerLtr;
    const roundedQty = Math.round(exactQty * 10) / 10;

    const isPutty = product.unit === 'Kg';
    const standardPacks = this.parsePackSizes(product.packs, isPutty);
    const breakdown = [];
    let remaining = Math.round(roundedQty * 100) / 100;

    for (let pack of standardPacks) {
      if (remaining >= pack - 0.01) {
        const count = Math.floor(Math.round(remaining * 100) / Math.round(pack * 100));
        if (count > 0) {
          breakdown.push({ size: pack, count: count, unit: product.unit || (isPutty ? 'Kg' : 'Litres') });
          remaining = Math.round((remaining - count * pack) * 100) / 100;
        }
      }
    }
    if (remaining > 0.05) {
      const smallest = standardPacks[standardPacks.length - 1];
      const last = breakdown[breakdown.length - 1];
      if (last && Math.abs(last.size - smallest) < 0.01) {
        last.count += 1;
      } else {
        breakdown.push({ size: smallest, count: 1, unit: product.unit || (isPutty ? 'Kg' : 'Litres') });
      }
    }

    let primerRecommendation = null;
    let puttyRecommendation = null;

    if (product.surface === 'interior' && !product.id.includes('primer') && !product.id.includes('putty')) {
      const primerCoverage = 300;
      const primerLitres = Math.ceil((areaSqFt / primerCoverage) * 10) / 10;
      primerRecommendation = {
        name: 'Interior Wall Primer (Water-Based)',
        qty: primerLitres,
        unit: 'Litres'
      };

      const puttyCoverage = 10;
      const puttyKg = Math.ceil(areaSqFt / puttyCoverage);
      puttyRecommendation = {
        name: 'Wall Care Putty (2 Coats)',
        qty: puttyKg,
        unit: 'Kg'
      };
    } else if (product.surface === 'exterior' && !product.id.includes('primer') && !product.id.includes('putty')) {
      const primerCoverage = 155;
      const primerLitres = Math.ceil((areaSqFt / primerCoverage) * 10) / 10;
      primerRecommendation = {
        name: 'Exterior Wall Primer (Water-Based)',
        qty: primerLitres,
        unit: 'Litres'
      };
    }

    return {
      product: product,
      areaSqFt: areaSqFt,
      coats: numCoats,
      coverageRange: `${cov1.min} - ${cov1.max} Sq. Ft. / ${product.unit} (1 Coat) | ${cov2.min} - ${cov2.max} Sq. Ft. / ${product.unit} (2 Coats)`,
      coveragePerLtr: coveragePerLtr,
      exactQty: Math.round(exactQty * 100) / 100,
      roundedQty: roundedQty,
      packs: breakdown,
      primer: primerRecommendation,
      putty: puttyRecommendation
    };
  },

  /**
   * Calculate room paint quantity:
   * 1. Wall Area = Perimeter * H - Area of Openings
   * 2. Ceiling Area = L * W
   * 3. Coverage per Ltr:
   *    - 1 coat: min 1-coat coverage
   *    - 2 coats: avg(min 1-coat coverage, min 2-coat coverage)
   * 4. Wall Qty in Litres = (Wall Area * Coats) / Coverage per Ltr (rounded)
   *    Ceiling Qty in Litres = (Ceiling Area * Coats) / Coverage per Ltr (rounded)
   */
  calculateRoomPaint: function (params = {}) {
    const {
      lengthFt = 0,
      widthFt = 0,
      heightFt = 0,
      doorsCount = 0,
      doorWidthFt = 0,
      doorHeightFt = 0,
      windowsCount = 0,
      windowWidthFt = 0,
      windowHeightFt = 0,
      includeCeiling = true,
      productId = 'ap-royale-luxury',
      coats = 2,
      contingencyPercent = 10
    } = params;

    const L = Math.max(0, Number(lengthFt) || 0);
    const W = Math.max(0, Number(widthFt) || 0);
    const H = Math.max(0, Number(heightFt) || 0);
    const dCount = Math.max(0, Number(doorsCount) || 0);
    const dWidth = Math.max(0, Number(doorWidthFt) || 0);
    const dHeight = Math.max(0, Number(doorHeightFt) || 0);
    const wCount = Math.max(0, Number(windowsCount) || 0);
    const wWidth = Math.max(0, Number(windowWidthFt) || 0);
    const wHeight = Math.max(0, Number(windowHeightFt) || 0);
    const isCeiling = Boolean(includeCeiling);
    const contPct = Number(contingencyPercent) >= 0 ? Number(contingencyPercent) : 10;
    const numCoats = Math.max(1, Number(coats) || 2);

    // 1. Perimeter = 2 * (L + W)
    const perimeter = 2 * (L + W);

    // Gross Wall Area = Perimeter * H
    const grossWallArea = perimeter * H;

    // 2. Area of Openings = Area of doors + Area of windows
    const doorsArea = Math.round(dCount * (dWidth * dHeight) * 100) / 100;
    const windowsArea = Math.round(wCount * (wWidth * wHeight) * 100) / 100;
    const openingsArea = Math.round((doorsArea + windowsArea) * 100) / 100;

    // 3. Wall Area = (Perimeter * H) - Area of Openings
    const netWallArea = Math.max(0, Math.round((grossWallArea - openingsArea) * 100) / 100);

    // 4. Ceiling Area = L * W
    const ceilingArea = isCeiling ? Math.round((L * W) * 100) / 100 : 0;
    const totalPaintArea = Math.round((netWallArea + ceilingArea) * 100) / 100;

    // Product & Coverage
    const product = this.PRODUCTS.find(p => p.id === productId) ||
      (typeof window !== 'undefined' && window.VasuData && window.VasuData.STORE_PRODUCTS && window.VasuData.STORE_PRODUCTS.find(p => p.id === productId)) ||
      this.PRODUCTS[0];
    const isPutty = product.unit === 'Kg';

    // Parse coverage
    const cov1 = this.parseCoverageObj(product.coverage1Coat);
    const cov2 = this.parseCoverageObj(product.coverage2Coats);
    const min1 = cov1.min;
    const min2 = cov2.min;

    // Coverage per litre based on coats:
    // If user chooses 1 coat -> min 1-coat coverage
    // If user chooses 2 coats -> avg(min 1-coat, min 2-coat)
    let coveragePerLtr;
    if (numCoats === 1) {
      coveragePerLtr = min1;
    } else if (numCoats === 2) {
      coveragePerLtr = (min1 + min2) / 2;
    } else {
      coveragePerLtr = (min1 + min2) / 2;
    }

    // 5. Paint Quantity Calculation:
    // qty in ltrs = (wall area * no of coats) / coverage per ltr
    const rawWallQty = (netWallArea * numCoats) / coveragePerLtr;
    const wallQty = Math.round(rawWallQty * 10) / 10; // approx round off value

    // ceiling qty in ltrs = (ceiling area * no of coats) / coverage per ltr
    const rawCeilingQty = isCeiling ? ((ceilingArea * numCoats) / coveragePerLtr) : 0;
    const ceilingQty = Math.round(rawCeilingQty * 10) / 10; // approx round off value

    // Combined base quantity
    const rawBaseTotal = rawWallQty + rawCeilingQty;
    const baseQty = Math.round(rawBaseTotal * 10) / 10;

    // Contingency
    const contingencyFactor = contPct / 100;
    const rawContingencyQty = rawBaseTotal * contingencyFactor;
    const contingencyQty = Math.round(rawContingencyQty * 10) / 10;

    // Total required quantity
    const rawFinalTotal = rawBaseTotal + rawContingencyQty;
    const totalRequiredQty = Math.round(rawFinalTotal * 10) / 10;

    // Packaging Breakdown
    const standardPacks = this.parsePackSizes(product.packs, isPutty);
    const breakdown = [];
    let remaining = Math.round(totalRequiredQty * 100) / 100;

    for (let pack of standardPacks) {
      if (remaining >= pack - 0.01) {
        const count = Math.floor(Math.round(remaining * 100) / Math.round(pack * 100));
        if (count > 0) {
          breakdown.push({ size: pack, count: count, unit: product.unit || (isPutty ? 'Kg' : 'Litres') });
          remaining = Math.round((remaining - count * pack) * 100) / 100;
        }
      }
    }
    if (remaining > 0.05) {
      const smallest = standardPacks[standardPacks.length - 1];
      const last = breakdown[breakdown.length - 1];
      if (last && Math.abs(last.size - smallest) < 0.01) {
        last.count += 1;
      } else {
        breakdown.push({ size: smallest, count: 1, unit: product.unit || (isPutty ? 'Kg' : 'Litres') });
      }
    }

    // Primer & Putty Requirements
    let primerRecommendation = null;
    let puttyRecommendation = null;

    if (!product.id.includes('primer') && !product.id.includes('putty')) {
      const primerCov = (product.surface === 'exterior') ? 155 : 300;
      const primerLitres = Math.ceil(((totalPaintArea / primerCov) * (1 + contingencyFactor)) * 10) / 10;
      primerRecommendation = {
        name: (product.surface === 'exterior') ? 'Exterior Wall Primer (Water-Based)' : 'Interior Wall Primer (Water-Based)',
        qty: primerLitres,
        unit: 'Litres'
      };

      const puttyCov = 10;
      const puttyKg = Math.ceil((totalPaintArea / puttyCov) * (1 + contingencyFactor));
      puttyRecommendation = {
        name: 'Wall Care Putty (2 Coats)',
        qty: puttyKg,
        unit: 'Kg'
      };
    }

    return {
      inputs: {
        L,
        W,
        H,
        dCount,
        dWidth,
        dHeight,
        wCount,
        wWidth,
        wHeight,
        isCeiling,
        numCoats,
        contPct
      },
      steps: {
        perimeter,
        grossWallArea,
        doorsArea,
        windowsArea,
        openingsArea,
        netWallArea,
        ceilingArea,
        totalPaintArea
      },
      product,
      coveragePerLtr,
      coverageRange: `${cov1.min} - ${cov1.max} Sq. Ft. / ${product.unit} (1 Coat) | ${cov2.min} - ${cov2.max} Sq. Ft. / ${product.unit} (2 Coats)`,
      rawWallQty: Math.round(rawWallQty * 100) / 100,
      wallQty,
      rawCeilingQty: Math.round(rawCeilingQty * 100) / 100,
      ceilingQty,
      baseQty,
      contingencyPercent: contPct,
      contingencyQty,
      totalRequiredQty,
      packs: breakdown,
      primer: primerRecommendation,
      putty: puttyRecommendation
    };
  }
};

if (typeof window !== 'undefined') window.VasuPaintData = VasuPaintData;
if (typeof module !== 'undefined') module.exports = VasuPaintData;
