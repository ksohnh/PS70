# Kevin's PS70 Portfolio

This is my portfolio website for PS70: Introduction to Digital Fabrication.

## Live Website

🌐 **Portfolio**: [https://ksohnh.github.io/PS70](https://ksohnh.github.io/PS70)

## Features

- **Google-style Homepage**: Clean search interface with autocomplete
- **14 Assignment Pages**: Individual pages for each assignment with Apple Notes-style UI
- **About Me Page**: Personal information and background
- **Final Project Page**: Documentation of final project
- **Search Functionality**: Find pages by assignment number, title, or keywords
- **Command+K Shortcut**: Quick search from any page
- **Responsive Design**: Works on all devices

## Local Development

To run the portfolio locally:

```bash
npm install
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Deployment

The portfolio is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the master branch.

## Assignment Pages

Each assignment has its own file in `src/components/assignments/` for easy customization:

- Assignment1.js - Assignment14.js
- Each file contains structured sections for documentation
- Easy to add text, images, and code snippets

## Customization

Edit the assignment files in `src/components/assignments/` to add your content:

1. **Overview**: Introduction to the assignment
2. **Process**: Step-by-step documentation
3. **Results**: Showcase your work
4. **Reflection**: Lessons learned and challenges
5. **Images & Documentation**: Add visual content

## Technology Stack

- **React**: Frontend framework
- **Bootstrap**: UI styling
- **React Router**: Navigation
- **GitHub Pages**: Hosting
- **GitHub Actions**: Automated deployment
