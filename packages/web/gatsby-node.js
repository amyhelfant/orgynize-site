exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage == "develop"){
      config.devServer = {
        hot: false,
        inline: false,
    }
  };
  return config;
};