module.exports = {
  content: ['./index.html', './src/**/*{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      //padding: '1rem'
    },
    extend: {
      boxShadow: {
        custom: '0 20px 25px -5px rgb(0, 0, 0, .8), 0 10px 10px -5px rgb(0, 0, 0, 0.4)'
      }
        
    }
  },
  plugins: [],
}
