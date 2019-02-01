var path = require('path');

module.exports = {
  entry: {
    computers: './computers/computers.jsx',
  },
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
// vim:et:sw=2:ts=2
