# Cannot read property 'atom' of undefined

```
I hit this error after calling lodash's cloneDeep on an observable object.
Replacing it with toJS from mobx fixed it for me
```

参考 [mobx issue 234](https://github.com/mobxjs/mobx/issues/234)



