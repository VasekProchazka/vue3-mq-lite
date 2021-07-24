# vue3-mq-lite

Lite version of mq libraries. Just define your breakpoints.

Not compatible with Vue 2

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

#### **Using NPM**

```sh
npm install vue3-mq-lite
```

## Usage

### 1.) Add plugin to Vue

You can define your custom breakpoints:

```js
import { createApp } from 'vue';
import Mq from 'vue3-mq-lite';

const app = createApp({});

app.use(Mq, {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
  xxl: Infinity,
});

app.mount('#app');
```

### 2.) Default breakpoints

```js
{
    sm: 450,
    md: 1250,
    lg: Infinity,
}
```

### 2.) Usage

For exact breakpoint:

```html
<template>
  <div v-if="$mq.sm">mobile breakpoint</div>
  <div v-if="$mq.md">tablet breakpoint</div>
  <div v-if="$mq.lg">desktop breakpoint</div>
</template>
```

For breakpoints bigger than sm (include md):

```html
<template>
  <div v-if="$mq.min.md">tablet and desktop breakpoint</div>
</template>
```

For breakpoints smaller than lg (include md):

```html
<template>
  <div v-if="$mq.max.md">mobile and tablet breakpoint</div>
</template>
```
