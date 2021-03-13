module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yell: '#E2AC0F',
        blu: '#082C66',
        bac: '#333333',
        grey: '#C4C4C4',
      },
      fontSize: {
        'tiny': '10px',
        'smol': '12px',
        'mid': '14px',
        'lar': '16px',
    },
      fontFamily: {
        body: ['Roboto']
      },
      keyframes: {
        down: {
          '0%': { 
            top: '0',
            height: '0' },
          '50%': { 
            top: '0',
            height: '100%' },
          '100%': { 
              top: '100%',
              height: '0' }
          }
        },
        animation: {
          down: 'down 3s cubic-bezier(.74, .06, .4, .92) forwards',
         }
       },
     },
 variants: {
    extend: {},
  },
  plugins: [],
}
