const webpack = require('webpack');

module.exports = {
  // Các cấu hình khác của Webpack...
  
  resolve: {
    fallback: {
      process: require.resolve('process/browser'), // Fallback cho process
      util: require.resolve('util/'),               // Fallback cho util (nếu cần)
    },
  },

  plugins: [
    // Các plugin khác nếu có
    new webpack.ProvidePlugin({
      process: 'process/browser', // Cung cấp process cho các module cần thiết
    }),
  ],

  // Các cấu hình khác...
};
