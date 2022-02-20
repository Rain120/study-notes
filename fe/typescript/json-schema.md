# JSON Schema

## 定义

`JSON Schema` 是一个词汇表，可用于注释和验证`JSON`文档。

## 作用

- 对现有的`json`数据格式进行描述（字段类型、内容长度、是否必须存在、取值示例等）；
- 是一个描述清晰、人机可读的文档；
- 自动测试、验证客户端提交的数据；

## 属性

| 关键字      | value     | 描述                                                     |
| :----------| :---------- | :------------------------------------------------------ |
| `$schema`          | http://json-schema.org/draft-04/schema#<br /><br />http://json-schema.org/draft-06/schema#<br /><br />http://json-schema.org/draft-07/schema# | `$schema` 关键字状态，表示这个模式与 `v4` 规范草案书写一致。 |
| `$ref` |  | 引用字段, 通常用于复杂说明 |
| `title`            |  | 用它给我们的模式提供了标题。                                 |
| `default` | | 任意类型，表示当前对象的默认值。 |
| `description`      | 通常搭配`$ref`一起说明使用<br /><br />`{"$ref": "#/definnitions/xxx"}` | 关于模式的描述。                                             |
| `definitions` | 必须是一个`object`，`object`下所有属性的值都必须是有效的`JSON Schema` | 定义子模式 |
| `type`             | 可以是字符串或者字符串数组，取值必须在Schema基本类型范围内，详见[类型](#类型) | `type` 关键字在我们的 `JSON` 数据上定义了第一个约束：必须是一个 `JSON` 对象。 |
| `enum` | 必须是数组，而且数组里面的元素至少必须有一个而且不能有重复值。 | 枚举类型 |
| `properties`       | `object`，属性的值必须都是有效的`JSON Schema`实例 | 定义各种键和他们的值类型，以及用于 `JSON` 文件中的最小值和最大值。 |
| `required`         | 字符串数组，至少必须有一个元素，数组内不能有重复值 | 该 `object` 类型的哪些字段是必须的存在且不为 `null` 的       |
| `minimum`          | 数值 | 给值设置的约束条件，表示可以接受的最小值。                   |
| `exclusiveMinimum` | 布尔值，必须与`minimum`一起使用 | 如果存在 `exclusiveMinimum` 并且具有布尔值 `true`，如果它严格意义上大于 `minimum` 的值则实例有效。 |
| `maximum`          | 数值 | 给值设置的约束条件，表示可以接受的最大值。                   |
| `exclusiveMaximum` | 布尔值，必须与`maximum`一起使用 | 如果存在 `exclusiveMinimum` 并且具有布尔值 `true`，如果它严格意义上小于 `maximum` 的值则实例有效。 |
| `multipleOf`       | 大于`0`的`JSON`数值 | 如果通过这个关键字的值分割实例的结果是一个数字则表示紧靠 `multipleOf` 的数字实例是有效的。 |
| `oneOf` | 必须是`object Schema`实例数组，而且数组里面的元素至少必须有一个而且不能有重复 | 满足其中一个 |
| `allOf` | 必须是`object Schema`实例数组，而且数组里面的元素必须所有而且不能有重复 | 满足全部 |
| `anyOf` | 必须是`object Schema`实例数组 | 任意满足 |
| `not` | 必须是一个`object`，而且是一个有效的`JSON Schema` | 取反 |
| `maxLength`        | 大于等于`0`的整数 | 字符串实例字符的最大长度数值。                               |
| `minLength`        | 大于等于`0`的整数 | 字符串实例字符的最小长度数值。                               |
| `pattern`          | 字符串，必须是有效的正则表达式 | 如果正则表达式匹配实例成功则字符串实例被认为是有效的。       |

## 类型

| 类型      | 描述                               |
| :-------- | ---------------------------------- |
| `boolean` | `Boolean`                          |
| `integer` | 不含小数或指数部分的`JSON`数值类型 |
| `number`  | 任何JSON类型。 数字包括整数。      |
| `string`  | `字符串`                           |
| `object`  | 对象                               |
| `array`   | 数组                               |
| `null`    | The JSON null value.               |

## Array 类型属性

| 属性名称          | 类型      | 备注                                                         |
| ----------------- | --------- | ------------------------------------------------------------ |
| `minItems`        | `number`  | 最小 `item` 数                                               |
| `maxItems`        | `number`  | 最大 `item` 数                                               |
| `uniqueItems`     | `number`  | 确保数组中的每个项目都是唯一的 `[默认：false]`               |
| `items`           | `object`  | 数组每项的内容                                               |
| `additionalItems` | `boolean` | 是否可以额外增加 `item`，当 `item` 是单个模式时，`additionalItems` 关键字是没有意义的，因此不应使用。 |

## Object 类型属性

| 属性名称               | 类型       | 备注                                                         |
| ---------------------- | ---------- | ------------------------------------------------------------ |
| `required`             | `string[]` | 该 `object` 类型的哪些字段是必须的存在且不为 `null` 的       |
| `properties`           | `object`   | 定义各种键和他们的值类型，以及用于 `JSON` 文件中的最小值和最大值。 |
| `maxProperties`        | `number`   | 最大属性数量                                                 |
| `minProperties`        | `number`   | 最小属性数量                                                 |
| `dependencies`         | `object`   | 表示哪些属性的存在必须依赖另外一些属性的存在                 |
| `patternProperties`    | `object`   | 判断所有属性名匹配上的都必须满足一定的条件                   |
| `additionalProperties` | `object`   | 表示 `json` 可以出现 `object` 未定义，但是满足一定条件的数据 |

## 参考资料

[JSON Schema官网](http://json-schema.org/)

[JSON Schema Validator](https://www.jsonschemavalidator.net/)

[JSON Schema Validator 官方文档](http://json-schema.org/draft/2019-09/json-schema-validation.html)

[JSON Schema 参考书](https://imweb.io/topic/57b5f69373ac222929653f23)

