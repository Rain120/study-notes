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

// i 星期几
moment(value).isoWeekday(i);
```

#### 上周

```javascript
let monday = moment().startOf('week');
let sunday = moment().endOf('week');
let weekOfDay = parseInt(moment().format('E'));

let monday = moment().subtract(weekOfDay + (7 - 1), 'days').format('YYYY-MM-DD');
let sunday = moment().subtract(weekOfDay + (7 - 7), 'days').format('YYYY-MM-DD');

// i 星期几
moment().subtract(weekOfDay + (7 - i), 'days').format('YYYY-MM-DD');
```

#### 下周

```javascript
let monday = moment().add((7 - weekOfDay) + 1, 'days').format('YYYY-MM-DD');
let sunday = moment().add((7 - weekOfDay) + 7, 'days').format('YYYY-MM-DD');

// i 星期几
moment().add((7 - weekOfDay) + i, 'days').format('YYYY-MM-DD');
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

#### 当前所在时间所在的季度起始、截止时间

```javascript
let startDate = moment().startOf('quarter').format('YYYY-MM-DD');
let endDate = moment().endOf('quarter').format('YYYY-MM-DD');
```

#### 当前所在时间距离当前季度剩余周数

```javascript
let leftWeeks = moment(moment().endOf('quarter').valueOf()).isoWeeksInYear() - moment().week();
```

#### 当前所在时间距离当前季度剩余周数

```javascript
let days = moment(date).endOf('quarter').diff(moment(date), 'days');
```

#### 下周几时间 (默认周一)

```javascript
function nextWeek(date = moment(), day = 1) {
  const weekOfDay = parseInt(moment(date).format('E'), 10);
	return moment(date).add(7 - weekOfDay * (day - 1) + 1, 'days').startOf('days');
}
```



#### Demo

<iframe
     src="https://codesandbox.io/embed/moment-tips-zdf5z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="moment-tips"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

#### 参考资料

[momentjs](http://momentjs.cn/)

[moment-tips](https://codesandbox.io/s/moment-tips-zdf5z)



