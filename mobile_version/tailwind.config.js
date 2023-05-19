/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        body: 'Roboto_400Regular',
        title: 'Roboto_700Bold',
        alt: 'BaiJamjuree_700Bold'
      }
    },
  },
  plugins: [],
}

