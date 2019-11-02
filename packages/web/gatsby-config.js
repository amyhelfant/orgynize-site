module.exports = {
    plugins: [
        `gatsby-plugin-react-native-web`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Over the Rainbow`
                    }
                ]
            }
        }
    ]
};
