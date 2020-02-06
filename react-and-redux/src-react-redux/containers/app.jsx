
import {connect} from 'react-redux' //连接redux和react组件
import {increment,decrement}  from '../redux/actions'
import Counter from '../components/counter'

export default connect(   // 自注：传递进来的参数都会被结构传 然后当做属性递给 Counter组件。 最终会返回一个新的组件 我们用开发工具插件即可看见：在Counter外面又包裹了一个组件。
  state =>({count:state}),  // 自注：这里的state是一个形参  react-redux自己具体取的值是https://github.com/HelenTim/-react-demo-/blob/master/react-and-redux/src-react-redux/redux/reducers.js里 counter函数的第一个参数值。 
  {increment,decrement}
)(Counter); //connect返回一个函数  //自注：connect函数会被传参调用 然后返回一个函数 返回来的这个函数也会被传参调用。Counter组件会接收 这里的count、increment、decrement 三个属性及值 以便使用。
