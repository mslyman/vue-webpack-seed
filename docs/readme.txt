    "babel-core": "^6.26.3",
    "babel-eslint": "^8.2.3",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",       // enables es2015 import in vue-loader (http://babeljs.io/env)
    
    "copy-webpack-plugin": "^4.5.1",    // provides static content copy (src/static -> dist/static) 
    "cross-env": "^5.1.6",              // provides cross-platform send environment variable NODE_ENV=development 
                                        //   into webpack.config.js
    "node-sass": "^4.9.0",              // dependency of sass-loader
    "sass-loader": "^7.0.2",            // sass processing (.sass -> .css), include vue template
    "css-loader": "^0.28.11",           // .css into .js
    "vue-style-loader": "^4.1.0",       // vue style processing
   
    "url-loader": "^1.0.1",             // transforms small images into base64 URIs. Big images sends to file-loader
    "file-loader": "^1.1.11",           // loads small image files into .js (inline content), 
                                        //   big image files into dist/images. 
                                        // example 1: import img1src from './../src/images/webpack.png'
                                        //          document.getElementsByClassName('wp-icon1')[0].src = img1src
                                        // example 2: <img src="./../src/images/webpack.png"
                                        // example 3: style background: url('./../src/images/webpack.png') no-repeat; 
                                        //   background-size: contain;
    
    "html-webpack-plugin": "^3.2.0",    // injects result script into index.html before </body>
    "mini-css-extract-plugin": "^0.4.0",// makes separate file /dist/main.css instead of injecting style
    
    "vue-loader": "^15.2.4",    
    "vue-template-compiler": "^2.5.16", 
    
    "webpack": "^4.10.2",
    "webpack-cli": "
    "webpack-dev-server": "^3.1.4"

    "eslint": "^4.19.1",
    "eslint-config-standard": "^11.0.0",
    "eslint-loader": "^2.0.0",
    "eslint-plugin-import": "^2.12.0",
    "eslint-plugin-node": "^6.0.1",
    "eslint-plugin-promise": "^3.8.0",
    "eslint-plugin-standard": "^3.1.0",
    "eslint-plugin-vue": "^4.5.0",      // linter

