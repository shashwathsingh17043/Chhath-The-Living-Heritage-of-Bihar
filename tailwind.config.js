/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "From Hearth to Horizon" Curated Design Tokens
        warmIvory: '#FFF8EC',
        charcoal: '#2B1B16',
        riverBlue: '#173E4F',
        vermilion: '#A93120',
        sunriseSaffron: '#E97824',
        marigoldGold: '#F1B84B',
        clay: '#B9653B',

        brand: {
          indigo: '#173E4F',
          orange: '#E97824',
          terracotta: '#B9653B',
          ivory: '#FFF8EC',
          river: '#173E4F',
        },
        heritage: {
          parchment: '#FFF8EC',
          softParchment: '#F5ECE0',
          card: '#FFFFFF',
          sand: '#F5ECE0',
          sandMuted: '#EADEC9',
          border: '#D8C5AF',
          borderLight: '#EADEC9',
          borderStrong: '#A8927B',
          ink: '#2B1B16',
          deepBrown: '#2B1B16',
          muted: '#5C4A3E',
          earth: '#5C4A3E',
          earthLight: '#7D6B58',
          terracotta: '#B9653B',
          terracottaDark: '#8E4A23',
          terracottaLight: '#FBEFEB',
          accent: '#E97824',
          marigold: '#F1B84B',
          marigoldLight: '#FEF3C7',
          dusk: '#173E4F',
        }
      },
      fontFamily: {
        // Strict 3-font system
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        hindi: ['"Noto Serif Devanagari"', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        // Backward-compatible aliases mapping to the 3 permitted families
        inter: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        noto: ['"Noto Serif Devanagari"', 'serif'],
        yatra: ['"Noto Serif Devanagari"', 'serif'],
        playfair: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(to bottom, #173E4F 0%, #2B1B16 50%, #A93120 80%, #E97824 100%)',
        'sunrise-gradient': 'linear-gradient(to bottom, #173E4F 0%, #2B1B16 40%, #B9653B 70%, #E97824 90%, #FFF8EC 100%)',
      }
    },
  },
  plugins: [],
}
