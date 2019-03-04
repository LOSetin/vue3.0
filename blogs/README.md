# blogs

## Todo
todolist的标签功能 
计算功能以及状态改变

## package.json
cnpm install module_name -S 即 npm install module_name --save 写入dependencies
cnpm install module_name -D 即 npm install module_name --save-dev 写入devDependencies
cnpm install module_name -g 全局安装(命令行使用)
cnpm install module_name 本地安装(将安装包放在 ./node_modules 下)



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