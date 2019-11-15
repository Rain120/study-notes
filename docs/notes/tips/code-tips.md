#### 如何规范你的 git commit 、代码格式化、自动添加Changelog？

##### [commitizen](https://github.com/commitizen/cz-cli)

**Note**: `npm 5.2+`

````sh
npm install commitizen -g
```

`package.json`

```json
{
  "scripts": {
    "cz": "npx git-cz"
  }
}
```



##### husky + commitlint + lint-staged + conventional-changelog-cli

- 安装`commitlint`

```sh
npm install @commitlint/cli @commitlint/config-conventional --save-dev
```

两种方式配置

- 直接使用`angular`的规范

```sh
npm install @commitlint/cli @commitlint/config-angular --save-dev
```

`commitlint.config.js`

```js
module.exports = {
  extends: ['@commitlint/config-angular']
}
```



- 配置

`commitlint.config.js`

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
        2,
        'always',
        [
          'feat',
          'fix',
          'docs',
          'style',
          'refactor',
          'perf',
          'test',
          'build',
          'ci',
          'chore',
          'revert',
          'config'
        ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 150],
  },
};
```



```
build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：文档更新
feat：新增功能
merge：分支合并 Merge branch ? of ?
fix：bug 修复
perf：性能, 体验优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型
```



- 安装`lint-staged`

```sh
npm install lint-staged --save-dev
```

`package.json`

```json
{
  "scripts": {
    "lint-staged": "lint-staged",
    // etc ...
    "lint-staged:ts": "./node_modules/tslint/bin/tslint -c ./tslint.json src/**/*.ts src/**/*.tsx"
  },
  "lint-staged": {
    "{src}/**/*.{ts,tsx}": [
      "npm run lint-staged:ts",
      "git add"
    ],
    "{src}/**/*.less": "stylelint --syntax less",
    // etc...
  },
}
```



- 安装`husky`

```sh
npm install husky --save-dev
```

`package.json`

```json
{
  "husky": {
    "hooks": {
    	"pre-commit": [
        "lint-staged"
      ],
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      // etc...
    }
  }
}
```

- 安装`conventional-changelog-cli`

```sh
npm install conventional-changelog-cli --save-dev
```

```json
{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
  }
}
```

**Note**

```
# 不会覆盖以前的 Change log，只会在 CHANGELOG.md 的头部加上自从上次发布以来的变动
$ conventional-changelog -p angular -i CHANGELOG.md -s -p 

# 生成所有发布的 Change log
$ conventional-changelog -p angular -i CHANGELOG.md -w -r 0
```

