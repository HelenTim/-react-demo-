# -react-demo-

### 值得关注的点
### 我们不使用组件化来写react的时候
  - 我们需要给script标签的type设置为 text/babel：因为babel的作者在被邀请到facebook工作时 就把解析react虚拟dom的功能写在了babel里面。
  然后此标签里写react代码才不会报语法错误。
### 我们使用组件化的方式写react时 在写法上有很多不一样
- 组件里的state看可以直接写，不用写类的constructor 函数里；
- 组件在使用props属性时可以直接使用，不用再让constructor函数接收；
- 使用 ‘prop-types’库时 在组件里声明静态属性，以防被继承。
- 参考：https://github.com/HelenTim/-react-demo-/blob/master/react-create-app/hello-react/src-comments/components/comment-item/comment-item.jsx


#### 组件名称 大写
#### 我们一般在写组件的时候 文件的后缀名可一用 ‘.js’/‘.jsx’，但是我们一般使用 ‘.jsx’
  - 这样做的目的是 我们可以区分是组件文件  还是一般的js文件。
### 给模板配置关键字：在输入关键字的时候 模板就会显示出来
- https://www.bilibili.com/video/av51174155?p=19     6:00
### react里标签的class属性要换为 className。
### react里this的指向问题
  - 可控组件里，react生命周期函数里的this直接指向当前这个类所新创建出来的对象；
  - 可控组件里，我们自定义的方法里的this  指向undefined，解决方法如下：
      + 在类的构造器里使用bind来绑定this
      + 在声明方法的时候使用箭头函数来声明此方法。
### 数据在哪个组件 更新数据的方法就在哪个组件
    - 不然 数据不受控制
### 我们在使用 ‘prop-types’这个库的时候有两种使用方法
   - 1、 第一种：写在组件类的外面
   - 2、 第二种：写在组件类的里面
   - 参考：https://www.bilibili.com/video/av51174155?p=21   第10分钟。
### 子组件要想操作父组件
    - 父组件通过属性把自己的方法传递给子组件
    - 子组件接收父组件传递来的属性（props）来拿到方法 并且执行方法。
### GitHub为开发者提供了一些借口 供开发者访问
- https://developer.github.com/

### 组件间的通讯方式
  - ‘尚硅谷-React全家桶.docx’  第5章 有3种
    + 1、通过组件的props来进行通讯：父子组件通讯。
    + 2、使用消息的订阅(subscribe)-发布(publish)模式：兄弟组件通讯、多层级组件通讯。
      - 订阅消息就是绑定监听：https://github.com/HelenTim/-react-demo-/blob/master/react-create-app/hello-react/src/components/main.jsx 第13行。
      - 发布消息就是触发事件：https://github.com/HelenTim/-react-demo-/blob/master/react-create-app/hello-react/src/components/search.jsx  第13行。
    + 3、redux：专门有一天来讲。
    
 ### 有一个history.js它专门来控制页面的跳转api。
 ### react-router：
     - 我们以组件的形式使用react-router;
     - 参考： ‘尚硅谷-React全家桶.docx’  节
     - 要想点击地址跳转 可以使用 react-router的：NavLink 组件 配合to属性指定路径。
       + 此组件还可以指定一个在激活时的class名：声明 activeClassName属性名及值。
       + 参考：https://github.com/HelenTim/-react-demo-/edit/master/react-router4/src/components/MyNavLink.jsx
     - 组件的显示：
       + 外层使用 react-router的 Switch组件：只显示其中里面的一个组件。
       + 里层使用 react-router的 Route组件
         - path属性写路由地址 和 NavLink组件的 to属性值匹配。
         - component属性值是地址对应的组件。
         - 只有路径被匹配到时 Route组件上声明的组件才会显示：因此 此组件就像一个占位符，路径就是控制在它上面component声明的组件显示与否。
         - Route组件可以单独使用：https://github.com/HelenTim/-react-demo-/blob/master/react-router4/src/views/message.jsx  这里的route组件就是第3级路由 显示信息的详情用的 他的外层没有Switch组件。
       + 里层使用 react-router的 Redirect组件 给to属性加上地址：默认显示某个组件的内容。
     - 参考：https://github.com/HelenTim/-react-demo-/blob/master/react-router4/src/components/app.jsx
     
  ### 路由的嵌套：很简单  就是在子组件里把路由按照上面的套路重写一次就好
  ### 动态路由：和vue的动态路由很像
      - 参考：https://github.com/HelenTim/-react-demo-/blob/master/react-router4/src/views/message.jsx  第423行、 第55行。
  ### 路由传参：
      - 在给浏览器安装react开发插件工具之后 我们点击这个工具 展开标签，定位到对应组件的时候 发现此组件的所有数据都在此组件的props属性上
      - 路由上的 数据在 this.props.match 对象里面。
      - 路由的component上声明组件里可以直接使用props属性：说明路由组件可以自动的给它的子组件传数据。
        + https://github.com/HelenTim/-react-demo-/blob/master/react-router4/src/views/message.jsx
        + https://github.com/HelenTim/-react-demo-/blob/master/react-router4/src/views/message-detail.jsx
  
  ### 路由链接与非路由链接
    - 路由链接：框架自己实现的路由跳转方式
      + 路由链接不会发送网络请求
      + 非路由连接会发送网络请求
