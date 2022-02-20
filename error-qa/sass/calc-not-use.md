
# sass calc()函数中不生效的问题

```scss
@use "./constants" as const;

.container {
  min-height: calc(100vh - const.$HEADER_HEIGHT);
  height: calc(100vh - const.$HEADER_HEIGHT);
}
```

![q-scss-calc-const.png](../images/q-scss-calc-const.png)

## fixed

```scss
@use "./constants" as const;

.container {
  min-height: calc(100vh - #{const.$HEADER_HEIGHT});
  height: calc(100vh - #{const.$HEADER_HEIGHT});
}
```

![a-scss-calc-const.png](../images/a-scss-calc-const.png)