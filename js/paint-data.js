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
            "packs": "20Kg, 10Kg, 5Kg, 2Kg, 1Kg",
            "coverage1Coat": {
                "min": 105,
                "max": 120,
                "avg": 112.5
            },
            "coverage2Coats": {
                "min": 210,
                "max": 240,
                "avg": 225
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
                "min": 110,
                "max": 130,
                "avg": 120
            },
            "coverage2Coats": {
                "min": 220,
                "max": 260,
                "avg": 240
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
                "min": 110,
                "max": 130,
                "avg": 120
            },
            "coverage2Coats": {
                "min": 220,
                "max": 260,
                "avg": 240
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
                "min": 120,
                "max": 140,
                "avg": 130
            },
            "coverage2Coats": {
                "min": 240,
                "max": 280,
                "avg": 260
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
                "min": 120,
                "max": 140,
                "avg": 130
            },
            "coverage2Coats": {
                "min": 240,
                "max": 280,
                "avg": 260
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
                "min": 125,
                "max": 145,
                "avg": 135
            },
            "coverage2Coats": {
                "min": 250,
                "max": 290,
                "avg": 270
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
                "min": 130,
                "max": 150,
                "avg": 140
            },
            "coverage2Coats": {
                "min": 260,
                "max": 300,
                "avg": 280
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
                "min": 130,
                "max": 150,
                "avg": 140
            },
            "coverage2Coats": {
                "min": 260,
                "max": 300,
                "avg": 280
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
                "min": 135,
                "max": 155,
                "avg": 145
            },
            "coverage2Coats": {
                "min": 270,
                "max": 310,
                "avg": 290
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
                "min": 135,
                "max": 155,
                "avg": 145
            },
            "coverage2Coats": {
                "min": 270,
                "max": 310,
                "avg": 290
            },
            "description": "Lotus Effect™ Tech + Flame Retardancy* Shyne Finish"
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
                "min": 140,
                "max": 160,
                "avg": 150
            },
            "coverage2Coats": {
                "min": 280,
                "max": 320,
                "avg": 300
            },
            "description": "Teflon™ Surface Protector with Luxury Silk Sheen"
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
                "min": 140,
                "max": 160,
                "avg": 150
            },
            "coverage2Coats": {
                "min": 280,
                "max": 320,
                "avg": 300
            },
            "description": "Teflon™ Enhanced High Gloss Luxury Finish"
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
                "min": 145,
                "max": 165,
                "avg": 155
            },
            "coverage2Coats": {
                "min": 290,
                "max": 330,
                "avg": 310
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
            "packs": "20Kg, 10Kg, 5Kg, 2Kg, 1Kg",
            "coverage1Coat": {
                "min": 50,
                "max": 60,
                "avg": 55
            },
            "coverage2Coats": {
                "min": 100,
                "max": 120,
                "avg": 110
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
                "min": 55,
                "max": 65,
                "avg": 60
            },
            "coverage2Coats": {
                "min": 110,
                "max": 130,
                "avg": 120
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
                "min": 55,
                "max": 65,
                "avg": 60
            },
            "coverage2Coats": {
                "min": 110,
                "max": 130,
                "avg": 120
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
                "min": 55,
                "max": 65,
                "avg": 60
            },
            "coverage2Coats": {
                "min": 110,
                "max": 130,
                "avg": 120
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
                "min": 60,
                "max": 70,
                "avg": 65
            },
            "coverage2Coats": {
                "min": 120,
                "max": 140,
                "avg": 130
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
                "min": 60,
                "max": 70,
                "avg": 65
            },
            "coverage2Coats": {
                "min": 120,
                "max": 140,
                "avg": 130
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
                "min": 60,
                "max": 70,
                "avg": 65
            },
            "coverage2Coats": {
                "min": 120,
                "max": 140,
                "avg": 130
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
                "min": 65,
                "max": 75,
                "avg": 70
            },
            "coverage2Coats": {
                "min": 125,
                "max": 145,
                "avg": 135
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
                "min": 75,
                "max": 85,
                "avg": 80
            },
            "coverage2Coats": {
                "min": 150,
                "max": 170,
                "avg": 160
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
                "min": 70,
                "max": 80,
                "avg": 75
            },
            "coverage2Coats": {
                "min": 140,
                "max": 160,
                "avg": 150
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
                "min": 60,
                "max": 70,
                "avg": 65
            },
            "coverage2Coats": {
                "min": 120,
                "max": 140,
                "avg": 130
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
                "min": 100,
                "max": 120,
                "avg": 110
            },
            "coverage2Coats": {
                "min": 200,
                "max": 240,
                "avg": 220
            },
            "description": "Economy High Whiteness Water Thinnable Interior Primer"
        },
        {
            "id": "ap-trucare-sparc-ultraa-interior",
            "serial": "3.02",
            "name": "TruCare Sparc Ultraa Interior Wall Primer",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "3. Interior Primers",
            "type": "Interior Primers",
            "surface": "interior",
            "segment": "Up to 4 Years Warranty With Top Coats",
            "unit": "Litres",
            "packs": "20L, 10L, 4L, 1L",
            "coverage1Coat": {
                "min": 105,
                "max": 125,
                "avg": 115
            },
            "coverage2Coats": {
                "min": 210,
                "max": 240,
                "avg": 225
            },
            "description": "Water Thinnable Superior Top Coat Adhesion & Good Whiteness"
        },
        {
            "id": "ap-trucare-interior",
            "serial": "3.03",
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
                "min": 110,
                "max": 125,
                "avg": 117.5
            },
            "coverage2Coats": {
                "min": 215,
                "max": 250,
                "avg": 232.5
            },
            "description": "Water-Thinnable Interior Primer with Strong Adhesion"
        },
        {
            "id": "ap-damp-sheath-interior",
            "serial": "3.04",
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
                "min": 90,
                "max": 110,
                "avg": 100
            },
            "coverage2Coats": {
                "min": 180,
                "max": 210,
                "avg": 195
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
                "min": 65,
                "max": 80,
                "avg": 72.5
            },
            "coverage2Coats": {
                "min": 130,
                "max": 160,
                "avg": 145
            },
            "description": "Economy Exterior Wall Primer with High Alkali Resistance"
        },
        {
            "id": "ap-trucare-sparc-ultraa-exterior",
            "serial": "4.02",
            "name": "TruCare Sparc Ultraa Exterior Wall Primer",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "4. Exterior Primers",
            "type": "Exterior Primers",
            "surface": "exterior",
            "segment": "Ultraa Exterior Protection",
            "unit": "Litres",
            "packs": "20L, 10L, 4L, 1L",
            "coverage1Coat": {
                "min": 90,
                "max": 110,
                "avg": 100
            },
            "coverage2Coats": {
                "min": 180,
                "max": 210,
                "avg": 195
            },
            "description": "Water Thinnable Exterior Wall Primer with High Opacity & Resistance"
        },
        {
            "id": "ap-trucare-exterior",
            "serial": "4.03",
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
                "min": 70,
                "max": 85,
                "avg": 77.5
            },
            "coverage2Coats": {
                "min": 140,
                "max": 170,
                "avg": 155
            },
            "description": "Exterior Wall Primer with Superior Sealing Properties"
        },
        {
            "id": "ap-damp-sheath-exterior",
            "serial": "4.04",
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
                "min": 60,
                "max": 75,
                "avg": 67.5
            },
            "coverage2Coats": {
                "min": 120,
                "max": 150,
                "avg": 135
            },
            "description": "Deep Penetrating Anti-Efflorescence Exterior Primer"
        },
        {
            "id": "ap-smartcare-damp-sheath-exterior-advanced",
            "serial": "4.05",
            "name": "SmartCare Damp Sheath Exterior Advanced",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "4. Exterior Primers",
            "type": "Exterior Primers",
            "surface": "exterior",
            "segment": "5 Years Waterproofing Warranty",
            "unit": "Litres",
            "packs": "20L, 10L, 4L, 1L",
            "coverage1Coat": {
                "min": 95,
                "max": 115,
                "avg": 105
            },
            "coverage2Coats": {
                "min": 190,
                "max": 220,
                "avg": 205
            },
            "description": "Waterproofing Primer with Moisture Lock & Crack-Bridging Film"
        },
        {
            "id": "ap-damp-proof",
            "serial": "4.06",
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
                "min": 10,
                "max": 15,
                "avg": 12.5
            },
            "coverage2Coats": {
                "min": 20,
                "max": 30,
                "avg": 25
            },
            "description": "Reinforced Elastomeric Terrace & Wall Waterproofing"
        },
        {
            "id": "ap-damp-proof-advanced",
            "serial": "4.07",
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
                "min": 10,
                "max": 12,
                "avg": 11
            },
            "coverage2Coats": {
                "min": 20,
                "max": 25,
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
                "min": 15,
                "max": 18,
                "avg": 16.5
            },
            "coverage2Coats": {
                "min": 30,
                "max": 35,
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
                "min": 9,
                "max": 11,
                "avg": 10
            },
            "coverage2Coats": {
                "min": 17,
                "max": 22,
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
                "min": 9,
                "max": 11,
                "avg": 10
            },
            "coverage2Coats": {
                "min": 17,
                "max": 22,
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
                "min": 50,
                "max": 70,
                "avg": 60
            },
            "coverage2Coats": {
                "min": 100,
                "max": 140,
                "avg": 120
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
                "min": 40,
                "max": 60,
                "avg": 50
            },
            "coverage2Coats": {
                "min": 80,
                "max": 120,
                "avg": 100
            },
            "description": "Water-Based Special Effects Texture for Feature Accent Walls"
        },
        {
            "id": "ap-apcolite-premium-enamel-gloss",
            "serial": "7.01",
            "name": "Apcolite Premium Enamel Gloss",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "7. Enamels & Metal Finishes",
            "type": "Enamels",
            "surface": "both",
            "segment": "Long Lasting Gloss",
            "unit": "Litres",
            "packs": "20L, 10L, 4L, 1L, 500ml, 200ml",
            "coverage1Coat": {
                "min": 100,
                "max": 120,
                "avg": 110
            },
            "coverage2Coats": {
                "min": 200,
                "max": 240,
                "avg": 220
            },
            "description": "High Gloss Mirror-Like Finish for Wood & Metal Surfaces"
        },
        {
            "id": "ap-apcolite-rust-shield-pu-enamel",
            "serial": "7.02",
            "name": "Apcolite Rust Shield PU Enamel",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "7. Enamels & Metal Finishes",
            "type": "Enamels",
            "surface": "both",
            "segment": "PU Anti-Rust",
            "unit": "Litres",
            "packs": "20L, 10L, 4L, 1L, 500ml, 200ml",
            "coverage1Coat": {
                "min": 90,
                "max": 110,
                "avg": 100
            },
            "coverage2Coats": {
                "min": 180,
                "max": 220,
                "avg": 200
            },
            "description": "Anti-Rust PU Enamel with Direct-to-Metal Protection"
        },
        {
            "id": "ap-woodtech-emporio-pu",
            "serial": "7.03",
            "name": "WoodTech Emporio PU",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "7. Enamels & Wood Finishes",
            "type": "Wood Finishes",
            "surface": "both",
            "segment": "Super Luxury Wood Finish",
            "unit": "Litres",
            "packs": "4L, 1L",
            "coverage1Coat": {
                "min": 80,
                "max": 90,
                "avg": 85
            },
            "coverage2Coats": {
                "min": 140,
                "max": 160,
                "avg": 150
            },
            "description": "Super Luxury Italian PU Finish with High Scratch Resistance"
        },
        {
            "id": "ap-trucare-wood-primer",
            "serial": "7.04",
            "name": "TruCare Wood Primer",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "7. Enamels & Metal Finishes",
            "type": "Interior Primers",
            "surface": "both",
            "segment": "Superior Wood Adhesion",
            "unit": "Litres",
            "packs": "4L, 1L, 500ml, 200ml",
            "coverage1Coat": {
                "min": 90,
                "max": 110,
                "avg": 100
            },
            "coverage2Coats": {
                "min": 170,
                "max": 200,
                "avg": 185
            },
            "description": "Solvent Thinnable High Adhesion Sealer for Wood & Plywood"
        },
        {
            "id": "ap-trucare-yellow-metal-primer",
            "serial": "7.05",
            "name": "TruCare Yellow Metal PU Primer",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "7. Enamels & Metal Finishes",
            "type": "Metal Primers",
            "surface": "both",
            "segment": "Anti-Rust Protection",
            "unit": "Litres",
            "packs": "4L, 1L, 500ml, 200ml",
            "coverage1Coat": {
                "min": 85,
                "max": 100,
                "avg": 92.5
            },
            "coverage2Coats": {
                "min": 160,
                "max": 190,
                "avg": 175
            },
            "description": "Zinc Chrome / PU Primer for Galvanized Iron & Metal Substrates"
        },
        {
            "id": "ap-smartcare-vitalia-neo",
            "serial": "8.01",
            "name": "SmartCare Vitalia Neo",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "8. Waterproofing & Specialty",
            "type": "Waterproofing",
            "surface": "both",
            "segment": "Integral Moisture Resistance",
            "unit": "Litres",
            "packs": "5L, 1L, 500ml, 200ml",
            "coverage1Coat": {
                "min": 100,
                "max": 200,
                "avg": 150
            },
            "coverage2Coats": {
                "min": 100,
                "max": 200,
                "avg": 150
            },
            "description": "Integral Liquid Waterproofing Compound for Concrete & Plaster"
        },
        {
            "id": "ap-smartcare-repair-polymer",
            "serial": "8.02",
            "name": "Repair Polymer SBR",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "8. Waterproofing & Specialty",
            "type": "Waterproofing",
            "surface": "both",
            "segment": "High Bond Strength",
            "unit": "Litres",
            "packs": "5L, 1L, 500ml, 200ml",
            "coverage1Coat": {
                "min": 70,
                "max": 80,
                "avg": 75
            },
            "coverage2Coats": {
                "min": 140,
                "max": 160,
                "avg": 150
            },
            "description": "Styrene Butadiene Rubber (SBR) Bonding & Waterproof Repair Slurry"
        },
        {
            "id": "ap-smartcare-crack-seal",
            "serial": "8.03",
            "name": "SmartCare Crack Seal",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "8. Waterproofing & Specialty",
            "type": "Waterproofing",
            "surface": "both",
            "segment": "Crack Protection",
            "unit": "Kg",
            "packs": "900g, 360g",
            "coverage1Coat": {
                "min": 40,
                "max": 45,
                "avg": 42.5
            },
            "coverage2Coats": {
                "min": 40,
                "max": 45,
                "avg": 42.5
            },
            "description": "Fibre Reinforced Crack Filler for Plaster Cracks up to 3mm"
        },
        {
            "id": "ap-smartcare-advanced-crack-seal",
            "serial": "8.04",
            "name": "SmartCare Advanced Crack Seal",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "8. Waterproofing & Specialty",
            "type": "Waterproofing",
            "surface": "both",
            "segment": "Crack Bridging Guarantee",
            "unit": "Kg",
            "packs": "900g, 360g",
            "coverage1Coat": {
                "min": 30,
                "max": 35,
                "avg": 32.5
            },
            "coverage2Coats": {
                "min": 30,
                "max": 35,
                "avg": 32.5
            },
            "description": "Advanced Flexible Crack Bridging Compound (up to 5mm)"
        },
        {
            "id": "ap-smartcare-damp-block-2k",
            "serial": "8.05",
            "name": "SmartCare Damp Block 2K",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "8. Waterproofing & Specialty",
            "type": "Waterproofing",
            "surface": "both",
            "segment": "Severe Damp Protection",
            "unit": "Kg",
            "packs": "15 Kg, 3 Kg",
            "coverage1Coat": {
                "min": 8,
                "max": 9,
                "avg": 8.5
            },
            "coverage2Coats": {
                "min": 15,
                "max": 17,
                "avg": 16
            },
            "description": "2-Component Polymer Modified Flexible Waterproofing Coating"
        },
        {
            "id": "ap-smartcare-epoxy-tri-block",
            "serial": "8.06",
            "name": "SmartCare Epoxy Tri Block",
            "brand": "Asian Paints",
            "brandId": "asian-paints",
            "categoryGroup": "8. Waterproofing & Specialty",
            "type": "Waterproofing",
            "surface": "both",
            "segment": "Potable Water Tank Certified",
            "unit": "Kg",
            "packs": "9 Kg, 4.5 Kg",
            "coverage1Coat": {
                "min": 30,
                "max": 35,
                "avg": 32.5
            },
            "coverage2Coats": {
                "min": 60,
                "max": 70,
                "avg": 65
            },
            "description": "Anti-Microbial 2-Pack Heavy Mineral Water Tank Coating"
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
                "min": 100,
                "max": 120,
                "avg": 110
            },
            "coverage2Coats": {
                "min": 200,
                "max": 240,
                "avg": 220
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
                "min": 105,
                "max": 120,
                "avg": 112.5
            },
            "coverage2Coats": {
                "min": 210,
                "max": 240,
                "avg": 225
            },
            "description": "Smooth Interior Finish with Higher Hiding & Brightness"
        },
        {
            "id": "kn-beauty-sheen",
            "serial": "N1.03",
            "name": "Beauty Sheen",
            "brand": "Kansai Nerolac",
            "brandId": "kansai-nerolac",
            "categoryGroup": "Nerolac - Interior",
            "type": "Nerolac - Interior",
            "surface": "interior",
            "segment": "Bright Sheen Finish",
            "unit": "Litres",
            "packs": "20L, 10L, 4L, 1L",
            "coverage1Coat": {
                "min": 115,
                "max": 130,
                "avg": 122.5
            },
            "coverage2Coats": {
                "min": 230,
                "max": 260,
                "avg": 245
            },
            "description": "Bright Finish + Washable Interior Acrylic Emulsion"
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
                "min": 120,
                "max": 140,
                "avg": 130
            },
            "coverage2Coats": {
                "min": 240,
                "max": 280,
                "avg": 260
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
                "min": 135,
                "max": 150,
                "avg": 142.5
            },
            "coverage2Coats": {
                "min": 260,
                "max": 300,
                "avg": 280
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
                "min": 140,
                "max": 160,
                "avg": 150
            },
            "coverage2Coats": {
                "min": 280,
                "max": 320,
                "avg": 300
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
                "min": 140,
                "max": 160,
                "avg": 150
            },
            "coverage2Coats": {
                "min": 280,
                "max": 320,
                "avg": 300
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
                "min": 50,
                "max": 60,
                "avg": 55
            },
            "coverage2Coats": {
                "min": 100,
                "max": 120,
                "avg": 110
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
                "min": 55,
                "max": 65,
                "avg": 60
            },
            "coverage2Coats": {
                "min": 110,
                "max": 130,
                "avg": 120
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
                "min": 65,
                "max": 75,
                "avg": 70
            },
            "coverage2Coats": {
                "min": 130,
                "max": 150,
                "avg": 140
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
                "min": 75,
                "max": 85,
                "avg": 80
            },
            "coverage2Coats": {
                "min": 150,
                "max": 170,
                "avg": 160
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
                "min": 60,
                "max": 70,
                "avg": 65
            },
            "coverage2Coats": {
                "min": 120,
                "max": 140,
                "avg": 130
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
                "min": 105,
                "max": 125,
                "avg": 115
            },
            "coverage2Coats": {
                "min": 210,
                "max": 250,
                "avg": 230
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
                "min": 70,
                "max": 80,
                "avg": 75
            },
            "coverage2Coats": {
                "min": 140,
                "max": 160,
                "avg": 150
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
                "min": 15,
                "max": 20,
                "avg": 17.5
            },
            "coverage2Coats": {
                "min": 30,
                "max": 40,
                "avg": 35
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
            "packs": "20L, 10L, 4L, 1L, 500ml, 200ml, 100ml, 50ml",
            "coverage1Coat": {
                "min": 100,
                "max": 120,
                "avg": 110
            },
            "coverage2Coats": {
                "min": 200,
                "max": 240,
                "avg": 220
            },
            "description": "High Gloss Protective Enamel for Wood & Metal Structures"
        },
        {
            "id": "kn-wood-primer",
            "serial": "N4.02",
            "name": "Nerolac Wood Primer",
            "brand": "Kansai Nerolac",
            "brandId": "kansai-nerolac",
            "categoryGroup": "Nerolac - Enamels & Metal Finishes",
            "type": "Wood Primers",
            "surface": "both",
            "segment": "Wood Sealing Barrier",
            "unit": "Litres",
            "packs": "4L, 1L, 500ml",
            "coverage1Coat": {
                "min": 90,
                "max": 105,
                "avg": 97.5
            },
            "coverage2Coats": {
                "min": 170,
                "max": 200,
                "avg": 185
            },
            "description": "Solvent Thinnable Deep Penetrating Primer for Natural Wood & Plywood"
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
