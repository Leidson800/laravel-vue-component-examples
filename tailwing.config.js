module.exports = {
    darkMode: 'class',
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#6574cd',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['dark', 'light'],
      textColor: ['dark', 'light'],
    }
  }
}