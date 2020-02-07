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

export default connect( 
  state => ({comments:state.comments}), //state包含comments数组。//尽管state是一个对象 代表redux定义了多个公用数据，但是我们整个应用只用到了comments这个数据 所以我们就只把这个数据绑定到这个应用里去。    
  {addComments,deleteComments,getComments}
)(App);
