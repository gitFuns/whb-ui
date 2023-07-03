# Button 按钮

### 介绍

WhbButton 是一个示例按钮组件

### 引入

```js
import Vue from 'vue';
import { WhbButton } from 'whb-ui';

Vue.use(WhbButton);
```

## 代码演示

### 基础用法

```html
<whb-button @click="handleClick" />

<whb-button type="success" @click="handleClick" />

<whb-button type="info" @click="handleClick" />

<whb-button type="danger" @click="handleClick" />

<whb-button type="link" @click="handleClick" />
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
