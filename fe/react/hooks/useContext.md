---
sidebar_position: 3
---

共享状态钩子

参数: 接收一个 **`context` 对象**（`React.createContext` 的返回值）

返回: 该 `context` 的当前值。

**Note:**

- ✅ 当前的 `context` 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value` `prop` 决定
- ✅ `useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`

- ✅ `useContext(MyContext)` 只是让你能够*读取* `context` 的值以及订阅 `context` 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件*提供* `context`

```jsx
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```