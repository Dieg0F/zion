module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-3']
            }
        },
        {
            test: /\.(s?)css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
}