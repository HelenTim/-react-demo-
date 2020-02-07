// 自注：react-redux的作用：主要是把数据和方法传递给需要的组件， 以便组件使用。
import {connect} from 'react-redux' //连接redux和react组件
import {increment,decrement,incrementAsync}  from '../redux/actions'
import Counter from '../components/counter'

export default connect(
  state =>({count:state}),
  {increment,decrement,incrementAsync}
)(Counter); //connect返回一个函数
