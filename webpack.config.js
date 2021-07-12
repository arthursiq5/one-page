const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    jquery: [
      'jquery'
    ],
    popper: [
      'popper.js'
    ],
    bootstrapcss: [
      'bootstrap/dist/css/bootstrap.min.css'
    ],
    bootstrapjs: [
      'bootstrap',
    ],
    main: ['./src/main.js', './styles/main.css']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset',
        loader: 'file-loader',
        options: {
          context: 'project',
          name: '[path][name].[ext]',
      }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    })
  ],
};
