# todo APP (quasar-todo)

该项目通过 quasar + Vue3 + Typescript + Electron 实现一个简单的待办事项，可作为 TS 的练手项目（当然做的还是有点简陋的）

目前实现的功能有：

+ 输入框输入待办事项同步到显示区域
+ 根据代办事项状态进行显示
+ 切换代办事项状态
+ 对代办事项实现存储
+ 通过firebase设置登录（firebase使用上遇到了bug）

如有问题，欢迎交流学习~ 

## 展示页面
1. 登录页面（通过firebase实现）
<img width="1017" alt="image" src="https://github.com/Monster-XU-jesus/quasar-todo/assets/71326725/102b7bcf-d076-4169-add5-8446e2c90144">

2. 待办事项页面
<img width="1000" alt="image" src="https://github.com/Monster-XU-jesus/quasar-todo/assets/71326725/bfa06a1b-b4fd-4322-878d-734b503be40e">


## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
