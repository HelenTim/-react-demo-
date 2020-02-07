import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {counter} from './reducers'
//生成一个store对象
const store = createStore(
  counter,
  // applyMiddleware(thunk) 的意思是 应用 thunk中间件
  composeWithDevTools(applyMiddleware(thunk))  //应用上异步中间件  // 自注：这里的意思是 让中间件里的数据和开发工具同步。异步数据可以被开发工具监听到。
  ) //内部会第一次调用reducer函数，得到初始state为0
export default store
