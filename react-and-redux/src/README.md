# 利用react-redux来改造之前的评论项目
  - react-rdux:用在组件层。例如：provider包裹组件，以及使用connect把数据和cation里的方法注入到组件里。
  - redux：用在store和reducer的构建
  - redux-chunk:用在数据和开发工具同步。
### 目前这是最完整的react-redux应用。

## redux结合react-redux整体套路
  - 编写actions
    + 同步action：返回对象
    + 异步action：返回函数
      - 函数里使用dispatch分发(action)对象
    + 每一个action函数需要被导出
  - 编写reducers：
    + 每一个函数名就是公用数据名
      - 函数里面使用state参数和action参数来产生新的数据并且返回
        + 这里的数据格式和对应acton里的数据格式一致。
    + 结合redux的combineReducers函数 向外暴露所有需要公用的数据名(函数名)
  - 让公用数据被redux保存并且让数据被redux浏览器插件同步：https://github.com/HelenTim/shangguigureact-20180119/blob/master/%E9%A1%B9%E7%9B%AE%E9%83%A8%E5%88%86/%E6%BA%90%E7%A0%81/gzhipin-client_final/src/redux/store.js
    + 使用redux的 applyMiddleware(thunk) 来让异步数据被记录
    + 使用composeWithDevTools函数 来让浏览器插件同步数据
    + 使用redux的 createStore函数 来让所有公用数据被redux记录
  - 让组件使用公用数据和对应操作公用数据的action函数
    + 在组件里结合react-redux的connect函数使用connect函数，创造新的组件  并且导出这个组件
      - connect函数的第一个参数 默认值就是reducers.js 导出来的对象
    + 使用react-redux的Provider组件包裹 connect函数新创建出来的组件；
    + 给Provider组件传递 store.js导出来的对象。
  - 此时 公用的数据和对应的action函数都已经传递到 connect新创造出来的组件里面去了。 在新创造出来的组件里就可以通过 this.poprs.xxx 来取到数据和对应action函数。

## 对于actions.js里函数的理解：声明被使用的事件
  - action.js里的函数可以被导出从而被绑定到容器组件里。组件就可以调用此函数。
    + actions.js里的action函数不一定要被导出，也可以不被导出而被其他的函数调用。
  - actions.js里的函数有两种触发方式
    + 组件调用actions.js里的(某个/某些)函数，并且传入参数
    + actions.js里的异步action函数 也可以调用其他的action函数。
## 对于reducers.js 的理解：以数据为主导 数据里面通过action.type声明涉及的各种事件来处理数据。
   - 只要里面的函数被redux的combineReducers 函数处理过，那么此函数名就是公用的数据名
     + 此数据可以被不同的事件使用，所以里面会把 action.type 拿来做判断以便区分不同事件对此数据做不同的处理。
   - 函数里的action参数对应的是：触发事件返回的action对象(包含事件类型type和数据)。
## 容器组件的理解：把事件 以及事件对应的数据 绑定到组件里去
   - 使用react-redux的connect函数来把事件以及事件对应的数据 绑定到组件里去。  
  
    
    
