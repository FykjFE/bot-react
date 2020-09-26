const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const os = require('os');
const baseUrl = 'http://localhost:8060';

let needHost = '';
try {
  let network = os.networkInterfaces();
  for (let dev in network) {
    let iface = network[dev];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        needHost = alias.address;
      }
    }
  }
} catch (e) {
  needHost = 'localhost';
}
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    hotOnly: true,
    open: false,
    port: 3000,
    overlay: true,
    inline: true,
    historyApiFallback: true,
    clientLogLevel: 'silent',
    quiet: true,
    noInfo: true,
    stats: 'errors-only',
    proxy: {
      '/api': {
        target: baseUrl,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  devtool: 'source-map',
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          ` Compiled successfully at:\n   - local:   http://localhost:3000\n   - network: http://${needHost}:3000`,
        ],
      },
      clearConsole: true,
    }),
  ],
});
