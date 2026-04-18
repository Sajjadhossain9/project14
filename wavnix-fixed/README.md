# Wavnix - Premium Digital Solutions Website

A modern, professional, and fully responsive website for Wavnix, a premium digital agency offering domain registration, web hosting, web design, development, AI automation, and digital marketing services.

## 🌟 Features

### Design & UI/UX
- **Premium Modern Design**: Clean, minimalist aesthetic with modern gradients
- **Glassmorphism Effects**: Elegant glass-effect UI elements
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Smooth Animations**: Scroll animations using AOS (Animate On Scroll)
- **Consistent Typography**: Professional font hierarchy and spacing
- **High-Quality Images**: Beautiful, professional imagery throughout

### Pages & Sections

#### 1. **Home Page**
- Eye-catching hero section with CTA buttons
- Domain search functionality (UI simulation)
- Hosting plans showcase (Basic, Standard, Premium)
- Services overview grid
- Technologies & skills section
- Featured portfolio projects
- Testimonials carousel (using Swiper)
- Community social links
- Newsletter/Contact CTA section

#### 2. **About Page**
- Company story and mission
- Key statistics (clients, countries, projects)
- Core values showcase
- Leadership team section
- Why choose us benefits

#### 3. **Services Page**
- Comprehensive service categories:
  - Domain & Hosting Services (8+ services)
  - Web Services (8+ services)
  - Software & App Development (8+ services)
  - AI & Automation (8+ services)
  - Digital Marketing (8+ services)
  - Data Services (8+ services)
- Service process workflow
- Call-to-action sections

#### 4. **Pricing Page**
- Hosting plans with monthly/yearly toggle
- Detailed feature comparison tables
- Domain pricing for 8+ extensions
- Professional services pricing
- FAQ section
- Money-back guarantee information

#### 5. **Portfolio Page**
- Filterable project grid (6+ projects)
- Project categories (Websites, E-commerce, Apps, AI, Dashboards)
- Project detail cards with technologies
- Featured case study section
- Project statistics
- Project development process

#### 6. **Contact Page**
- Contact information cards
- Full contact form with validation
- Multi-field form (name, email, phone, company, subject, message)
- Success message on submission
- FAQ section
- Social media links
- Call-to-action

### Navigation & Components
- **Sticky Navbar**: Fixed navigation with scroll detection
- **Responsive Mobile Menu**: Hamburger menu for mobile devices
- **Footer**: Comprehensive footer with links, social icons, and company info
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

## 🛠️ Technologies Used

### Frontend
- **React 19.2.3**: UI framework
- **TypeScript**: Type-safe development
- **React Router DOM**: Client-side routing
- **Tailwind CSS 4.1.17**: Utility-first CSS framework
- **Vite 7.2.4**: Build tool and dev server

### Libraries
- **react-icons**: Icon library
- **swiper**: Modern carousel/slider
- **aos (Animate On Scroll)**: Scroll animations
- **framer-motion**: Advanced animations (optional)

### Development
- **Tailwindcss**: Styling framework
- **Vite Plugin React**: React support in Vite
- **Vite Plugin Single File**: Single file output for deployment

## 📁 Project Structure

```
wavnix/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation bar
│   │   └── Footer.tsx          # Footer component
│   ├── pages/
│   │   ├── Home.tsx            # Home page with all sections
│   │   ├── About.tsx           # About page
│   │   ├── Services.tsx        # Services page
│   │   ├── Pricing.tsx         # Pricing page
│   │   ├── Portfolio.tsx       # Portfolio page
│   │   └── Contact.tsx         # Contact page
│   ├── utils/
│   │   └── cn.ts              # Utility functions
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles
│   └── aos.d.ts                # TypeScript declaration for AOS
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Cyan (#06b6d4) and Blue (#2563eb)
- **Secondary**: Slate background colors
- **Accent**: White for contrast

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable sans-serif
- **Links**: Gradient text and hover effects

### Components
- Glass-effect cards with backdrop blur
- Gradient buttons with hover animations
- Smooth transitions and transformations
- Responsive grid layouts
- Interactive forms with validation

## 📱 Responsive Design

- **Desktop**: Full layout with sidebars and expansions
- **Tablet**: Optimized grid layouts
- **Mobile**: Single column, hamburger menu, touch-friendly buttons

## ✨ Special Features

1. **Domain Search Simulation**: Interactive domain search with extension options
2. **Billing Cycle Toggle**: Monthly/yearly pricing toggle on pricing page
3. **Form Validation**: Client-side validation with success messages
4. **Project Filtering**: Filter portfolio by categories
5. **Testimonial Carousel**: Auto-playing testimonials with pagination
6. **Scroll Animations**: Smooth entrance animations for elements
7. **Smooth Scrolling**: Browser-native smooth scroll behavior

## 📊 Performance

- **Optimized Images**: High-quality images with proper sizing
- **Code Splitting**: React Router enables automatic code splitting
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Gzip Compression**: ~142KB gzipped size

## 🔧 Customization

### Add New Pages
1. Create a new file in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Change Colors
Edit color values in:
- `src/index.css`
- Individual component files (Tailwind classes)
- Global gradient definitions

### Add New Components
Place reusable components in `src/components/` and import as needed.

## 📞 Contact & Support

- Email: hello@wavnix.com
- Phone: +1 (234) 567-890
- Website: https://wavnix.com

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
