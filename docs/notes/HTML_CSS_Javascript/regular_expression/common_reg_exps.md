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

- 年`(/.-)`月`(/._)`日
- 闰年

**正则表达式**

**测试**

**结果**

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

#### 4. 

**匹配规则:**

**正则表达式**

**测试**

**结果**

Mn