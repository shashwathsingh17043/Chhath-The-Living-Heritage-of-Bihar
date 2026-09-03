/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#080D24',
          orange: '#D97706',
          terracotta: '#8E4A23',
          ivory: '#FDFBF7',
          river: '#EADEC9',
        },
        heritage: {
          parchment: '#FDFBF7',
          card: '#FFFFFF',
          sand: '#F4EFE6',
          sandMuted: '#EDE5D8',
          border: '#EADEC9',
          borderStrong: '#D9C8AE',
          ink: '#2C221E',
          earth: '#6B5B52',
          earthLight: '#8C7A70',
          terracotta: '#8E4A23',
          terracottaDark: '#6E3214',
          terracottaLight: '#FBEFEB',
          marigold: '#D97706',
          marigoldLight: '#FEF3C7',
          dusk: '#1C2333',
        }
      },
      fontFamily: {
        yatra: ['"Yatra One"', 'serif'],
        noto: ['"Noto Serif Devanagari"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(to bottom, #080D24 0%, #182A42 50%, #A84C2A 80%, #F58A00 100%)',
        'sunrise-gradient': 'linear-gradient(to bottom, #080D24 0%, #182A42 40%, #A84C2A 70%, #F58A00 90%, #F4E8D0 100%)',
      }
    },
  },
  plugins: [],
}
