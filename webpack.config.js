module.exports = {
    devtool: 'source-map',
    entry: './app/App.js',
    output: {
        filename: "public/bundle.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};