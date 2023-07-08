# Button 按钮

### 介绍

WhbButton 是一个示例按钮组件

### 引入

```js
import { createApp } from 'vue';
import { WhbButton } from 'whb-ui';

const app = createApp();
app.use(WhbButton);
```

## 代码演示

### 基础用法

```html
<whb-button style="margin-left: 15px">Default</whb-button>

<whb-button type="success" style="margin-left: 15px">Success</whb-button>

<whb-button type="info" style="margin-left: 15px">Info</whb-button>

<whb-button type="danger" style="margin-left: 15px">Danger</whb-button>

<whb-button type="link" style="margin-left: 15px">Link</whb-button>
```

## API

### Props

| 参数 | 说明     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| type | 按钮类型 | _string_ |        |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
