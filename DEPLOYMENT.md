# GitHub Pages Deployment Instructions

## Prerequisites
- GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step 1: Create GitHub Repository

1. Go to GitHub.com and create a new repository
2. Name it `MyPortfolio` (or any name you prefer)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

## Step 2: Initialize Git and Push Code

Open terminal in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"

# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/MyPortfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically trigger and deploy your site

## Step 4: Access Your Website

Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/MyPortfolio/`

## Customization Steps

### 1. Update Personal Information
Edit `src/app/app.html`:
- Change name from "Abhinav H K" to your name
- Update job title and description
- Modify skills section with your technologies
- Update projects with your actual work
- Add your real experience

### 2. Add Your Images
Replace files in `src/assets/`:
- `profile.jpg` - Your professional photo (400x400px recommended)
- `project1.jpg` - Screenshot of your first project
- `project2.jpg` - Screenshot of your second project  
- `project3.jpg` - Screenshot of your third project
- `resume.pdf` - Your actual resume file

### 3. Update Project Links
In `src/app/app.html`, update the project links:
- Replace "#" with actual demo links
- Replace "#" with actual GitHub repository links

### 4. Update Social Links
In the footer section, update:
- LinkedIn profile URL
- GitHub profile URL
- Twitter profile URL (optional)

### 5. Customize Colors (Optional)
In `src/app/app.css`, modify the CSS custom properties:
```css
:host {
  --primary-color: #2563eb;     /* Main brand color */
  --secondary-color: #1e40af;   /* Secondary brand color */
  --accent-color: #f59e0b;      /* Accent color */
  /* ... other colors ... */
}
```

## Updating Your Portfolio

After making changes:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main
```

The GitHub Action will automatically rebuild and deploy your updated portfolio.

## Troubleshooting

### Build Fails
- Check that all image files exist in `src/assets/`
- Ensure no syntax errors in HTML/CSS
- Check the Actions tab in GitHub for detailed error logs

### Images Not Loading
- Verify image files are in `src/assets/` directory
- Check file names match exactly (case-sensitive)
- Ensure images are web-compatible formats (jpg, png, gif, svg)

### Resume Download Not Working
- Ensure `resume.pdf` exists in `src/assets/`
- Check that the file is a valid PDF
- Try clearing browser cache

## Advanced Customization

### Adding New Sections
1. Add HTML section in `src/app/app.html`
2. Add corresponding CSS in `src/app/app.css`
3. Add navigation link in the navbar
4. Update scroll function if needed

### Changing Fonts
1. Import new font in `src/styles.css`
2. Update font-family in CSS custom properties

### Adding Animations
- Use CSS transitions and transforms
- Consider libraries like AOS (Animate On Scroll)
- Keep animations subtle and professional

## Domain Setup (Optional)

To use a custom domain:
1. Purchase a domain name
2. Add CNAME file to `public/` directory with your domain
3. Configure DNS settings with your domain provider
4. Update GitHub Pages settings to use custom domain

Your portfolio is now ready to showcase your work to the world! 🚀
