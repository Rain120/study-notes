---
sidebar_position: 30
---

- ✅ 钩子一律使用`use`前缀命名，便于识别。你要使用 `xxx` 功能，钩子就命名为 `usexxx`
- ✅ 自定义 Hook 是一种重用**状态逻辑**的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 `Hook` 时，其中的所有 `state` 和副作用都是完全隔离的, 所以**使用相同的 Hook 是不会共享 state**
- ✅ 自定义 `Hook` 解决了以前在 `React` 组件中无法灵活共享逻辑的问题。

```jsx
const usePerson = (personId) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data);
        setLoading(false);
      });
  }, [personId]);  
  return [loading, person];
};
```
