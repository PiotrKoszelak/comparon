const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    watch: true, 
    // pliki js wejściowe
    entry: {
        main: './src/js/main.js',
      },
      output: {
        // folder docelowy i nazwa plików wyjściowych
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].bundle.js',
        publicPath: "{% static 'dist/' %}"
      },
      module: {
        rules: [
          //babel
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          // html
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
          // img
          {
            test: /\.(png|jpg)$/,
            use: {
              loader: "url-loader",
            },
          },
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/html/main.html",
          publicPath: "{% static 'dist/' %}",
          chunks: ['main'],
          filename: "./main.html"
        }),
      ]
    };