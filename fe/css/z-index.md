---
draft: true
---
# z-index

## 生效

- 只有 position 的值为 relative, absolute, fixed 中的一个, z-index才会生效
- 当一个div的 z-index 为整数时,它的子元素和外界元素进行比较时,采用父元素的 z-index 进行比较, 和兄弟元素比较采用自身的 z-index 。当一个div的 z-index 为auto时,如果它和它的兄弟进行比较,采用它父元素的 z-index 。