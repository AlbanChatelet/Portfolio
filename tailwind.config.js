/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mise-en-evidence': '#5478e7',
        'bg-sombre': '#354471',
        interactions: '#0094d3',
        sections: '#def5ff'
      },
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '2.625rem',
        '6xl': '3rem',
        '7xl': '3.125rem'
      },
      fontFamily: {
        'haut-de-page': 'Departure Mono',
        'source-code-pro': 'Source Code Pro',
        handjet: 'Handjet',
        'source-sans-3': 'Source Sans 3',
        poppins: 'Poppins'
      },
      borderRadius: {
        'rounded-0': 'NaNrem',
        'rounded-1': 'NaNrem',
        'rounded-2': 'NaNrem',
        'rounded-3': 'NaNrem',
        'rounded-4': 'NaNrem',
        'rounded-5': 'NaNrem',
        'rounded-6': 'NaNrem',
        'rounded-7': 'NaNrem'
      }
    }
    
  },
  plugins: []
}
