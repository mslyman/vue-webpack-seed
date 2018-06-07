2018-05-06
Windows 10

Install latest node.js 10.3.0

delete 2 files  C:\Program Files\nodejs\npm   C:\Program Files\nodejs\npm.cmd

check exists files C:\Users\msemisotov\AppData\Roaming\npm\npm  C:\Users\msemisotov\AppData\Roaming\npm\npm.cmd

check "prefix" variable:
npm config get prefix -g
(must return C:\Users\<username>\AppData\Roaming\npm)

Install latest npm 
npm install -g npm@latest

npm -v
6.1.0

-------------  Install webpack --------------
https://www.sitepoint.com/beginners-guide-webpack-module-bundling/

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}




package.json
{
  "version": "1.0.0",
  "name": "a",
  "private": true,
  "dependencies": {
    "jquery": "^3.3.1",
    "popper.js": "^1.12.9",
    "bootstrap": "^4.0.0",
    "vue": "2.5.16"
  }
}
npm install

---------------------------------------- Vue + webpack4
https://itnext.io/vuejs-and-webpack-4-from-scratch-part-1-94c9c28a534a


new VueLoaderPlugin(),
{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
loader: 'vue-style-loader!css-loader!sass-loader',


