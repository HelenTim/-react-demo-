//包含n个reducer函数的模块
import {
  INCREMENT,
  DECREMENT
} from './action-types'
export function counter(state = 0, action) {  // 自注：reducer模块的作用是  利用state以及action函数  来返回新的数据(state)。
                                              // 注意是返回新的数据(state)不是修改原来的数据(state)。        
  console.log('counter()',state,action)
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }
}
