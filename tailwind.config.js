/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: `${1024 + 25 * 2}px`,
    },
    container: {
      padding: '25px',
      center: true,
    },
    extend: {
      colors: {
        gunmetal: '#293241',
        emerald: '#6FD08C',
        calm: '#E5E5E5',
        grey: '#BFBFBF',
      },
      fontFamily: {
        body: ['var(--font-body)'],
        display: ['var(--font-display)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-medium': 'float-medium 15s ease-in-out infinite',
        'float-slower': 'float-slower 25s ease-in-out infinite',
        'float-fast': 'float-fast 12s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-40px, -40px) scale(1.15)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-50px, 30px) scale(1.2)' },
          '66%': { transform: 'translate(30px, -20px) scale(0.85)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, 20px) scale(1.1)' },
          '50%': { transform: 'translate(-30px, 10px) scale(0.95)' },
          '75%': { transform: 'translate(10px, -25px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
