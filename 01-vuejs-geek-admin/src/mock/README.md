https://www.jianshu.com/p/72fffae58761
https://www.cnblogs.com/student007/p/15180190.html


```sh
pnpm i cross-env vite-plugin-mock -D
```

package.json
```json
"dev" : "cross-env env=development vite"
```

## 方式1

vite.config.js 中 injectCode
```js
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'

export default ({ command }) => {
  let prodMock = true
  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),
    ],
  }
}
```

## 方式2

main.js
```js
import { setupProdMockServer } from './mockProdServer';
if(import.meta.env === 'development'){
  setupProdMockServer()
}
```