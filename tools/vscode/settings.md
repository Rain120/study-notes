---
title: Configuration
---

### 我的VS Code 配置

```json
{
    "tabnine.experimentalAutoImports": true,
    "todo-tree.tree.showScanModeButton": false,
    "workbench.iconTheme": "vscode-icons",
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "editor.fontSize": 16,
    // 覆盖当前选定颜色主题的颜色。
    "workbench.colorCustomizations": {
        // 活动通知徽章的背景颜色。活动栏显示在最左边或右边，允许在侧边栏的视图之间切换。
        // "activityBarBadge.background": "#F44336",
        // 背景 色
        // "editor.background": "#0f0909",
        "editor.background": "#000000",
        // 当列表/树活动时所选项目的列表/树前景颜色。活动列表/树具有键盘焦点，非活动列表/树没有。
        // "list.activeSelectionForeground": "#F44336",
        // 当列表/树不活动时，所选项目的列表/树前景颜色。活动列表/树具有键盘焦点，非活动列表/树没有。
        // "list.inactiveSelectionForeground": "#09ff00",
        // 在列表/树中搜索时，匹配的列表/树的前景颜色将突出显示。
        // "list.highlightForeground": "#F44336",
        // 当点击滚动条滑块的背景颜色。
        // "scrollbarSlider.activeBackground": "#F4433650",
        // 匹配的颜色在 suggest小部件中突出显示。
        // "editorSuggestWidget.highlightForeground": "#F44336",
        // 文本链接的前景色。
        // "textLink.foreground": "#F44336",
        // 进度条的背景颜色，可以显示长时间运行的操作。
        // "progressBar.background": "#F44336",
        // 快速选择颜色分组标签。
        // "pickerGroup.foreground": "#F44336",
        // 活动选项卡底部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。
        "tab.activeBorder": "#F44336"
        // 通知链接前景颜色。通知从窗口的右下角滑入。
        // "notificationLink.foreground": "#F44336",
        // 编辑器小部件的调整大小栏的边框颜色。只有当小部件选择具有调整大小的边框，并且该颜色没有被小部件覆盖时，才使用该颜色。
        // "editorWidget.resizeBorder": "#F44336",
        // 编辑器小部件的边框颜色。只有当小部件选择具有边框且颜色未被小部件覆盖时，才使用该颜色。
        // "editorWidget.border": "#F44336",
        // (用于设置编辑器预览)修改后的设置指示器的颜色
        // "settings.modifiedItemIndicator": "#F44336",
        // (用于设置编辑器预览)节标题或活动标题的前景色。
        // "settings.headerForeground": "#F44336",
        // 活动面板标题的边框颜色。面板显示在编辑器区域下面，其中包含输出和集成终端等视图。
        // "panelTitle.activeBorder": "#F44336",
        // 选定面包屑项的颜色。
        // "breadcrumb.activeSelectionForeground": "#F44336",
        // 菜单中所选菜单项的前景色
        // "menu.selectionForeground": "#F44336",
        // 菜单栏中所选菜单项的前景色。
        // "menubar.selectionForeground": "#F44336",
        // 当前搜索匹配的边框颜色。
        // "editor.findMatchBorder": "#F44336",
        // 工作台中文本选择的背景颜色(例如用于输入字段或文本区域)。注意，这不适用于编辑器中的选择。
        // "selection.background": "#F4433640",
    },
    "editor.tokenColorCustomizations": {
        // 注释
        // "comments": "#9f9fa1",
        // 变量名
        // "variables": "#05e3f3",
        // 函数名
        // "functions": "#0771fc",
        // 数字
        // "numbers": "#AE81FF",
        // 关键字
        // "keywords": "#0a0",
        // 字符串
        // "strings": "#e2d75dbd",
    },
    "terminal.integrated.fontSize": 14,
    "files.autoSave": "onWindowChange",
    "fileheader.customMade": {
        "Author": "Rainy [https://github.com/rain120]",
        "Date": "Do not edit",
        "LastEditors": "Rainy",
        "LastEditTime": "Do not edit"
    },
    "fileheader.configObj": {
        "createHeader": false,
        "autoAdd": false
    },
    "javascript.updateImportsOnFileMove.enabled": "always",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // 解决 code helper 吃进程问题
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        // "**/tmp": true,
        // "**/node_modules": true,
        "**/bower_components": true
        // "**/dist": true
    },
    "files.watcherExclude": {
        "**/.git/objects/**": true,
        "**/.git/subtree-cache/**": true,
        "**/node_modules/**": true,
        "**/tmp/**": true,
        "**/bower_components/**": true,
        "**/dist/**": true
    },
    "search.exclude": {
        "!/system/**/*.ps*": true,
        "**/node_modules": false,
        "system/": true
    },
    "search.useIgnoreFiles": false,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "tslint.autoFixOnSave": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.columnSelection": false,
    "editor.multiCursorModifier": "alt",
    // TODO Tree Setting
    // "todo-tree.regex.regex": "((//|#|<!--|;|/\\*|^)\\s*(@?)($TAGS):|^\\s*- \\[ \\])",
    "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*(@?)($TAGS)",
    // INFO: 忽略大小写
    "todo-tree.regex.regexCaseSensitive": false,
    "todo-tree.tree.autoRefresh": true,
    "todo-tree.general.tags": [
        "TODO:",
        "HOTFIX:",
        "BUGFIX",
        "DONE:",
        "NOTE:",
        "INFO:",
        "LINK_TO",
        "TAG",
        "N.B.",
        "HACK",
        "[ ]",
        "[x]"
    ],
    "todo-tree.highlights.defaultHighlight": {
        "gutterIcon": true
        // "type": "text-and-comment"
    },
    // icon: https://microsoft.github.io/vscode-codicons/dist/codicon.html
    "todo-tree.highlights.customHighlight": {
        "[ ]": {
            "background": "#F44336"
        },
        "[x]": {
            "background": "#00de00"
        },
        "TODO:": {
            "foreground": "#fff",
            "background": "#ffbd2a",
            "iconColour": "#ffbd2a",
        },
        "HOTFIX:": {
            "foreground": "#fff",
            "background": "#f06292",
            "icon": "flame",
            "iconColour": "#f06292"
        },
        "DONE": {
            "background": "#2BBE4E",
            "icon": "issue-closed",
            "rulerColour": "#2BBE4E",
            "iconColour": "#2BBE4E"
        },
        "INFO:": {
            "foreground": "#fff",
            "background": "#3f83f8",
            "icon": "info",
            "iconColour": "#3f83f8"
        },
        "LINK_TO:": {
            "foreground": "#fff",
            "background": "#3f33f8",
            "icon": "info",
            "iconColour": "#3f33f8"
        },
        "NOTE:": {
            "foreground": "#fff",
            "background": "#3f83f8",
            "icon": "note",
            "iconColour": "#3f83f8"
        },
        "TAG": {
            "foreground": "#fff",
            "background": "#03A9F4",
            "icon": "tag",
            "rulerColour": "#03A9F4",
            "iconColour": "#03A9F4",
            "rulerLane": "full"
        },
        "BUGFIX": {
            "foreground": "#fff",
            "background": "#ee3c2c",
            "icon": "bug",
            "rulerColour": "#ee3c2c",
            "iconColour": "#ee3c2c",
            "rulerLane": "full"
        },
        "N.B.": {
            "foreground": "#fff",
            "background": "#ffbd2a",
            "icon": "shield",
            "rulerColour": "#ffbd2a",
            "iconColour": "#ffbd2a",
            "rulerLane": "full"
        },
        "HACK": {
            "foreground": "#fff",
            "background": "#cb2431",
            "icon": "thumbsdown",
            "rulerColour": "#cb2431",
            "iconColour": "#cb2431",
            "rulerLane": "full"
        }
    },
    "editor.formatOnSave": true,
    /*  prettier的配置 */
    // "prettier.jsxSingleQuote": true,
    "prettier.useEditorConfig": false, // 忽略.editorconfig
    "prettier.printWidth": 90, // 超过最大值换行
    "prettier.tabWidth": 4, // 缩进字节数
    //  "prettier.tabWidth": 2, // 缩进字节数
    "prettier.useTabs": false, // 缩进不使用tab，使用空格
    "prettier.semi": true, // 句尾添加分号
    "prettier.singleQuote": true, // 使用单引号代替双引号
    "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    "prettier.bracketSpacing": false, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    "prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
    "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
    // "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
    "prettier.htmlWhitespaceSensitivity": "ignore",
    "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
    "prettier.jsxSingleQuote": true, // 在jsx中使用单引号代替双引号
    // "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
    "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
    // "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
    // "prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "git.autofetch": true,
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "hediet.vscode-drawio.local-storage": "eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWw7dW1sO2VyO2JwbW47Zmxvd2NoYXJ0O2Jhc2ljO2Fycm93czJcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltcIm5vbmVcIixcIkZGRkZDQ1wiLFwiMzMzM0ZGXCIsXCIwMDAwMDBcIixcIjY2QjJGRlwiLFwiMDAwMEZGXCIsXCJFQTZCNjZcIixcIjk3RDA3N1wiLFwiMDA2NkNDXCJdLFwiZm9ybWF0V2lkdGhcIjoyNDAsXCJjcmVhdGVUYXJnZXRcIjpmYWxzZSxcInBhZ2VGb3JtYXRcIjp7XCJ4XCI6MCxcInlcIjowLFwid2lkdGhcIjo4MjcsXCJoZWlnaHRcIjoxMTY5fSxcInNlYXJjaFwiOnRydWUsXCJzaG93U3RhcnRTY3JlZW5cIjp0cnVlLFwiZ3JpZENvbG9yXCI6XCIjZDBkMGQwXCIsXCJkYXJrR3JpZENvbG9yXCI6XCIjRDREMEMwXCIsXCJhdXRvc2F2ZVwiOnRydWUsXCJyZXNpemVJbWFnZXNcIjpudWxsLFwib3BlbkNvdW50ZXJcIjowLFwidmVyc2lvblwiOjE4LFwidW5pdFwiOjEsXCJpc1J1bGVyT25cIjpmYWxzZSxcInVpXCI6XCJcIn0ifQ==",
    "timeline.pageSize": 0,
    "search.actionsPosition": "right",
    "cSpell.userWords": ["Mobx", "customizer"],
    "leetcode.endpoint": "leetcode-cn",
    "leetcode.workspaceFolder": "/Users/zhongchao03/.leetcode",
    "leetcode.defaultLanguage": "javascript",
    "auto-close-tag.activationOnLanguage": [
        "xml",
        "php",
        "blade",
        "ejs",
        "jinja",
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "plaintext",
        "markdown",
        "vue",
        "liquid",
        "erb",
        "lang-cfml",
        "cfml",
        "HTML (EEx)",
        "HTML (Eex)",
        "plist"
    ],
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    // "[typescript]": {
    //     "editor.defaultFormatter": "esbenp.prettier-vscode"
    // },
    "editor.linkedEditing": true,
    "[markdown]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[less]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "commentTranslate.targetLanguage": "zh-CN",
    "commentTranslate.multiLineMerge": true,
    "commentTranslate.concise": true,
    "[dockerfile]": {
        "editor.defaultFormatter": "ms-azuretools.vscode-docker"
    },
    "vscodeGoogleTranslate.preferredLanguage": "Chinese (Simplified)",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "[yaml]": {
        "editor.defaultFormatter": "redhat.vscode-yaml"
    },
    "color-highlight.languages": ["*"],
    "typescript.locale": "en",
    "cSpell.enableFiletypes": ["typescriptreact"],
    "workbench.colorTheme": "One Dark Pro",
    "editor.inlineSuggest.enabled": true,
    "security.workspace.trust.untrustedFiles": "open",
    "github.copilot.enable": {
        "*": true,
        "yaml": true,
        "plaintext": false,
        "markdown": false
    },
    "workbench.editorAssociations": {
        "*.sketch": "default"
    },
    "diffEditor.maxComputationTime": 0,
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}

```

