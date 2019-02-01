var path = require('path');

module.exports = {
  entry: {
    computers: './src/computers/computers.jsx',
  },
  output: {
    path: path.resolve(__dirname, "src/assets/js"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: "source-map"
};
// vim:et:sw=2:ts=2
