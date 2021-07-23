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

```html
<template>
  <div v-if="$mq.breakpoint.sm">mobile breakpoint</div>
  <div v-if="$mq.breakpoint.md">tablet breakpoint</div>
  <div v-if="$mq.breakpoint.lg">desktop breakpoint</div>
</template>
```
