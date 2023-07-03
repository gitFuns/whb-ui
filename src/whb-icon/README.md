# Button 按钮

### 介绍

WhbIcon 是一个示例按钮组件

### 引入

```js
import Vue from 'vue';
import { WhbIcon } from 'whb-ui';

Vue.use(WhbIcon);
```

## 代码演示

### 基础用法

```html
<whb-icon name="error" width="32" height="32" color="#c44749" />

<whb-icon name="tick" width="32" height="32" color="#1a8f5c" />

<whb-icon name="close" width="32" height="32" color="#131316" />
```

## API

### Props

| 参数  | 说明 | 类型     | 默认值 |
| ----- | ---- | -------- | ------ |
| name  | 类型 | _string_ |        |
| color | 颜色 | _string_ |        |
