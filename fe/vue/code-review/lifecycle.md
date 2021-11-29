
[回到上层Vue源码学习菜单](./code-review.md)

#### **前置知识**

- [Vue生命周期笔记](../vue-lifecycle/vue-lifecycle.md)
- [测试代码](https://codesandbox.io/s/y0117q1y41)

#### 注册`hooks`钩子函数

`path: src/core/vdom/patch.js`

```javascript
export function createPatchFunction (backend) {
  let i, j
  const cbs = {}

  const { modules, nodeOps } = backend

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = []
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]])
      }
    }
  }
  // ...
}
```

#### 1. 如何调用生命周期钩子函数`callHook`

路径: `src/core/instance/init.js -> src/core/instance/lifecycle.js`

```
export function callHook (vm: Component, hook: string) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget()
  const handlers = vm.$options[hook]
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm)
      } catch (e) {
        handleError(e, vm, `${hook} hook`)
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  popTarget()
}
```

在`Vue init`的时候我们会看到👇代码:

```
vm.$options = mergeOptions(
  resolveConstructorOptions(vm.constructor),
  options || {},
  vm
)
```

这串代码是为了将`Vue`实例对象中的`options`合入到构造函数中

`vm.$options[hook]`是取到合入`options`得`hook`钩子函数。

`callHook` 函数，根据传入的字符串 `hook`，去拿到 `vm.$options[hook]` 对应的回调函数数组，然后遍历执行，执行的时候把 `vm` 作为函数执行的上下文。

#### 2. `beforeCreate & created`

`Vue.protoype._init`

```
initLifecycle(vm)
initEvents(vm)
initRender(vm)
callHook(vm, 'beforeCreate')
initInjections(vm) // resolve injections before data/props
initState(vm)
initProvide(vm) // resolve provide after data/props
callHook(vm, 'created')
```

我们知道，`beforeCreate`和`created`,在这两个`hook`之间，`Vue`实例会进行事件初始化, 配置`Event`和`watch`,对`data`, `props`,`computed`进行数据观测(`data observer`)。此时，`$el`还不存在，但在`create`时`data`属性已经存在，所以，如果我们的数据不依赖`dom`，我们可以在这个`hook`中进行`API`数据获取。

在`create`时`this.$el`还是`undefined`，所以此处会等待`Vue`实例调用`vm.mounted($el)`，接着判断是否有`template`配置，有就使用`template`作为`render`函数，没有就通过编辑`outHTML`作为`template`，`render`函数选项 > `template`选项 > `outer HTML`。此时`mounted`中`el`,`data`都已经初始化了，当我们的数据对`DOM`有相对应的依赖时，我们可以在这个`hook`下进行数据请求。

#### 4. `beforeMount & mounted`

![lifecycle-1](./images/lifecycle-1.png)

从测试代码我们知道，在`beforeMount`和`mounted`中，我们发现`boforeMount`钩子函数的执行顺序是先父后子，而`mounted`钩子函数的执行顺序是先子后父，这是为什么呢？我们来从代码一探究竟吧。

`path: src/core/instance/lifecycle.js -> L:134`

```javascript
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el
  // ...
  callHook(vm, 'beforeMount')

  let updateComponent
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = () => {
      const name = vm._name
      const id = vm._uid
      const startTag = `vue-perf-start:${id}`
      const endTag = `vue-perf-end:${id}`

      mark(startTag)
      const vnode = vm._render()
      mark(endTag)
      measure(`vue ${name} render`, startTag, endTag)

      mark(startTag)
      vm._update(vnode, hydrating)
      mark(endTag)
      measure(`vue ${name} patch`, startTag, endTag)
    }
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  hydrating = false

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```

从上述代码，我们看到在执行`vm._render`之前调用了`beforeMount`，而且在调用`mounted`需要满足`vm.$vnode == null`, 那这个`vm.$vnode`又是在什么时候初始化的呢？

`path: src/core/instance/render.js -> L:18`

```javascript
export function initRender (vm: Component) {
  vm._vnode = null // the root of the child tree
  vm._staticTrees = null // v-once cached trees
  const options = vm.$options
  const parentVnode = vm.$vnode = options._parentVnode // the placeholder node in parent tree
  const renderContext = parentVnode && parentVnode.context
  vm.$slots = resolveSlots(options._renderChildren, renderContext)
  vm.$scopedSlots = emptyObject
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  const parentData = parentVnode && parentVnode.data

  // ...
}
```

从代码中我们知道`vm.$vnode`是父`DOM`树中的占位符节点，这表明当前`mounted`调用的时机不是在一次组件的初始化过程，而是我们通过外部 `new Vue` 初始化过程。

那么什么时候调用`mounted`钩子函数呢？

我们看到在执行完`vm._render`之后，当前的`vm`调用了`vm._update`函数，这个函数主要是把`VNode patch`成一个`DOM`, 之后执行`invokeInsertHook`函数。

`path: src/core/vdom/patch.js => L:583`

```javascript
function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue
    } else {
      for (let i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i])
      }
    }
  }
```

将钩子函数一次存入`insertedVnodeQueue`队列中，并一次调用。

`path: src/core/vdom/create-component.js -> L:69`

```javascript
insert (vnode: MountedComponentVNode) {
    const { context, componentInstance } = vnode
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true
      callHook(componentInstance, 'mounted')
    }
  // ...
  }
```

`insertedVnodeQueue`：

```javascript
function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
      vnode.data.pendingInsert = null
    }
    vnode.elm = vnode.componentInstance.$el
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue)
      setScope(vnode)
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode)
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode)
    }
  }
```



#### 5. `beforeUpdate & updated`



#### 6. `beforeDestroy & destroyed`