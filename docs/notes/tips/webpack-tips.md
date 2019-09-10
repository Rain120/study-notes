### webpack 打包优化

#### moment 按需加载语言包

```javascript
// webpack.config.js => 只需要加载中文和英文语言包
plugins: [
  new webpack.ContextReplacementPlugin(
    /moment[/\\]locale$/,
    /zh-cn|en/
  ),
]
```

<img src="./images/moment.png" alt="moment" style="zoom: 33%;" />

#### Usage

```javascript
new webpack.ContextReplacementPlugin(
  resourceRegExp: RegExp,
  newContentResource?: string,
  newContentRecursive?: boolean,
  newContentRegExp?: RegExp
)
```

#### `Documentation`

[Webpack ContextReplacementPlugin](https://webpack.docschina.org/plugins/context-replacement-plugin/)

#### Lodash 按需加载

1. `cherry pick`

```javascript
import get from 'lodash/get'
```

2. `Plugin`: `babel-plugin-lodash` 

   ```javascript
   // .babelrc
   {
     "env": {
       "development": {
         plugins: [
           [
             "import", [
               {
                 "libraryName": "lodash",
                 "libraryDirectory": "",
                 "camel2DashComponentName": false
               }
             ]
           ],
           "lodash"
         ]  
       },
       "production": {
         plugins: [
           [
             "import", [
               {
                 "libraryName": "lodash",
                 "libraryDirectory": "",
                 "camel2DashComponentName": false
               }
             ]
           ],
           "lodash"
         ]  
       }
     }
   }
   ```

   #### `Documentation`

   [babel-plugin-import](https://github.com/ant-design/babel-plugin-import#options)

<img src="./images/lodash.png" alt="lodash" style="zoom:33%;" />

