// tailwind.config.js
module.exports = {
  content: ["./*.html", "./script.js"], // adjust as needed
  theme: {
    extend: {
      animation: {
        spinSlow: 'spin 2s linear infinite',
      },
      boxShadow: {
        glow: '0 0 15px rgba(99, 102, 241, 0.7)',
      },
    },
  },
  darkMode: "class", // or 'media'
  plugins: [],
};
