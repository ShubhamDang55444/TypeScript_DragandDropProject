const path = require('path');

module.exports=
{
    mode:'production--',
    entry: './src/app.ts',
    output:{
        filename: 'bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: 'dist/src',
    },
    
    devtool:'inline-source-map',
    module:
    {
        rules:
        [
            {
                test:/.\.ts/,
                use:'ts-loader',
                exclude:/node-modules/
            }
        ]
        
    },
    resolve:
        {
            extensions:['.ts','.js']
        }

};