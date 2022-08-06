### <span id="top">快速导航</span>

[HTML学习](./knowledge-map/fe/html) | [CSS - 从入门到放弃](./knowledge-map/fe/css) | [JavaScript学习](./knowledge-map/fe/javascript) | [浏览器相关](./knowledge-map/fe/browser) | [Nodejs学习](./knowledge-map/fe/nodejs)| [框架学习之React & Vue](./knowledge-map/fe/react-vue)



> [Q1: JavaScript的基本数据类型?](#q1)
>
> [Q2: 栈和堆的区别？](#q2)
>
> [Q3: `JS`延迟加载的方式有哪些?](#q3)
>
> [Q4: 同步和异步的区别?](#q4)
>
> [Q5: 回流与重绘](#q5)
>
> [Q6: 请描述一下 `cookies`，`sessionStorage` 和` localStorage` 的区别？](#q6)
>
> [Q7: `.call()` 和` .apply()` 的区别？](#q7)
>
> [Q8: `DOM`操作——怎样添加、移除、移动、复制、创建和查找节点?](#q8)



<span id="q1">1</span>. **`JavaScript`的基本数据类型?**

   ```javascript
   值类型(基本类型):
   字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
   
   引用数据类型：
   对象(Object)、数组(Array)、函数(Function)。
   Object 是 JavaScript 中所有对象的父对象
   ```

<span id="q2">2</span>. **栈和堆的区别？**

   ```javascript
   栈（stack）：由编译器自动分配释放，存放函数的参数值，局部变量等；
   堆（heap）：一般由程序员分配释放，若程序员不释放，程序结束时可能由操作系统释放。
   ```

<span id="q3">3</span>. **`JS`延迟加载的方式有哪些?**

   ```javascript
   JS的延迟加载有助与提高页面的加载速度。
   defer和async、动态创建DOM方式（用得最多）、按需异步载入JS
   defer：延迟脚本。立即下载，但延迟执行（延迟到整个页面都解析完毕后再运行），按照脚本出现的先后顺序执行。
   async：异步脚本。下载完立即执行，但不保证按照脚本出现的先后顺序执行。
   ```

[Back Top](#top)

<span id="q4">4</span>. **同步和异步的区别?**

   ```javascript
   同步的概念在操作系统中：不同进程协同完成某项工作而先后次序调整（通过阻塞、唤醒等方式），同步强调的是顺序性，谁先谁后。异步不存在顺序性。
   同步：浏览器访问服务器，用户看到页面刷新，重新发请求，等请求完，页面刷新，新内容出现，用户看到新内容之后进行下一步操作。
   异步：浏览器访问服务器请求，用户正常操作，浏览器在后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。
   ```

<span id="q5">5</span>. **回流与重绘**

   请先浏览并理解 [浏览器相关问题1](./browser#1)

   ```javascript
   回流：
   	当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。
   重绘：
   	当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，
   
   回流必将引起重绘，重绘不一定会引起回流。
   ```

   文章：[回流与重绘：CSS性能让JavaScript变慢？]([https://www.zhangxinxu.com/wordpress/2010/01/%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98%EF%BC%9Acss%E6%80%A7%E8%83%BD%E8%AE%A9javascript%E5%8F%98%E6%85%A2%EF%BC%9F/](https://www.zhangxinxu.com/wordpress/2010/01/回流与重绘：css性能让javascript变慢？/))

<span id="q6">6</span>. **请描述一下 `cookies`，`sessionStorage` 和` localStorage` 的区别？**

   ```javascript
   cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
   cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
   sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
   
   存储大小：
       cookie数据大小不能超过4k。
       sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，
       可以达到5M或更大。
   
   有期时间：
       localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
       sessionStorage  数据在当前浏览器窗口关闭后自动删除。
       cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
   ```

[Back Top](#top)

<span id="q7">7</span>. **`.call()` 和` .apply()` 的区别？**

   ```javascript
   功能基本相同，都是实现继承和转换对象指针
   区别：
       call的参数列表与apply不同
      .call(obj[par1, par2,...])
      .apply(obj, pareArray)
   ```

<span id="q8">8</span>. **`DOM`操作——怎样添加、移除、移动、复制、创建和查找节点?**

   ```javascript
   （1）创建新节点
     createDocumentFragment()    //创建一个DOM片段
     createElement()   //创建一个具体的元素
     createTextNode()   //创建一个文本节点
   （2）添加、移除、替换、插入
     appendChild()
     removeChild()
     replaceChild()
     insertBefore() //在已有的子节点前插入一个新的子节点
   （3）查找
     getElementsByTagName()    //通过标签名称
     getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
     getElementById()    //通过元素Id，唯一性
   ```

<span id="q9">9</span>. 1

[Back Top](#top)

