import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import store from './redux/store'
function render(){
  // 自注：我们把  redux创建的事件订阅分发机制对象 传递给 组件，以便组件调用 绑定的事件。
  ReactDOM.render( <App store={store} /> , document.getElementById('root'));
}
//初始化渲染
render();
//订阅监听(store中的状态变化了，就会自动调用进行重绘)。
// 自注：redux绑定事件。
store.subscribe(render)

