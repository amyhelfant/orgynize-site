module.exports = {
  plugins: [`gatsby-plugin-react-native-web`,  {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Over the Rainbow`,
          },
        ],
      },
    }],
}