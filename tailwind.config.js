/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    themes: [
      {
        mytheme: {
          "primary": "#44334C",
          "secondary": "#E3D5FA",
          "accent": "#44334C",
          "neutral": "#e4e7eb",
          "base-100": "#EAE5EB",
          // "info": "#0057ff",
          "info": "#d2fce2",
          "success": "#15935A",
          "warning": "#F0AB0A",
          "error": "#fdd7e4",
          // "error": "#3b82f680",
          
        },
      }
    ]
  }
}
