const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Fiber = require('fibers');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },{
        test: /\.(scss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader, // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            implementation: require('sass'),
            fiber: Fiber
          }
        },
      ]},
      {
        test: /\.(css)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },{
          loader: 'css-loader'
        }]
      },
      {
        test: /\.(ttf|eot|svg|gif|otf|woff|woff2|png)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        include: [/fonts/, /font/],
  
        options: {
          name: '[hash].[ext]',
          outputPath: 'css/',
          publicPath: url => '../css/' + url
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: `css/all.css`
    }),
  ]
};