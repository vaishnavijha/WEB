const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    optimization : {
        splitChunks: {chunks: "all", name :"vendor"}
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
      })
    ]
  }