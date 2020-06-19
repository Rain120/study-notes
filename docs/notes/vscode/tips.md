### 设置

#### 系统设置

[快捷键](#快捷键)进入

```sh
// Mac
$ command + ，

// window
$ ctrl + ,
```

![vscode-settings.png](./images/vscode-settings.png)

#### 用户设置

```sh
// Mac
$ shift + command + p
// or
$ command + p 
$ > settings

// window
$ shift + ctrl + p
// or
$ ctrl + p
$ > settings
```



![user-settings.png](./images/user-settings.png)

```json
{
    "editor.fontSize": 16,
    "workbench.colorTheme": "Monokai",
    "terminal.integrated.fontSize": 14,
    "files.autoSave": "onWindowChange",
    "fileheader.customMade": {
        "Author": "Rainy",
        "Date": "Do not edit",
        "LastEditors": "Rainy",
        "LastEditTime": "Do not edit",
    },
    "fileheader.configObj": {
        "autoAdd": false,
    },
    "workbench.iconTheme": "vscode-icons",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "window.zoomLevel": 0,
    "search.exclude": {
        "!/system/**/*.ps*": true,
        "node_modules": false,
        "system/": true
    },
    "typescript.updateImportsOnFileMove.enabled": "always",
    "tslint.autoFixOnSave": true
}
```

##### Prettier 配置

```json
{
  /*  prettier的配置 */
    // "prettier.jsxSingleQuote": true,
     "prettier.useEditorConfig": false, // 忽略.editorconfig
     "prettier.printWidth": 100, // 超过最大值换行
     "prettier.tabWidth": 4, // 缩进字节数
     "prettier.useTabs": false, // 缩进不使用tab，使用空格
     "prettier.semi": true, // 句尾添加分号
     "prettier.singleQuote": true, // 使用单引号代替双引号
     "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
     "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
     "prettier.bracketSpacing": false, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
     "prettier.disableLanguages": [
         "vue"
     ], // 不格式化vue文件，vue文件的格式化单独设置
     "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
     // "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
     "prettier.htmlWhitespaceSensitivity": "ignore",
     "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
     "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
     "prettier.jsxSingleQuote": true, // 在jsx中使用单引号代替双引号
     // "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
     "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
     // "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
     "prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
     "[json]": {
         "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "window.zoomLevel": 0,
     "diffEditor.ignoreTrimWhitespace": false,
     "[jsonc]": {
         "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
}
```



### 快捷键

#### 搜索相关

- **搜索如何排除`node_modules`**

  用户设置配置

  ```json
  {
      "search.exclude": {
          "!/system/**/*.ps*": true,
          "node_modules": false,
          "system/": true
      }
  }
  ```

- 隐藏文件夹

  ```json
  {
    "file.exclude": {
          "node_modules": true
      }
  }
  ```

  

- **搜索如何排除多个文件**

  ```
  以 , 分隔多个筛选条件
  ```

![search-exclude.png](./images/search-exclude.png)

#### 编辑相关技巧

**Note:** `Mac`展示，`window`待总结

```
command ⌘
option ⌥ (alt)
ctrl ⌃
```

- 光标移动

  ```
  // 单词移动
  option(⌥) + ➡️
  option(⌥) + ⬅️
  
  // 行首行尾移动
  command(⌘)+ ➡️
  command(⌘) + ⬅️
  
  // 单词分解移动
  ctrl(⌃) + option(⌥) + ➡️
  ctrl(⌃) + option(⌥) + ⬅️
  ```

  ![cursor-op](./images/cursor-op.gif)

- 删除一个单词

  ![delete-word.gif](./images/delete-word.gif)
  
- **行** - 复制、移动、删除、合并、插入、缩进

  ```
  1. 单行
      复制
      command + c
      shift(⇧) + option + ⬆️
      shift(⇧) + option + ⬇️
  
      移动
      option + ⬆️
      option + ⬇️
  
      删除
      command + x
  
      合并
      ctrl + j
  
      插入
      在上面插入: shift(⇧) + command + enter
      在下面插入: command + enter
  
      缩进
      向左缩进: command + [
      向右缩进: command + ]
  2. 多行
    选择: option + 鼠标选择
  
  ```

  **单行**

  ![line-op](./images/line-op.gif)

  **多行**

  ![multiple-line-op](./images/multiple-line-op.gif)
  
  **批量选择多行**
  
  ![mutil-line-select.gif](./images/mutil-line-select.gif)
  
  ```
  shift(⇧) + option(⌥)  + 鼠标拖动
  ```
  
  
  
  ![selected-mutil-line.gif](./images/selected-mutil-line.gif)
  
  ```
  command(⌘) + option(⌥) + 👆 / 👇
  ```
  
  **跳转到匹配的括号**
  
  ```
  command(⌘) + option(⌥) + |
  ```
  
  ![jump-match-brackets.gif](./images/jump-match-brackets.gif)
  
  **上插, 下插**
  
  ```
  // 上
  shift(⇧) + command(⌘) + Enter
  // 下
  command(⌘) + Enter
  ```
  
  ![insert-top-or-bottom.gif](./images/insert-top-or-bottom.gif)
  
  **撤消上一个光标操作**
  
  ```
  command(⌘) + U
  ```
  
  ![revert-last-selected.gif](./images/revert-last-selected.gif)
  
  切换`tab`
  
  ```
  ctrl(⌃) + Tab
  ```
  
  
  
  ![change-tab.gif](./images/change-tab.gif)

#### 重构

```
# 调出建议列表
command(⌘) + .
```



##### 重构函数

![refactor.gif](./images/refactor.gif)

##### 重构批量修改名字

![refactor-batch-rename.gif](./images/refactor-batch-rename.gif)

#### 自定义VSCode编辑器样式

##### 背景图片

```
{
	// 背景图片地址路径
  "background.customImages": [
        "path.jpg"
    ],
    // 背景样式
    "background.style": {
        "content": "''",
        "pointer-events": "none",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "z-index": "9999",
        "background.repeat": "no-repeat",
        "background-size": "100%,100%",
        "opacity": 0.15
    },
    "background.useFront": false,
    "background.useDefault": false,
  }
```

##### 自定义当前选定颜色主题的颜色

```
{
		// 覆盖当前选定颜色主题的颜色。
    "workbench.colorCustomizations": {
        // 活动通知徽章的背景颜色。活动栏显示在最左边或右边，允许在侧边栏的视图之间切换。
        "activityBarBadge.background": "#F44336",
        // 背景 色
        "editor.background": "#000000",
        // 当列表/树活动时所选项目的列表/树前景颜色。活动列表/树具有键盘焦点，非活动列表/树没有。
        "list.activeSelectionForeground": "#F44336",
        // 当列表/树不活动时，所选项目的列表/树前景颜色。活动列表/树具有键盘焦点，非活动列表/树没有。
        "list.inactiveSelectionForeground": "#09ff00",
        // 在列表/树中搜索时，匹配的列表/树的前景颜色将突出显示。
        "list.highlightForeground": "#F44336",
        // 当点击滚动条滑块的背景颜色。
        "scrollbarSlider.activeBackground": "#F4433650",
        // 匹配的颜色在 suggest小部件中突出显示。
        "editorSuggestWidget.highlightForeground": "#F44336",
        // 文本链接的前景色。
        "textLink.foreground": "#F44336",
        // 进度条的背景颜色，可以显示长时间运行的操作。
        "progressBar.background": "#F44336",
        // 快速选择颜色分组标签。
        "pickerGroup.foreground": "#F44336",
        // 活动选项卡底部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。
        "tab.activeBorder": "#F44336",
        // 通知链接前景颜色。通知从窗口的右下角滑入。
        "notificationLink.foreground": "#F44336",
        // 编辑器小部件的调整大小栏的边框颜色。只有当小部件选择具有调整大小的边框，并且该颜色没有被小部件覆盖时，才使用该颜色。
        "editorWidget.resizeBorder": "#F44336",
        // 编辑器小部件的边框颜色。只有当小部件选择具有边框且颜色未被小部件覆盖时，才使用该颜色。
        "editorWidget.border": "#F44336",
        // (用于设置编辑器预览)修改后的设置指示器的颜色
        "settings.modifiedItemIndicator": "#F44336",
        // (用于设置编辑器预览)节标题或活动标题的前景色。
        "settings.headerForeground": "#F44336",
        // 活动面板标题的边框颜色。面板显示在编辑器区域下面，其中包含输出和集成终端等视图。
        "panelTitle.activeBorder": "#F44336",
        // 选定面包屑项的颜色。
        "breadcrumb.activeSelectionForeground": "#F44336",
        // 菜单中所选菜单项的前景色
        "menu.selectionForeground": "#F44336",
        // 菜单栏中所选菜单项的前景色。
        "menubar.selectionForeground": "#F44336",
        // 当前搜索匹配的边框颜色。
        "editor.findMatchBorder": "#F44336",
        // 工作台中文本选择的背景颜色(例如用于输入字段或文本区域)。注意，这不适用于编辑器中的选择。
        "selection.background": "#F4433640",
    }
}
```

##### 设置编辑器UI元素配色(注释，变量，函数等)

```
{
	"editor.tokenColorCustomizations": {
        // 注释
        "comments": "#9f9fa1", 
        // 变量名
        "variables": "#05e3f3",
        // 函数名
        "functions": "#0771fc", 
        // 数字
        "numbers": "#AE81FF",
        // 关键字
        // "keywords": "#0a0",
        // 字符串
        // "strings": "#e2d75dbd", 
  }
}
```

##### 我的配置

```
{
    "editor.fontSize": 16,
    "workbench.colorTheme": "Monokai",
    // 覆盖当前选定颜色主题的颜色。
    "workbench.colorCustomizations": {
        // 活动通知徽章的背景颜色。活动栏显示在最左边或右边，允许在侧边栏的视图之间切换。
        "activityBarBadge.background": "#F44336",
        // 背景 色
        "editor.background": "#000000",
        // 当列表/树活动时所选项目的列表/树前景颜色。活动列表/树具有键盘焦点，非活动列表/树没有。
        "list.activeSelectionForeground": "#F44336",
        // 当列表/树不活动时，所选项目的列表/树前景颜色。活动列表/树具有键盘焦点，非活动列表/树没有。
        "list.inactiveSelectionForeground": "#09ff00",
        // 在列表/树中搜索时，匹配的列表/树的前景颜色将突出显示。
        "list.highlightForeground": "#F44336",
        // 当点击滚动条滑块的背景颜色。
        "scrollbarSlider.activeBackground": "#F4433650",
        // 匹配的颜色在 suggest小部件中突出显示。
        "editorSuggestWidget.highlightForeground": "#F44336",
        // 文本链接的前景色。
        "textLink.foreground": "#F44336",
        // 进度条的背景颜色，可以显示长时间运行的操作。
        "progressBar.background": "#F44336",
        // 快速选择颜色分组标签。
        "pickerGroup.foreground": "#F44336",
        // 活动选项卡底部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。
        "tab.activeBorder": "#F44336",
        // 通知链接前景颜色。通知从窗口的右下角滑入。
        "notificationLink.foreground": "#F44336",
        // 编辑器小部件的调整大小栏的边框颜色。只有当小部件选择具有调整大小的边框，并且该颜色没有被小部件覆盖时，才使用该颜色。
        "editorWidget.resizeBorder": "#F44336",
        // 编辑器小部件的边框颜色。只有当小部件选择具有边框且颜色未被小部件覆盖时，才使用该颜色。
        "editorWidget.border": "#F44336",
        // (用于设置编辑器预览)修改后的设置指示器的颜色
        "settings.modifiedItemIndicator": "#F44336",
        // (用于设置编辑器预览)节标题或活动标题的前景色。
        "settings.headerForeground": "#F44336",
        // 活动面板标题的边框颜色。面板显示在编辑器区域下面，其中包含输出和集成终端等视图。
        "panelTitle.activeBorder": "#F44336",
        // 选定面包屑项的颜色。
        "breadcrumb.activeSelectionForeground": "#F44336",
        // 菜单中所选菜单项的前景色
        "menu.selectionForeground": "#F44336",
        // 菜单栏中所选菜单项的前景色。
        "menubar.selectionForeground": "#F44336",
        // 当前搜索匹配的边框颜色。
        "editor.findMatchBorder": "#F44336",
        // 工作台中文本选择的背景颜色(例如用于输入字段或文本区域)。注意，这不适用于编辑器中的选择。
        "selection.background": "#F4433640",
    },
    "editor.tokenColorCustomizations": {
        // 注释
        "comments": "#9f9fa1", 
        // 变量名
        "variables": "#05e3f3",
        // 函数名
        "functions": "#0771fc", 
        // 数字
        "numbers": "#AE81FF",
        // 关键字
        // "keywords": "#0a0",
        // 字符串
        // "strings": "#e2d75dbd", 
    },
    "terminal.integrated.fontSize": 14,
    "files.autoSave": "onWindowChange",
    "fileheader.customMade": {
        "Author": "Rainy",
        "Date": "Do not edit",
        "LastEditors": "Rainy",
        "LastEditTime": "Do not edit",
    },
    "fileheader.configObj": {
        "autoAdd": false,
    },
    "workbench.iconTheme": "vscode-icons",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "window.zoomLevel": -1,
    "search.exclude": {
        "!/system/**/*.ps*": true,
        // "**/node_modules": false,
        // "node_modules": false,
        "system/": true
    },
    "typescript.updateImportsOnFileMove.enabled": "always",
    "tslint.autoFixOnSave": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "editor.columnSelection": false,
    "editor.multiCursorModifier": "alt",
    "todo-tree.tree.showScanModeButton": false,

    // TODO Tree Setting
    // "todo-tree.regex.regex": "((//|#|<!--|;|/\\*|^)\\s*($TAGS):|^\\s*- \\[ \\])",
    "todo-tree.general.tags": [
        "TODO:",
        "FIXME:",
        "DONE:",
        "NOTE:",
        "INFO:",
    ],
    "todo-tree.highlights.defaultHighlight": {
        "gutterIcon": true
    },
    "todo-tree.highlights.customHighlight": {
        "TODO:": {
            "foreground": "#fff",
            "background": "#ffbd2a",
            "iconColour": "#ffbd2a"
        },
        "FIXME:": {
            "foreground": "#fff",
            "background": "#f06292",
            "icon": "flame",
            "iconColour": "#f06292"
        },
        "DONE": {
            "background": "green",
            "icon": "issue-closed",
            "rulerColour": "green",
            "iconColour": "green",
        },
        "INFO:": {
            "foreground": "#fff",
            "background": "#3f83f8",
            "icon": "info",
            "iconColour": "#3f83f8"
        },
        "NOTE:": {
            "foreground": "#fff",
            "background": "#3f83f8",
            "icon": "note",
            "iconColour": "#3f83f8"
        },
    },
    
    // "editor.formatOnSave": true,
    // "eslint.autoFixOnSave": true,
    /*  prettier的配置 */
    // "prettier.jsxSingleQuote": true,
     "prettier.useEditorConfig": false, // 忽略.editorconfig
     "prettier.printWidth": 100, // 超过最大值换行
     "prettier.tabWidth": 4, // 缩进字节数
    //  "prettier.tabWidth": 2, // 缩进字节数
     "prettier.useTabs": false, // 缩进不使用tab，使用空格
     "prettier.semi": true, // 句尾添加分号
     "prettier.singleQuote": true, // 使用单引号代替双引号
     "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
     "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
     "prettier.bracketSpacing": false, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
     "prettier.disableLanguages": [
         "vue"
     ], // 不格式化vue文件，vue文件的格式化单独设置
     "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
     // "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
     "prettier.htmlWhitespaceSensitivity": "ignore",
     "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
     "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
     "prettier.jsxSingleQuote": true, // 在jsx中使用单引号代替双引号
     // "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
     "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
     // "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
     "prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
     "[json]": {
         "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "window.zoomLevel": 0,
     "diffEditor.ignoreTrimWhitespace": false,
     "[jsonc]": {
         "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
    "git.autofetch": true,
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "hediet.vscode-drawio.local-storage": {
        ".drawio-config": {
            "language": "",
            "customFonts": [],
            "libraries": "general;uml;er;bpmn;flowchart;basic;arrows2",
            "customLibraries": [
                "L.scratchpad"
            ],
            "plugins": [],
            "recentColors": [],
            "formatWidth": "240",
            "createTarget": false,
            "pageFormat": {
                "x": 0,
                "y": 0,
                "width": 827,
                "height": 1169
            },
            "search": true,
            "showStartScreen": true,
            "gridColor": "#d0d0d0",
            "darkGridColor": "#6e6e6e",
            "autosave": true,
            "resizeImages": null,
            "openCounter": 0,
            "version": 18,
            "unit": 1,
            "isRulerOn": false,
            "ui": ""
        }
    },
    "workbench.tree.renderIndentGuides": "always",
}
```

#### Debugger

[20个Chrome DevTools调试技巧](https://blog.fundebug.com/2018/08/22/art-of-debugging-with-chrome-devtools/)

#### 参考资料

[VS Code中文文档](https://jeasonstudio.gitbooks.io/vscode-cn-doc/)

[VScode官网 快捷键 Mac 版](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

