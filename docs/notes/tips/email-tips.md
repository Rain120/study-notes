#### Demo

[如何链接到一个邮件](https://www.runoob.com/try/try.php?filename=tryhtml_link_mailto)

[复杂的邮件链接](https://www.runoob.com/try/try.php?filename=tryhtml_link_mailto2)

#### Code

1. 简单方式发送邮件

```html
<a href="mailto:someone@example.com>
```

2. 复杂方式发送邮件

```html
<a href="Mailto:first@example.com;second@example.com?CC=rain120@example.com&rainy@example.com&Subject=Hello&Body=What%20the%20hell?">Send Email to Me</a>
```

**Note**: 主题或者内容中出现空格，请使用`%20`替换，或者对内容进行`encode`。

#### 参数列表

- `CC`: 抄送地址
- `BCC`: 密件抄送地址
- `Subject`: 主题
- `Body`: 邮件内容

`Note`:  多个邮件地址用`;`隔开