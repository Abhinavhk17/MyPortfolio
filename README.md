# My Portfolio Website

A modern, responsive portfolio website built with Angular 20, featuring smooth animations, professional design, and GitHub Pages deployment.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Sections**: 
  - Hero section with call-to-action buttons
  - Skills showcase with technology tags
  - Project portfolio with hover effects
  - Professional experience timeline
  - Resume download functionality
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🚀 Live Demo

Visit the live website: [Your Portfolio URL](https://yourusername.github.io/MyPortfolio/)

## 🛠️ Tech Stack

- **Framework**: Angular 20
- **Styling**: CSS3 with custom properties
- **Fonts**: Inter from Google Fonts
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📂 Project Structure

```
src/
├── app/
│   ├── app.ts              # Main component with portfolio logic
│   ├── app.html            # Portfolio HTML template
│   ├── app.css             # Portfolio styles
│   └── app.routes.ts       # Routing configuration
├── assets/
│   ├── profile.jpg         # Your profile picture
│   ├── project1.jpg        # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   └── resume.pdf          # Your resume file
└── styles.css              # Global styles
```

## 🏗️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`

4. **Build for production**
   ```bash
   npm run build:prod
   ```

## 🎨 Customization

### Personal Information
Edit the following files to customize with your information:

1. **Profile & Content** (`src/app/app.html`):
   - Update name, title, and description in the hero section
   - Modify skills in the skills section
   - Update projects with your own work
   - Add your professional experience
   - Update footer information

2. **Profile Picture** (`src/assets/profile.jpg`):
   - Replace with your professional headshot
   - Recommended size: 400x400px

3. **Project Images** (`src/assets/`):
   - Add screenshots of your projects
   - Replace project1.jpg, project2.jpg, project3.jpg
   - Recommended size: 600x400px

4. **Resume** (`src/assets/resume.pdf`):
   - Replace with your actual resume PDF

### Styling
- **Colors**: Modify CSS custom properties in `src/app/app.css`
- **Fonts**: Update font imports in `src/styles.css`
- **Layout**: Adjust responsive breakpoints and grid layouts

## 🌐 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy your site

### Manual Deployment

1. **Install angular-cli-ghpages**:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: Below 768px

## 🔧 Development Commands

- `npm start` - Start development server
- `npm run build` - Build for development
- `npm run build:prod` - Build for production with GitHub Pages base href
- `npm test` - Run unit tests
- `npm run deploy` - Build and deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

---

⭐ Don't forget to give this project a star if you found it helpful!
