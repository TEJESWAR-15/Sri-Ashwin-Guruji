/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f2',
          100: '#f9d7d7',
          200: '#f4b1b1',
          300: '#eb8a8a',
          400: '#e16464',
          500: '#d33f3f',
          600: '#bc2c2c',
          700: '#8B0000', // deep maroon
          800: '#7a1b1b',
          900: '#621818',
        },
        saffron: {
          50: '#fff8f0',
          100: '#ffe8d1',
          200: '#ffd2a3',
          300: '#ffb367',
          400: '#ff9538',
          500: '#FF7722', // saffron
          600: '#e6580c',
          700: '#bf4009',
          800: '#9a3010',
          900: '#7e2910',
        },
        gold: {
          50: '#fefbea',
          100: '#fdf6c6',
          200: '#fbeea4',
          300: '#f8df61',
          400: '#f4cd30',
          500: '#D4AF37', // divine gold
          600: '#c59222',
          700: '#a46f1c',
          800: '#85571c',
          900: '#6d481b',
        },
        spiritual: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#dcd4fe',
          300: '#cabffc',
          400: '#ac95f7',
          500: '#9168f3',
          600: '#8047e4',
          700: '#6d33c9',
          800: '#5b2ca5',
          900: '#4b2885',
        }
      },
      fontFamily: {
        spiritual: ['Palatino', 'Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'temple-pattern': "url('https://images.pexels.com/photos/784707/pexels-photo-784707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'divine-gradient': 'linear-gradient(to right, #8B0000, #D4AF37)'
      },
      boxShadow: {
        'divine': '0 4px 14px 0 rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
};