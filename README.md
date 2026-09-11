# Nishanth S - Personal Portfolio

A premium, modern, creative, and fully responsive personal portfolio website built for Nishanth S, a Computer Science and Business Systems (CSBS) student and Web Developer.

## Technologies Used


* HTML5
* CSS3
* Vanilla JavaScript
* Google Fonts (Inter, Outfit)
* FontAwesome (Icons)

## Features

* **Responsive Design:** Optimized for all screen sizes (mobile, tablet, laptop, desktop).
* **Modern Aesthetic:** Dark mode, glassmorphism, gradients, and subtle glow effects.
* **Smooth Animations:** Typing effect, scroll spy, filtering, and reveal-on-scroll animations using `IntersectionObserver`.
* **Dynamic Sections:** Hero, About, Education, Skills, Projects, Experience, Certifications, Achievements, GitHub, and Contact.
* **Project Filtering:** Instantly filter projects by category using Vanilla JS.
* **Form Validation:** Client-side validation for the contact form.

## Project Structure

```text
portfolio/
│
├── index.html       # Main HTML file
├── style.css        # Styling and layout
├── script.js        # Interactivity, filtering, and animations
├── assets/          # Directory for static assets
│   ├── resume.pdf   # Resume PDF file
│   └── icons/       # Custom icons (if any)
└── README.md        # Project documentation
```

## How to Run

Since this is a static website, you do not need any servers or dependencies.

1. Navigate to the project directory.
2. Ensure you have added your actual resume to `assets/resume.pdf`.
3. Open `index.html` in your favorite modern web browser.

## Customization

You can easily modify the theme colors by changing the CSS variables at the top of `style.css`:

```css
:root {
    --bg-dark: #0f1115;
    --primary: #00ffcc; /* Change the primary accent color */
    /* ... */
}
```
