module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
      extend: {
          backgroundColor: {
              'black-t-50': 'rgba(0,0,0,0.5)',
          },
          width: {
            'square-w-30': '30px',
          },
          height: {
            'square-h-30': '30px',
          },
          border: {
            'square-border': '1px solid black',
          }

      },
  },
  variants: {},
  plugins: [],
}
