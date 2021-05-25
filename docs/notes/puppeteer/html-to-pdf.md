### Puppeteer PDF

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({
    path: 'hn.pdf',
    format: 'a4',
    // 如果页面中使用了背景图片, PDF中是看不到的，需要设置👇属性
    // printBackground: true,
  });

  await browser.close();
})();
```

#### 参考链接

[Github: Puppeteer](https://github.com/puppeteer/puppeteer/)

[Puppeteer Documention](https://pptr.dev/)

[Puppeteer pdf](https://pptr.dev/#?product=Puppeteer&version=v9.1.1&show=api-pagepdfoptions)
