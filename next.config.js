module.exports = {
  strictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack"
        }
      ]
    });

    return config;
  }
};