### ant-design的按需打包
  - https://www.bilibili.com/video/av51174155?p=35    第28:00
  - ‘尚硅谷-React全家桶.docx’  第7.2.4节

### redux 核心使用步骤： 下面的项目仅仅演示了redux如何使用 而不是react-redux如何使用。
  - 利用redux库创建事件的订阅分发机制：
    + 利用redux的 createStore函数 创建事件的订阅分发机制对象：https://github.com/HelenTim/-react-demo-/blob/master/react-redux/src-redux/redux/store.js

      - createStore  函数的参数是一个函数， 此参数函数有两个参数：https://github.com/HelenTim/-react-demo-/blob/master/react-redux/src-redux/redux/reducers.js
        + 第一个参数就是(声明)初始化全局公用的数据
        + 第二个参数是一个对象(action对象)：
          - 第一个属性type指定事件
          - 第二个属性data指定此事件需要用到的数据
      - 导出 这个事件订阅分发机制对象
      - reduce.js的分支语句 default语句的作用是给公用数据返回一个初始话数据。
      - 在reduce.js里操作数据的时候 我们必须用函数的第一个参数(state)来生产新的数据
        + 因为 每一次数据更新之后 新的数据就会保存在这个形参里面而不是保存在其他变量里面。
        + 我们只能返回新的数据 而绝对不能改变原有state的数据。
     + 然后我们可以根据不同事件来操作公用的数据 并且返回新的数据
  - 利用这个事件订阅分发机制对象：
    + 利用此对象来(绑定)订阅 action对象里的事件：https://github.com/HelenTim/-react-demo-/blob/master/react-redux/src-redux/index.js
    + 以便我们后面利用此对象来调用已经绑定的事件、改变全局公用的数据：
      - 把此对象传递给组件 以便组件调用绑定的事件：https://github.com/HelenTim/-react-demo-/blob/master/react-redux/src-redux/index.js
      - 组件调用此对象的 dispatch方法来触发  已经绑定的事件：https://github.com/HelenTim/-react-demo-/blob/master/react-redux/src-redux/components/app.jsx
        + dispatch方法 的参数就是  一个action对象。
  - 其余的东西就是自己封装了。
    
### react-redux：简化在react中redux的使用、降低react和redux的耦合度
  - Provider组件来订阅事件，并且把事件订阅发布对象传递给此组件：https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src-react-redux/index.js
  - 使用connect函数 连接redux和react组件（把数据和绑定的事件当做属性传递给相应的组件）：https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src-react-redux/containers/app.jsx
    + connect会被调用然后返回一个函数 返回的这个函数还会被传参并调用：最终返回一个新组件
      - 调用返回(connect函数返回)的这个函数是时 需要传递一个参数 这个参数是一个组件，这个组件也接收在调用connect函数时传递进去的参数。
        + https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src-react-redux/containers/app.jsx 的Counter组件。
      - connect函数接收一些参数：
        + 第一个参数是一个函数：此函数返回一个对象。形参的值就是reducers.js向外暴露的数据。
          - 如果reducers.js 向外暴露的是一个数据 那么这个形参就是这个数据
          - 如果reducers.js 向外暴露的是多个数据 那么这个形参就是一个对象 对象里面的对应的 某个属性才表示某个组件对应的数据。
            + https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src/containers/app/app.jsx  这里我们只用到reducers.js
            里的一个数据  尽管state是一个对象 所以我们也只是取了其中一个comments数据(这里的功能只用到了这个数据)。
          - 这个返回对象的属性值是给组件传递数据用的。组件里取数据也是用这个对象的属性。
        + 其余参数是创建action对象的函数。
        + 所有的参数都会被当做属性传递给经connect函数所创建出来的新组件。
          - 这个新组件在Provider组件的里面 但是在 connet函数返回函数所用到的参数组件的外面。
   - 组件里具体数据的使用 以及事件的触发：https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src-react-redux/components/counter.jsx
     + 都是通过props调用。
### redux处理异步数据：使用 redux-thunk 中间件
   - redux默认是不支持异步数据处理的；
   - 他是属于redux的插件；
   - 使用步骤：
     + 引入redux的applyMiddleware中间件：https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src-redux-thunk/redux/store.js
     + 引入 redux-thunk模块：https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src-redux-thunk/redux/store.js
     + 应用异步中间件：https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src-redux-thunk/redux/store.js
     + 最好是让异步数据通过 redux-devtools-extension  模块 和开发工具同步
       - 这样的话异步数据会被记录、 reducers里的操作函数的每一次调用也会被记录
       - https://www.bilibili.com/video/av51174155?p=42   后面10分钟。
     + 编写异步的actions（也可以叫异步提交action）：https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src-redux-thunk/redux/actions.js 的incrementAsync()方法。
       - 同步action都是返回一个对象，但是异步的action返回的是一个函数；
         + 在函数中执行异步代码；
         + 此函数被异步中间件调用；
       - 在异步函数里使用dispatch()方法来分发action
 ### 利用redux的combineReducers函数可以定义多个公用的数据
     - https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src/redux/reducers.js
       + 这里向外暴露的不再是一个数据而是两个数据。
  ### jebrain快捷键
     - 切换文本大小写：选中文本  然后  ctrl+shift+x
