#### 新建项目

```sh
npx create-react-app my-app --template typescript
```

#### 自定义配置

`create-react-app` 让我们可以快速和专注项目的开发而不用过多的去关心工具和服务的配置，但是有些场景我们还是需要自定配置的，可以执行下面的命令:

```sh
npm run eject
```

**Note:** 这个操作是不可逆的操作。

如果你还是想让你的项目清新点，可以使用 [react-app-rewired](https://github.com/timarney/react-app-rewired)。

`Typescript` 项目，需要在 `tsconfig.json` 中进一步设置，如果直接在 `tsconfig.json` 文件中直接设置 `paths` 属性，当重新`run` 的时候，属性又会被删除。

[解决办法](https://github.com/facebook/create-react-app/issues/5645#issuecomment-435201019):

`paths.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "svg/*": ["src/svg/*"],
      "components/*": ["src/components/*"]
    }
  }
}
```

`tsconfig.json`

```json
{
  "extends": "./paths.json"
}
```



参考: [Add baseUrl and paths in tsconfig.json and jsconfig.json #5645](https://github.com/facebook/create-react-app/issues/5645)

#### 多入口配置

#### 参考资料

[Get Start](https://create-react-app.dev/docs/getting-started)