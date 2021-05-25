### Puppeteer 截图

`puppeteer.launch` 实例上的 `options`

- `headless: boolean`
  - 是否以无头模式运行浏览器。默认为`true`，除非 `devtools`选项为 `true`。
- `slowMo: number`
  - 以指定的毫秒数运行 `Puppeteer` 操作。这样你就能看到发生了什么。
- `executablePath: string`
  - 要运行的浏览器可执行文件的路径，而不是捆绑的`Chromium`。如果`executablePath`是相对路径，那么它是相对于当前工作目录解析的。注意: `Puppeteer`只保证与捆绑 `Chromium` 工作，问题需要自己能 `cover`。
- `timeout: number`
  - 等待浏览器实例启动的最大时间(毫秒)。默认为**30000ms(30秒)**。设置 `0` 可以禁用超时。
- `devtools: boolean`
  - 是否自动打开每个选项卡的`DevTools`面板。如果该选项为`true`, `headless`选项将被设置为`false`。
- `args: string[]`
  - 传递给浏览器实例的附加参数。可以在这里找到 [Chromium](https://peter.sh/experiments/chromium-command-line-switches/)，[Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options) 标志的列表。

#### 页面截屏

```js
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com", {
    // networkidle2 会一直等待，直到页面加载后同时没有存在 2 个以上的资源请求，这个种状态持续至少 500 ms。
      waitUtil: 'networkidle2'
  });

  await page.screenshot({
    path: "screenshot.png",
    // 当为true时，截取整个可滚动页面的屏幕截图。默认值为false。
    fullPage: true,
  });
  await browser.close();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
```

### 截图时动态获取页面宽高截屏

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();
```

**Note:** 注意，`fullPage` 与 `clip` 参数互斥。

#### 元素截图

`Chrome` 还支持对页面某个元素进行截取。通过 [elementHandle.screenshot()](https://pptr.dev/#?product=Puppeteer&version=v9.1.1&show=api-elementhandlescreenshotoptions) 可针对具体元素进行截取。

```js
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();
  await page.goto("https://example.com", {
    waitUtil: "networkidle2"
  });
  const element = await page.$("body");
  await element.screenshot({
    // encoding: "base64", // 可以设置为 base64
    path: "screenshot.png"
  });
})();
```

### 实践

实现全页面截图，超过 `10M` 自动降低图片质量到一定范围，然后输出图片质量和 `base64`。

```js
const puppeteer = require('puppeteer');

// 10M
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const defaultScreenshotOptions = {
    /**
     * @defaultValue 'png' | 'jpeg'
     */
    type: 'jpeg',
    /**
     * The file path to save the image to. The screenshot type will be inferred
     * from file extension. If path is a relative path, then it is resolved
     * relative to current working directory. If no path is provided, the image
     * won't be saved to the disk.
     */
    // path?: string,
    /**
     * When true, takes a screenshot of the full page.
     * @defaultValue false
     */
    fullPage: true,
    /**
     * Quality of the image, between 0-100. Not applicable to `png` images.
     */
    quality: 100
    /**
     * Hides default white background and allows capturing screenshots with transparency.
     * @defaultValue false
     */
    // omitBackground?: boolean,
    /**
     * Encoding of the image.
     * @defaultValue 'binary'
     */
    // encoding?: 'base64' | 'binary',
    /**
     * If you need a screenshot bigger than the Viewport
     * @defaultValue true
     */
    // captureBeyondViewport?: true,
};

async function transform(options) {
    let {
        html = '',
        // 图片最大限制
        maxSize,
        // 自己通过降低质量，向下兼容到 lowestQuality 的质量
        selfHealing = true,
        // 最低质量
        lowestQuality = 60,
        // HTTP headers
        headers = {},
        screenshotOptions = {}
    } = options;

    screenshotOptions = Object.assign(defaultScreenshotOptions, screenshotOptions);

    const browser = await puppeteer.launch({
        // headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders(headers);
    await page.setContent(html);
    await page.evaluate(() => {});

    let quality = screenshotOptions.quality || 100;
    if (quality < lowestQuality) {
        quality = lowestQuality;
    }

    if (selfHealing) {
        maxSize = MAX_IMAGE_SIZE;
        // 降低质量只能是 jpeg
        screenshotOptions.type = 'jpeg';
        lowestQuality && (lowestQuality = 60);
    }

    const getImage = async () => {
        return await page.screenshot({
            fullPage: true,
            quality,
            encoding: 'base64',
            ...screenshotOptions
        });
    };

    let image = await getImage();
    let count = 0;
    const selfDecrease = selfHealing && image && image.length > maxSize;

    if (selfDecrease) {
        while (quality > lowestQuality) {
            count++;
            quality -= 10;
            image = await getImage();
        }
    }

    await page.close();
    await browser.close();

    return {
        quality,
        image
    };
}

```

#### 参考链接

[Github: Puppeteer](https://github.com/puppeteer/puppeteer/)

[Puppeteer Documention](https://pptr.dev/)

[Puppeteer launch](https://pptr.dev/#?product=Puppeteer&version=v9.1.1&show=api-puppeteerlaunchoptions)

[Puppeteer screenshot](https://pptr.dev/#?product=Puppeteer&version=v9.1.1&show=api-pagescreenshotoptions)

[Puppeteer goto](https://pptr.dev/#?product=Puppeteer&version=v9.1.1&show=api-pagegotourl-options)

