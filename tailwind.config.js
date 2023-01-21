/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
 
  theme: {
    extend: {
      colors: {
          hero_start: '#DBE7FD',
          hero_end: '#F9FBFF',
          link: '#3A75FF',
          default: '#303133',
          plan1: '#FBE7CA',
          plan2: '#FCCCC4',
          plan3: '#FCE12F',
          dark_gray: '#9CA3AF',
          gray: '#F5F5F5',
          blue: '#E2ECFE',
          light_gray: 'rgba(255, 255, 255, 0.6)',
          green: '#7ECD51'
      },
  },

  fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
  },

  fontSize: {
      xs: '12px',
      sm: '14px',
      base: '1rem',
      xl: '20px',
      md: ['22px', '140%'],
      '2xl': ['26px', '140%'],
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '7xl': ['60px;','73px;']
  },

  container: {
      center: true,
      padding: "15px",
      screens: {

          '2xl': '1006px',
      },
  },
  },
  plugins: [],
}
