```!
记录工作、学习所使用到的正则表达式
```

#### 1. 检测字符串中特殊符号

**正则表达式**

英文：

```javascript
/[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}\s+]/
```

中文特殊字符

```javascript
/[`~!@#$^&*()=|{}':;',\\[\\].<>\/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_\s+]/ig
```

**测试**

```javascript
var reg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}\s+]/ig;
'java -enableassertions -enablesystemassertions -classpath /usr/share/opentsdb/*.jar:/usr/share/opentsdb:/usr/share/opentsdb/bin:/usr/share/opentsdb/lib/async-1.4.0.jar:/usr/share/opentsdb/lib/asynchbase-1.7.2.jar:/usr/share/opentsdb/lib/commons-jexl-2.1.1.jar:/usr/share/opentsdb/lib/commons-logging-1.1.1.jar:/usr/share/opentsdb/lib/commons-math3-3.4.1.jar:/usr/share/opentsdb/lib/guava-18.0.jar:/usr/share/opentsdb/lib/jackson-annotations-2.4.3.jar:/usr/share/opentsdb/lib/jackson-core-2.4.3.jar:/usr/share/opentsdb/lib/jackson-databind-2.4.3.jar:/usr/share/opentsdb/lib/javacc-6.1.2.jar:/usr/share/opentsdb/lib/jgrapht-core-0.9.1.jar:/usr/share/opentsdb/lib/log4j-over-slf4j-1.7.7.jar:/usr/share/opentsdb/lib/logback-classic-1.0.13.jar:/usr/share/opentsdb/lib/logback-core-1.0.13.jar:/usr/share/opentsdb/lib/mysql-connector-java-5.1.39.jar:/usr/share/opentsdb/lib/netty-3.9.4.Final.jar:/usr/share/opentsdb/lib/protobuf-java-2.5.0.jar:/usr/share/opentsdb/lib/slf4j-api-1.7.7.jar:/usr/share/opentsdb/lib/tsdb-2.3.0.jar:/usr/share/opentsdb/lib/zookeeper-3.4.6.jar:/etc/opentsdb net.opentsdb.tools.TSDMain --port=4242 --staticroot=/usr/share/opentsdb/static --cachedir=/tmp/opentsdb --config=/etc/opentsdb/opentsdb.conf'.split(reg).join('')

```

**结果**

```javascript

"javaenableassertionsenablesystemassertionsclasspathusrshareopentsdbjarusrshareopentsdbusrshareopentsdbbinusrshareopentsdblibasyncjarusrshareopentsdblibasynchbasejarusrshareopentsdblibcommonsjexljarusrshareopentsdblibcommonsloggingjarusrshareopentsdblibcommonsmathjarusrshareopentsdblibguavajarusrshareopentsdblibjacksonannotationsjarusrshareopentsdblibjacksoncorejarusrshareopentsdblibjacksondatabindjarusrshareopentsdblibjavaccjarusrshareopentsdblibjgraphtcorejarusrshareopentsdbliblogjoverslfjjarusrshareopentsdbliblogbackclassicjarusrshareopentsdbliblogbackcorejarusrshareopentsdblibmysqlconnectorjavajarusrshareopentsdblibnettyFinaljarusrshareopentsdblibprotobufjavajarusrshareopentsdblibslfjapijarusrshareopentsdblibtsdbjarusrshareopentsdblibzookeeperjaretcopentsdbnetopentsdbtoolsTSDMainportstaticrootusrshareopentsdbstaticcachedirtmpopentsdbconfigetcopentsdbopentsdbconf"
```

#### 2. 日期验证

**匹配规则:**

- 年`(/.-)`月`(/._)`日, 常见间隔符合`[/.-]`, 格式`YYYY(/.-)(M|MM)(/.-)(D|DD)`
- 闰年: **百年不闰，四百年再闰**，数学计算方式就是`Year/  400 === 0`
- `2`月特殊月份: 闰年`29`天，平年`28`天
- `1, 3, 5, 7, 8, 10, 12`: `31`天
- `4, 6, 9, 11`: `30`天

**正则表达式**

```javascript
`MSDN`中定义的`DateTime`对象:
/^(?:(?!0000)[0-9]{4}([-/.]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\2(?:29))$/

`UNIX`时间戳:
/^(?:(?:1[6-9]|[2-9][0-9])[0-9]{2}([-/.]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:(?:1[6-9]|[2-9][0-9])(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)([-/.]?)0?2\2(?:29))$/

时间`YYYY-MM-DD HH:mm:ss`:
/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/
```

**测试**

```javascript
var reg = /^(?:(?!0000)[0-9]{4}([-/.]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\2(?:29))$/
var dates = [
	'2019-01-01',
	'2019/01/01',
	'2019-1-01',
	'2019-01-1',
	'2019-02-28',
	'2019-02-29',
	'1-01-01',
	'2019-04-31',
	'2019-11-07',
];
dates.map(date => {
	console.log(date, reg.test(date));
});
```

**结果**

```javascript
2019-01-01 true
2019/01/01 true
2019-1-01 true
2019-01-1 true
2019-02-28 true
2019-02-29 false
1-01-01 false
2019-04-31 false
2019-11-07 true
```

[正则应用之——日期正则表达式](https://blog.csdn.net/lxcnn/article/details/4362500)

#### 3. 邮箱格式验证

**匹配规则:**

- 开头：以字母、数字、下滑线`[_]`、减号`[-]`，并需要重复一次至多次。
- 中间：必须包括`@`符号。
- `@`之后到结尾，字母、数字、下滑线`[_]`、减号`[-]`，并需要重复一次至多次。
- 结尾：必须是点号`[.]`加字母。
- 不考虑中文、以及邮箱域名。

**正则表达式**

```javascript
 /^\w+([-_+.]+\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
```

**测试**

```javascript
var reg = /^\w+([-_+.]+\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var emails = [
	'11@qq',
	'11@qq.com',
	'Rainy@qq.com',
	'Rainy_123@qq.io',
	'Rainy_123-+asd@qq.outlook.com',
	'Rainy@qq.com.cn',
	'.11@qq.com',
	'_Rainy@qq.com',
];
emails.map(email => {
	console.log(email, reg.test(email));
});
```

**结果**

```javascript
11@qq false
11@qq.com true
Rainy@qq.com true
Rainy_123@qq.io true
Rainy_123-+asd@qq.outlook.com true
Rainy@qq.com.cn true
.11@qq.com false
_Rainy@qq.com true
```

#### 4.手机号码

**匹配规则:**



**正则表达式**

```javascript
/^1([3-5]|[7-9])\d{9}$/
```

**测试**

```javascript
var reg = /^1([3-5]|[7-9])\d{9}$/;
var phonenumbers = [
	'10123456775',
	'11123456775',
	'12345678910',
	'13123456775',
	'14123456775',
	'15123456775',
	'16123456775',
	'17345678910',
	'18123456775',
	'19123456775',
];
phonenumbers.map(phonenumber => {
	console.log(phonenumber, reg.test(phonenumber));
});
```

**结果**

```javascript
10123456775 false
11123456775 false
12345678910 false
13123456775 true
14123456775 true
15123456775 true
16123456775 false
17345678910 true
18123456775 true
19123456775 true
```

#### 5.

**匹配规则:**

**正则表达式**

**测试**

**结果**

