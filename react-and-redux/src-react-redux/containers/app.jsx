
import {connect} from 'react-redux' //连接redux和react组件
import {increment,decrement}  from '../redux/actions'
import Counter from '../components/counter'

export default connect(
  state =>({count:state}),
  {increment,decrement}
)(Counter); //connect返回一个函数  //自注：Counter组件会接收 这里的count、increment、decrement 三个属性 以便使用。
