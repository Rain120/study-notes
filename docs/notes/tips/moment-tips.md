#### 当前时间的周一和周日

```javascript
let weekOfday = moment().format('E');

// Monday
let monday = moment().subtract(weekOfday - 1, 'days').format('YYYY/MM/DD');

// Sunday
let sunday = moment().add(7 - weekOfday, 'days').format('YYYY/MM/DD');
```

#### 指定时间的周一和周日

```javascript
// Monday
let monday = moment(value).isoWeekday(1);

// Sunday
let sunday = moment(value).isoWeekday(7);
```

#### 上周

```javascript
 let monday = moment().startOf('week');
let sunday = moment().endOf('week');
```

#### 本月

```javascript
let starts = moment().startOf('month');
let ends = moment().endOf('month').endOf('month');
```

#### 上月

```javascript
let starts = moment().startOf('month').subtract('month', 1);
let ends = moment().endOf('month').subtract('month', 1).endOf('month');
```



#### 参考资料

[momentjs](http://momentjs.cn/)

