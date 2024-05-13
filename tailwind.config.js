const { purple } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        'login-bg': "linear-gradient(to bottom, rgba(48, 175, 91, 0.2), rgba(0, 0, 0)), url('/bg/login.jpg')",
        'about-us-hero': "url('/bg/about-us-hero.jpg')",
        "about-us-perfect-camping": "url('/sections/about-us/perfectCamping.jpg')",
        "about-us-stats": "url('/bg/about-us-stats.jpeg')",
        "destinations-hero": "url('/bg/destinations-hero.jpg')",
        "mountain-camping": "url('/sections/Destinations/Region/mountain-camping.jpg')",
        "forest-camping": "url('/sections/Destinations/Region/forest-camping.jpg')",
        "coastal-camping": "url('/sections/Destinations/Region/costal-camping.jpg')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
    },
  },
  plugins: [],
};
