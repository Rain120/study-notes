# 一些小的知识点

## Promise

- Promise
  - Promise的状态一旦修改就无法改变

- then
  - then 函数中的参数期待的是函数，**如果不是函数的话会发生透传**
  ```js
  Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .catch(4)
    .then(res => {
        console.log(res); // 1
    });
  ```
  

- finally
  - 不管 Promise 的状态是 resolve 还是 rejected，finally 都会执行，它的回调函数是接收不到 Promise 的结果的

  ```js
  const p1 = new Promise((resolve) => {
    resolve('resolve');
  }).then(res => {
    console.log(res);

    setTimeout(() => {
      console.log(p1); // Promise {<fulfilled>: undefined}
    }, 1000)
  }).finally(res => {
    console.log('finally', res); // finally undefined
  });
  ```
  - finally 如果没有报错，p1的结果是 finally 上一个 then 的结果

## async await

- async 函数中 await 的 new Promise 要是没有返回值的话则不执行后面的内容