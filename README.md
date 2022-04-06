# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


# 07丨巧妙的响应式：深入理解Vue3的响应式机制.m4a

vue2 响应式

```js
let getDouble = n=>n*2
let obj = {}
let count = 1
let double = getDouble(count)
Object.defineProperty(obj,'count',{
    get(){
        return count
    },
    set(val){
        count = val
        double = getDouble(val)
    }
})
console.log(double)  // 打印2
obj.count = 2
console.log(double) // 打印4  有种自动变化的感觉
```
vue3 响应式
```js
obj = {}
let getDouble = n=>n*2
let count = 1
let double = getDouble(count)

let proxy = new Proxy(obj,{
    get : function (target,prop) {
        return target[prop]
    },
    set : function (target,prop,value) {
        target[prop] = value;
        if(prop==='count'){
            double = getDouble(value)
        }
    },
    deleteProperty(target,prop){
        delete target[prop]
        if(prop==='count'){
            double = NaN
        }
    }
})
console.log(obj.count,double)
proxy.count = 2
console.log(obj.count,double) 
delete proxy.count
// 删除属性后，我们打印log时，输出的结果就会是 undefined NaN
console.log(obj.count,double) 
```

# 13丨JSX：应对更灵活的开发场景，你需要JSX.html

JSX 相比于 template 还有一个优势，是可以在一个文件内返回多个组件，我们可以像下面的代码一样，在一个文件内返回 Button、Input、Timeline 等多个组件。
```js
export const Button = (props,{slots})=><button {...props}>slots.default()</button>
export const Input = (props)=><input {...props} />
export const Timeline = (props)=>{
  ...
}
```


TimeLine 组件的源码中，有一个`reverse` 的属性来决定是否倒序渲染，我们在下面写出了类似的代码。代码中的 `Timeline` 是一个数组，数组中的两个元素都是 JSX，我们可以通过数组的 `reverse` 方法直接进行数组反转，实现逆序渲染。类似这种动态性要求很高的场景，template 是较难实现的。
```js
export const Timeline = (props)=>{
    const timeline = [
        <div class="start">8.21 开始自由职业</div>,
        <div class="online">10.18 专栏上线</div>
    ]
    if(props.reverse){
        timeline.reverse()
    }
    return <div>{timeline}</div>
}
```

# 19丨实战痛点5：如何打包发布你的Vue3应用_.html

在 Gtihub 中，我们可以使用 actions 去配置打包的功能，下面的代码是 actions 的配置文件。在这个配置文件中，我们使用 Ubuntu 作为服务器的打包环境，然后拉取 GitHub 中最新的 master 分支代码，并且把 Node 版本固定为 14.7.6，执行 npm install 安装代码所需依赖后，再执行 npm run build 进行代码打包压缩。在下面的代码中，我们就通过 GitHub Actions 自动化打包了一份准备上线的代码。

```yaml

name: 打包应用的actions
on:
  push: # 监听代码时间
    branches:
      - master  # master分支代码推送的时候激活当前action
jobs:
  build:
    # runs-on 操作系统
    runs-on: ubuntu-latest
    steps:
      - name: 迁出代码
        uses: actions/checkout@master
      # 安装Node
      - name: 安装Node
        uses: actions/setup-node@v1
        with:
          node-version: 14.7.6
      # 安装依赖
      - name: 安装依赖
        run: npm install
      # 打包
      - name: 打包
        run: npm run build

```