# JalRakshak AI

**Community-Owned Smart Groundwater Protection & Prediction System**

A professional, investor-ready website prototype for a climate-tech startup focused on AI-powered groundwater monitoring and prediction for rural India.

![JalRakshak AI](https://slbyffmmbyues.ok.kimi.link)

## Live Demo

**Website URL:** https://slbyffmmbyues.ok.kimi.link

## Features

### 1. Landing Page (Hero Section)
- Animated background with floating water droplets
- Compelling headline: "Predicting Water Crisis Before It Happens"
- Key statistics (600M+ people dependent, 164K villages at risk)
- Dual CTA buttons: "View Live Dashboard" and "Request Pilot Deployment"

### 2. Problem Section
- Animated counters for groundwater statistics
- State-wise crisis table (Punjab 156%, Haryana 137%, etc.)
- Borewell failure visualization
- Climate change impact data

### 3. Solution Section
- 4-layer architecture diagram (IoT → Data → AI → Dashboard)
- Hardware specifications
- Connectivity options comparison
- System architecture visualization

### 4. Live Dashboard (Interactive)
- **Real-time Water Level Chart** - 30-day trend with simulated data updates every 5 seconds
- **Risk Level Indicator** - Current status with visual progress bar
- **Predicted Dry Date** - AI-calculated days until critical level
- **Water Quality (TDS)** - Real-time TDS readings with status badges
- **AI Insights Panel** - Dynamic recommendations and alerts
- **Village Water Score** - Gamified conservation scoring
- **Extraction Rate Chart** - Daily water usage visualization

### 5. How It Works
- Interactive tabs for each system component
- Technical specifications for sensors, power, connectivity
- AI model architecture (LSTM + ARIMA + Prophet ensemble)
- SMS alert flow visualization

### 6. Impact Section
- 5-year projection charts
- Key performance indicators
- Community testimonials
- Benefit breakdown (Agricultural, Community, Financial)

### 7. Pilot & Scaling
- Deployment roadmap (4 phases)
- Cost breakdown (₹2.3L one-time + ₹1.32L annual)
- Partnership models (CSR, Government, NGO)

### 8. Contact Form
- Full pilot request form
- Organization type selection
- State dropdown
- Success confirmation dialog

## Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure

```
src/
├── sections/
│   ├── Navigation.tsx    # Fixed navbar with scroll effects
│   ├── Hero.tsx          # Landing hero section
│   ├── Problem.tsx       # Crisis statistics and data
│   ├── Solution.tsx      # 4-layer architecture
│   ├── Dashboard.tsx     # Live monitoring dashboard
│   ├── HowItWorks.tsx    # Technical explanation
│   ├── Impact.tsx        # KPIs and projections
│   ├── Pilot.tsx         # Deployment roadmap
│   ├── Contact.tsx       # Demo request form
│   └── Footer.tsx        # Site footer
├── data/
│   └── waterData.ts      # Dummy data generator
├── components/ui/        # shadcn/ui components
├── App.tsx               # Main app component
└── index.css             # Global styles
```

## Dummy Data Simulation

The dashboard uses realistic simulated groundwater data:

- **Water Level:** Gradual depletion with seasonal variations
- **TDS Values:** 200-1500 ppm range with realistic fluctuations
- **Temperature:** Seasonal variations (22-30°C)
- **Extraction Rate:** 500-1500 L/day based on crop cycles
- **Rainfall:** Monsoon simulation (June-September)

Data updates every 5 seconds to simulate live IoT readings.

## Installation

```bash
# Clone the repository
git clone <repo-url>
cd jalrakshak-ai

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Build the project
npm run build

# Deploy dist folder
drag and drop dist/ folder to Netlify
```

### Manual Deployment

Upload the contents of the `dist/` folder to any static hosting service.

## Environment Variables

No environment variables required for the static website.

## Customization

### Colors

The website uses a blue-green color palette (cyan/teal/emerald) defined in `tailwind.config.js`:

- Primary: Cyan (#06b6d4)
- Secondary: Teal (#14b8a6)
- Accent: Emerald (#10b981)

### Data Simulation

Modify `src/data/waterData.ts` to adjust:
- Depletion rates
- Seasonal patterns
- Alert thresholds
- Village parameters

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lighthouse Score: 90+ (Performance, Accessibility, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## License

MIT License - Free for commercial and personal use.

## Contact

- Email: contact@jalrakshak.ai
- Phone: +91 98765 43210
- Location: Bangalore, India

---

**JalRakshak AI** - Predict. Protect. Prosper.
