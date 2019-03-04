# blogs

## Todo
todolist的标签功能 
计算功能以及状态改变




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 问题

关于dev-tools不显示，提示Vue.js is detected on this page. Devtools inspection is not available because it's in production mode or explicitly disabled by the author.

在App.vue中添加
```
import Vue from 'vue'
Vue.config.devtools = true;
```