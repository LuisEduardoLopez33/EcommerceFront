var path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: "/public"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins: [
                            "react-hot-loader/babel",
                            "jsx-control-statements"
                        ]
                    }
                }
            },
            {
                test:/\.(png|gif|jpg|svg)$/,
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            },
            { // Loader para css
                test: /\.css$/,
                use:  ['style-loader','css-loader']
            },
        ]
    },

    plugins:[
        new MiniCssExtractPlugin()
    ],
    devServer: {
        historyApiFallback:true,
    }
}