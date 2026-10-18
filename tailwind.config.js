/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#090910',
          pure: '#06050A',
          surface: '#120F1D',
          card: '#181426',
          border: 'rgba(196, 176, 232, 0.12)',
        },
        violetDark: {
          DEFAULT: '#21103D',
          surface: '#29154C',
          light: '#351C60',
        },
        mutedPurple: {
          DEFAULT: '#7655A6',
          light: '#8F6EBF',
          dark: '#5E4187',
        },
        lavender: {
          DEFAULT: '#C4B0E8',
          light: '#DBCDF2',
          subtle: '#EDE5F8',
        },
        softPink: {
          DEFAULT: '#E9A9CC',
          light: '#F2C2DC',
          subtle: '#F9DFED',
        },
        warmCream: {
          DEFAULT: '#F7F1E9',
          muted: '#D8D1C7',
          dark: '#B0A9A0',
        },
        stoneMuted: {
          DEFAULT: '#948C9E',
          light: '#B2AAB9',
          dark: '#686072',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'subtle-purple': '0 10px 30px -10px rgba(118, 85, 166, 0.25)',
        'dark-card': '0 8px 30px -8px rgba(0, 0, 0, 0.6)',
        'polaroid-dark': '0 12px 35px -10px rgba(0, 0, 0, 0.75), 0 2px 8px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
