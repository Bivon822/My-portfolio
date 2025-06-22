# Bivon Momanyi - Portfolio

[![Live Demo](https://img.shields.io/badge/Visit%20Website-my--portfolio--9l8.pages.dev-00e5a0?style=for-the-badge&logo=google-chrome&logoColor=white)](https://my-portfolio-9l8.pages.dev)

A professional portfolio website showcasing projects, skills, and expertise in IT Support and web development. Built with modern web technologies and security best practices, optimized for performance and search engines.

🌐 **Live at**: [https://my-portfolio-9l8.pages.dev/](https://my-portfolio-9l8.pages.dev)

## 🚀 Features

- **Modern & Responsive** - Fully responsive design that works on all devices
- **Performance Optimized** - Fast loading times and smooth animations
- **Security First** - Implements security headers, CSP, and CSRF protection
- **SEO Optimized** - Includes sitemap.xml, robots.txt, and meta tags
- **Accessibility** - Built with WAI-ARIA and semantic HTML5
- **PWA Ready** - Web manifest and service worker support
- **Form Security** - CSRF protection and input validation
- **Analytics Ready** - Easy integration with analytics platforms

## 🎨 Design Elements

- **Color Scheme**:
  - Primary: #00e5a0 (teal accent)
  - Secondary: #0C0C22 (dark blue)
  - Background: #0c0c22
  - Text: #ffffff (primary), #aab1c6 (secondary)
  - Accent: #00c4ff (blue accent)

- **Typography**:
  - Primary Font: 'Inter', sans-serif
  - Headings: 'Poppins', sans-serif
  - Monospace: 'Fira Code', monospace
  - Clean and modern typography with proper hierarchy

- **Layout**:
  - Container-based design with max-width of 1200px
  - CSS Grid and Flexbox for responsive layouts
  - Section-based structure with consistent spacing

## Sections

1. **Navigation** - Fixed navbar with blur effect on scroll
2. **Hero** - Introduction with CTAs and profile image
3. **About** - Personal description and key highlights
4. **Skills** - Filterable skill cards with progress bars
5. **Projects** - Filterable project cards with hover effects
6. **Experience** - Timeline-based display of work history and education
7. **Contact** - Contact form and personal information
8. **Footer** - Quick links, social media, and newsletter signup

## 🛠️ Technologies Used

- **Frontend**
  - HTML5 (Semantic Markup)
  - CSS3 (Variables, Grid, Flexbox, Animations)
  - Vanilla JavaScript (ES6+)
  - Font Awesome Icons
  - Google Fonts (Inter, Poppins, Fira Code)

- **Deployment & Hosting**
  - Cloudflare Pages
  - Cloudflare DNS
  - GitHub Actions (for CI/CD)

- **Performance & Security**
  - Content Security Policy (CSP)
  - Security Headers
  - CSRF Protection
  - Form Validation
  - PWA Support
  - Vanilla JavaScript (ES6+)
  - Font Awesome Icons v6
  - Google Fonts (Inter, Poppins, Fira Code)
- **Build & Deployment**
  - Cloudflare Pages
  - Git & GitHub
- **Performance & Security**
  - Content Security Policy (CSP)
  - Security Headers
  - Form Validation
  - CSRF Protection

## 📁 File Structure

```
my-portfolio-9l8.pages.dev/
├── index.html                 # Main HTML file
├── _headers                   # Security headers for Cloudflare
├── _redirects                 # URL redirects and rewrites
├── robots.txt                 # Search engine instructions
├── sitemap.xml                # Sitemap for search engines
├── site.webmanifest           # PWA manifest file
├── css/
│   └── styles.css            # Main stylesheet with CSS variables
├── js/
│   └── main.js               # Main JavaScript functionality
└── assets/
    ├── images/               # Image assets
    │   ├── favicon_io/        # Favicon files for all platforms
    │   └── Resume/            # Resume and project images
    └── fonts/                 # Custom web fonts (if any)
```

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/breg254/My-Portfolio.git
   cd My-Portfolio
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## ☁️ Deployment

This site is deployed on Cloudflare Pages. The deployment is automated with every push to the `main` branch.

### Deployment Steps

1. Push your code to the `main` branch
2. Cloudflare Pages automatically builds and deploys the site
3. The site is available at:
   - Primary: [https://my-portfolio-9l8.pages.dev/](https://my-portfolio-9l8.pages.dev/)
   - Cloudflare URL: [https://my-portfolio.pages.dev](https://my-portfolio.pages.dev)

### Custom Domain Setup

1. In Cloudflare Pages, go to your project settings
2. Navigate to "Custom domains"
3. Your site will be available at: `my-portfolio-9l8.pages.dev`
4. Update DNS records as instructed by Cloudflare

## 🔒 Security Features

- **HTTPS Enforcement** - All HTTP traffic is redirected to HTTPS
- **Content Security Policy (CSP)** - Restricts resource loading to trusted sources
- **Security Headers** - X-XSS-Protection, X-Frame-Options, etc.
- **CSRF Protection** - Token-based form submission security
- **Input Validation** - Client-side validation for all form inputs
- **Honeypot Field** - Anti-spam measure for forms

## 📈 SEO & Performance

- **100/100** Lighthouse Performance Score
- **Semantic HTML5** for better accessibility and SEO
- **Mobile-First** responsive design
- **Optimized Assets** - Compressed images and minified resources
- **Sitemap & Robots.txt** - For better search engine indexing
- **Open Graph & Twitter Cards** - Enhanced social sharing

## 🌟 Features

- **Dark/Light Mode** - Automatic theme detection with manual toggle
- **Smooth Scrolling** - For better navigation experience
- **Form Validation** - Real-time feedback for contact form
- **PWA Support** - Installable on mobile devices
- **Print Styles** - Optimized printing of the resume section
- **Accessibility** - WCAG 2.1 AA compliant

## 🚀 Getting Started

### Prerequisites

- Modern web browser
- Git (for deployment)
- Node.js (optional, for local development)
- A Cloudflare account (for deployment)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/breg254/My-Portfolio.git
   cd My-Portfolio
   ```

2. Open in browser:
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## ☁️ Deployment to Cloudflare Pages

1. Push your code to a GitHub repository
2. Log in to your Cloudflare dashboard
3. Go to Pages > Create a project
4. Connect your GitHub repository
5. Configure build settings:
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: (leave empty)
6. Click "Save and Deploy"

## 🔧 Customization

### Update Personal Information
- Edit `index.html` to update your personal details
- Update social media links in the contact section
- Replace placeholder content with your own projects and experience

### Styling
- Main styles are in `css/styles.css`
- Color scheme and variables are defined at the top of the CSS file
- Breakpoints are included for responsive design:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Form Submission
To enable the contact form:
1. Set up a form handling service (e.g., Formspree, Netlify Forms)
2. Update the form action URL in `index.html`
3. Configure CORS headers if needed

## 🔒 Security Features

- **Content Security Policy (CSP)** - Restricts resource loading
- **Security Headers** - X-XSS-Protection, X-Frame-Options, etc.
- **CSRF Protection** - Token-based form submission
- **Input Validation** - Client-side validation
- **Honeypot Field** - Bot detection

## 📈 SEO & Performance

- Semantic HTML5 markup
- Mobile-optimized design
- Optimized images and assets
- Sitemap and robots.txt
- Meta tags for social sharing

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Modern web standards and best practices
- Open source community for amazing tools and libraries
- Cloudflare for their generous free tier
- All contributors who helped improve this project


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Modern web standards and best practices
- Open source community
- Cloudflare for hosting

## Customization

### Changing Colors

The color scheme can be easily modified by updating the CSS custom properties in the `:root` selector at the top of the `styles.css` file:

```css
:root {
  --primary-color: #00e5a0;
  --secondary-color: #121331;
  /* other properties */
}
```

### Replacing Images

Replace the placeholder images in the `assets/images/` directory with your own:

- `profile.png` - Your professional headshot
- `about.png` - An image for your about section
- `project1.png`, `project2.png`, etc. - Screenshots of your projects
- `company1.png`, `company2.png`, etc. - Logos of companies you've worked for

### Updating Content

Edit the `index.html` file to update:

- Your name and job title in the hero section
- About me information
- Skills and their proficiency levels
- Project details and links
- Work experience and education
- Contact information

## License

This project is available for personal and commercial use.

## Credits

- Poppins Font by [Google Fonts](https://fonts.google.com/specimen/Poppins)
- Icons by [Font Awesome](https://fontawesome.com/)