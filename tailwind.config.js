/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html,j,ts}"],
  theme: {
   
    extend: {
      colors: {
        "primary": "#64CCC5",
        "primary-light": "#45dad0",
        "primary-dark": "#176B87",
        "primary-darker": "#053B50",
        "surface": "#eaeaec",
        "surface-dark": "#282828",
        "accent": "#ffcd38",
        "accent-light": "#FEFF86",
        "background": "#EEEEEE",
        "background-dark": "#2e2e2e",
        
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
}