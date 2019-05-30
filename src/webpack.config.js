const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + '/assets',
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test:  /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}