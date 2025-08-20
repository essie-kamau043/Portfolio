# Esther Wambui Portfolio

A modern, responsive single-page portfolio website featuring smooth navigation, dynamic content, and an optimized user experience. Built with clean code and designed for performance and accessibility across all devices.

![Portfolio Preview](/assets/Screenshot%20from%202025-08-20%2019-11-23.png) 

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scrolling between sections with intuitive navigation
- **Mobile Menu**: Collapsible mobile-friendly navigation menu
- **Dynamic Typewriter Effect**: Animated typewriter effect showcasing different roles and skills
- **Projects Showcase**: Dedicated projects section with live demos and source code links
- **Contact Form Integration**: Functional contact form powered by Formspree
- **Performance Optimized**: Fast loading times with optimized assets
- **Accessibility Focused**: Built with accessibility best practices in mind

## 🚀 Live Demo

[View Live Portfolio](https://essie-kamau043.github.io/Portfolio/)

## 🛠️ Technologies Used


- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS3 with Flexbox, CSS Variables
- **Icons**: Font Awesome
- **Form Handling**: Formspree
- **Deployment**:  GitHub Pages
- **Version Control**: Git & GitHub

## 📋 Prerequisites

Before running this project locally, make sure you have the following installed:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Git for version control
- Live Server extension (for local development) or Python/Node.js for local server

## ⚡ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/esther-wambui-portfolio.git
   cd esther-wambui-portfolio
   ```

2. **Open the project**
   ```bash
   # Using VS Code
   code .
   
   # Or open index.html in your preferred editor
   ```

3. **Run locally**
   
   **Option 1: Using Live Server (VS Code Extension)**
   - Install the Live Server extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"
   
   **Option 2: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option 3: Using Node.js**
   ```bash
   npx http-server
   ```

4. **Open in browser**
   Navigate to `http://localhost:8000` (or the port shown in your terminal)

## 🎯 Usage

### Basic Navigation
The portfolio features a fixed navigation bar that allows smooth scrolling to different sections:
- **Home**: Introduction and hero section
- **About**: Personal information and skills
- **Projects**: Showcase of work and projects
- **Contact**: Get in touch form

### Contact Form Setup
To use the contact form with Formspree:

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Customizing Content
Edit the following files to customize your portfolio:

- `index.html`: Main content, text, and structure
- `css/style.css`: Styling, colors, and layout
- `js/script.js`: Interactive features and animations
- `assets/`: Replace images with your own

## 📁 Project Structure

```
esther-wambui-portfolio/
│
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Responsive design styles
├── js/
│   ├── script.js          # Main JavaScript functionality
│   └── animations.js      # Animation effects
├── assets/
│   ├── images/            # Images and graphics
│   ├── icons/             # Icon files
│   └── documents/         # Resume/CV files
├── README.md              # Project documentation
└── .gitignore            # Git ignore file
```

## ⚙️ Configuration

### Customizing the Typewriter Effect
Edit the roles array in `js/script.js`:
```javascript
const roles = [
    "Web Developer",
    "UI/UX Designer", 
    "Frontend Developer",
    
];
```


## 🐛 Troubleshooting

### Common Issues

**Contact form not working**
- Ensure you've set up Formspree correctly with your form endpoint
- Check browser console for any JavaScript errors
- Verify form fields have proper `name` attributes

**Images not loading**
- Check file paths are correct and case-sensitive
- Ensure images are in the correct directory
- Verify image file formats are web-compatible (jpg, png, webp, svg)

**Smooth scrolling not working**
- Check if JavaScript is enabled in the browser
- Verify navigation links have correct anchor references
- Look for JavaScript console errors

**Mobile menu not functioning**
- Ensure JavaScript files are loaded properly
- Check for CSS conflicts with mobile styles
- Verify viewport meta tag is present in HTML head

### Performance Issues

If you experience slow loading:
- Optimize images (compress and use appropriate formats)
- Minify CSS and JavaScript files
- Enable browser caching
- Consider using a CDN for assets

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/esther-wambui-portfolio/issues).

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Code Style Guidelines

- Use consistent indentation (2 or 4 spaces)
- Follow semantic HTML practices
- Use meaningful CSS class names
- Comment your JavaScript code
- Optimize images before committing

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Esther Wambui**
- Website: [portfolio.com](https://essie-kamau043.github.io/Portfolio/)
- GitHub: [@essie-kamau043](https://github.com/essie-kamau043)
- LinkedIn: [@esther-kamau](https://www.linkedin.com/in/esther-kamau-92103128a/)
- Email: essie.k004@gmail.com

## 🙏 Acknowledgments

- [Formspree](https://formspree.io/) for form handling
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- Design inspiration from [dribbble.com](https://dribbble.com/)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

---

⭐ **If you found this project helpful, please give it a star!** ⭐

---

*Last updated: August 2025*