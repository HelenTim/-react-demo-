//包含n个reducer函数(根据旧的state和action返回一个新的action和state)
import {combineReducers} from 'redux'
import {ADD_COMMENTS,DELERE_COMMENTS,RECEIVE_COMMENTS} from './action-types'
const initComments = []
function comments(state=initComments,action){
  switch(action.type) {
    case ADD_COMMENTS:
      return [action.data, ...state]   // 这里我们展开的是state而不是initComment，因为每一次数据的更新数据都会保存在当前的形参state里。
    case DELERE_COMMENTS:
      return state.filter((comment,index) => index!==action.data) //返回下标不为index的数组元素
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}
function counter(state = 0, action) {
  console.log('counter()',state,action)
  switch (action.type) {
    case ADD_COMMENTS:
      return state + action.data
    case DELERE_COMMENTS:
      return state - action.data
    default:
      return state
  }
}



//此时redux向外暴露的state(数据)结构(因为暴露的不再是一个数据 而是借助combineReducers函数处理之后的两个数据) 是一个对象。
//{counter:xxx,comments:[xxx]}
// 当定义多个公用的数据时 就需要借助combineReducers函数来处理这些数据 然后把处理之后的结果导出去。

export default combineReducers({  // 自注：此时这里定义了两个公用的数据。每一个数据都对应一个此数据名的函数。
  comments,
  counter
}
)

