/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryColor: '#56AC46',
        secondaryColor: '#412E27',
        lightColor: '#EDE1D1',
        grayColor: '#757575',
      },
      fontFamily: {
        body: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
