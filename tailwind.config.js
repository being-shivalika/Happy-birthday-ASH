/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          DEFAULT: '#0A0A0A',
          pure: '#000000',
          soft: '#121212',
          card: '#181818',
        },
        charcoal: {
          DEFAULT: '#1E1E1E',
          light: '#2B2B2B',
          dark: '#141414',
        },
        graphite: {
          DEFAULT: '#404040',
          light: '#525252',
          muted: '#737373',
        },
        silver: {
          DEFAULT: '#D4D4D4',
          light: '#E5E5E5',
          subtle: '#F5F5F5',
        },
        alabaster: {
          DEFAULT: '#FAFAFA',
          soft: '#F4F4F2',
          pure: '#FFFFFF',
        },
      },
      fontFamily: {
        roman: ['Cinzel', 'Trajan Pro', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Italiana', 'Georgia', 'serif'],
        italiana: ['Italiana', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'super-wide': '0.3em',
        'ultra-wide': '0.45em',
        'royal': '0.22em',
      },
      boxShadow: {
        'luxury': '0 20px 50px -10px rgba(0, 0, 0, 0.08)',
        'luxury-dark': '0 25px 60px -12px rgba(0, 0, 0, 0.35)',
        'elevation': '0 30px 70px -15px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1)',
        'comp': '0 15px 35px -5px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
