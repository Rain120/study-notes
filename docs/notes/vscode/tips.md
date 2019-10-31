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

- 行 - 复制、移动、删除、合并、插入、缩进

  ```
  1. 单行
      复制
      command + c
      shift + option + ⬆️
      shift + option + ⬇️
  
      移动
      option + ⬆️
      option + ⬇️
  
      删除
      command + x
  
      合并
      ctrl + j
  
      插入
      在上面插入: shift + command + enter
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

#### 参考资料

[VS Code中文文档](https://jeasonstudio.gitbooks.io/vscode-cn-doc/)

