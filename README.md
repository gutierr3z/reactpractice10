

# GIT:
```
git init
git remote add origin https://github.com/gutierr3z/reactpractice4.git
git remote -v
```
create README.md
```
git add .
git commit -m 'initial commit'
```
// push the current branch and set the remote as upstream
```
git push --set-upstream origin master
```
create .gitignore
```
node_modules
www/bundle.js
```
# NPM:
```
npm init -y
```
# BABEL:
```
npm install --save babel-core \s\s
npm install --save babel-preset-latest \s\s
npm install --save babel-preset-react
```
create .babelrc
```
{
    "presets": [
        ["latest", { "modules": false }],
        "react"
    ]
}
```
# WEBPACK:
```
npm install --save webpack babel-loader
```
create src/app.js \s\s
create webpack.config.js \s\s



(webpack.config.js)-----
```javascript
const path = require('path');

module.exports = {
 context: path.join(__dirname, 'src'),
 entry: [
   './app.js',
 ],
 //  watch: true,
 plugins: [
  // new webpack.DefinePlugin({
  //   'process.env': {
  //     'NODE_ENV': JSON.stringify('production')
  //   }
  // }),
  // // new webpack.optimize.DedupePlugin(), //dedupe similar code 
  // new webpack.optimize.UglifyJsPlugin(), //minify everything
  // new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
 ],
 output: {
   path: path.join(__dirname, 'www'),
   filename: 'bundle.js'
 },
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: [
         'babel-loader',
       ],
     },
   ],
 },
 resolve: {
   modules: [
     path.join(__dirname, 'node_modules'),
   ],
 },
};
```
# EXPRESS:
```
npm install --save express webpack-dev-middleware
```
create server.js \s\s
create www/index.html \s\s

(server.js)-----
```javascript
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
 
const compiler = webpack(webpackConfig);

app.use(express.static( __dirname + '/www' ));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen( process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at 3000');
});
```
# REACT:
```
npm install --save react react-dom
```
# REDUX:

npm install --save redux \s\s
npm install --save react-redux

# DEPLOY:

add to package.json's scripts:
```
    "compile": "webpack", 
    "start": "node server.js",
```

execute compile command:

```
npm run compile
```


# CSS MODULES

npm install --save-dev css-loader \s\s
npm install --save style-loader \s\s
npm install --save extract-text-webpack-plugin \s\s

(webpack.config.js)-----
```javascript
module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: [
         'babel-loader',
       ],
     },
     {
       test: /\.css$/,
       use: [
         {
           loader: 'style-loader'
         },
         {
          loader: 'css-loader',
          options: {
            modules: true,
            // localIdentName: '[path],oo-[name]__[local]--[hash:base64:5]'
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
       ]
     }
   ]
 },
 ```