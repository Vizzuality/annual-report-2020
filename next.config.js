const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(['react-three-fiber']);

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|webm|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('file-loader'),
          options: {
            limit: config.inlineImageLimit,
            publicPath: `/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins([optimizedImages], withTM(nextConfig));

