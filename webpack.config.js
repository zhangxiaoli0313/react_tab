const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: [
            "webpack-dev-server/client?http://localhost:8086/",
            `${__dirname}/src/main.js`
        ]
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devtool: 'eval-source-map',
    resolveLoader: {
        moduleExtensions: [ '-loader' ]        
    },
    resolve: {
		extensions: ['.js', '.jsx', '.sass', 'css']
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        contentBase:'./dist/',
        port:'8086',
        setup (app) {
            app.get('/api/jdlist', (req, res) => {
                const jdlist = require('./src/mock/datas/jdList.json')
                res.json(jdlist)
            })
        }
    }
}
