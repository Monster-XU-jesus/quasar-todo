# todo APP (quasar-todo)

该项目通过 quasar + Vue3 + Typescript + Electron 实现一个简单的待办事项，可作为 TS 的练手项目（当然做的还是有点简陋的）
目前实现的功能有：

+ 输入框输入待办事项同步到显示区域
+ 根据代办事项状态进行显示
+ 切换代办事项状态
+ 对代办事项实现存储
+ 通过firebase设置登录（firebase使用上遇到了bug）

如有问题，欢迎交流学习~ 

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
