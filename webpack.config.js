const path = require('path');

module.exports = {
    context: path.join(__dirname,'app','assets'),
    entry: {
        app: './scripts/App.js'
},
    output: {
        path: path.join(__dirname, 'app', 'temp', 'scripts'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname,'app','assets'),
                query: {
                    presets: ['es2015']
                },
            }
        ]
    }
};

