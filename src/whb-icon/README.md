# Button 按钮

### 介绍

WhbIcon 是一个示例按钮组件

### 引入

```js
import { createApp } from 'vue';
import { WhbIcon } from 'whb-ui';

const app = createApp();
app.use(WhbIcon);
```

## 代码演示

### 基础用法

```html
<whb-icon name="check-circle" width="32" height="32" color="#1a8f5c" />

<whb-icon name="management" width="32" height="32" color="#e59940" />

<whb-icon name="member" width="32" height="32" color="#c44749" />

<whb-icon name="close" width="32" height="32" color="#131313" />

<whb-icon name="eye" width="32" height="32" color="#529b2e" />
```

## API

### Props

| 参数  | 说明 | 类型     | 默认值 |
| ----- | ---- | -------- | ------ |
| name  | 类型 | _string_ |        |
| color | 颜色 | _string_ |        |
