import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentAdd from '../../components/comment-add/comment-add';
import CommentList from '../../components/comment-list/comment-list';
import {addComments,deleteComments,getComments} from '../../redux/actions'

class App extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComments: PropTypes.func.isRequired,
    deleteComments: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
  }
  componentDidMount() {
    //异步获取评论数组
    this.props.getComments()
  }
  render() {
    const {comments,addComments,deleteComments} = this.props
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd add={addComments} />
          <CommentList comments={comments} delete={deleteComments} />
        </div>
      </div>
    );
  }
}

export default connect( // 我们在使用<App/>组件的时候，发现并没有给组件传递addComments,deleteComments,getComments方法，coments数据也没有传进来，
                        // 但是发现却可以在组件里用props获取他们。原因就在这里，我们使用connect方法让store里面的comments数据和方法都传进来了。
                        // 说白了：connect就是让数据和方法注入进最后一行声明的组件里。解耦作用：让公用的数据和方法不再和组件耦合（redux耦合性太强不好），而是直接注入。
  state => ({comments:state.comments}), //state包含comments数组。//尽管state是一个对象 代表redux定义了多个公用数据，但是我们整个应用只用到了comments这个数据 所以我们就只把这个数据绑定到这个应用里去。    
  {addComments,deleteComments,getComments}
)(App);
