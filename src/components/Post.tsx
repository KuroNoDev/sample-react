import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { updatePost } from '../actions/posts';
import logo from '../assets/images/logo.svg';
import { AppActions } from '../types/actions';
import Comment from '../types/Comment';
import { default as PostType } from '../types/Post';

type PostProps = RouteComponentProps<{id: 'string'}> & LinkDispatchProps;

class Post extends Component<PostProps> {
  state = {
    commentsLoaded: false,
    comments: [],
    id: this.props.match.params.id,
    postLoaded: false,
    post: {
      userId: 0,
      id: 0,
      title: 'test',
      body: 'test'
    }
  }

  async componentDidMount() {
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`);
    this.setState({
      postLoaded: true,
      post: post.data
    });
    
    const comments = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.state.id}`)
    this.setState({
      commentsLoaded: true,
      comments: comments.data
    });

    const updatedPost = {...post.data, ...{visited: true, comments: comments.data.length}}
    this.props.updatePost(updatedPost);
  }

  commentsTpl () {
    if (this.state.commentsLoaded) {
      return (
        <div>
          <h2>
            Comments
          </h2>
          <div className="card">
            {this.state.comments.map((comment:Comment) => {
              return (
                <div key={comment.id} className="d-flex flex-column flex-sm-row px-3 pt-3">
                  <div className="text-center mb-2 mb-sm-0">
                    <img className="rounded-circle" src={`https://api.adorable.io/avatars/50/${comment.email}.png`} alt={`user-${comment.email}`}/>
                  </div>
                  <div className="flex-grow-1 pl-0 pl-sm-3">
                    <h4 className="mb-0">{comment.name}</h4>
                    <h5 className="text-muted">{comment.email}</h5>
                    <p>{comment.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <img src={logo} width="100" height="100" className="app-logo" alt=""></img>
      );
    }
  }

  postTpl() {
    const post = this.state.post;

    if (this.state.postLoaded) {
      return (
        <div className="card">
          <div className="card-body d-flex flex-column flex-sm-row">
            <div className="text-center mb-2 mb-sm-0">
              <img src={`https://api.adorable.io/avatars/100/${post.userId}.png`} alt={`user-${post.userId}`}/>
            </div>
            <div className="flex-grow-1 pl-0 pl-sm-3">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <img src={logo} width="100" height="100" className="app-logo" alt=""></img>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Post {this.state.id}</h2>
        {this.postTpl()}
        <br></br>
        {this.commentsTpl()}
      </div>
    );
  }
}

interface LinkDispatchProps {
  updatePost: (post: PostType) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AppActions>): LinkDispatchProps => ({
  updatePost: bindActionCreators(updatePost, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Post);