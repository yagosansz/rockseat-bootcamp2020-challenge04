import React, { Component, Fragment } from 'react';

import Post from './Post';

import data from '../data';

class PostList extends Component {
  state = {
    posts: data.posts
  }

  render() {
    return (
      <Fragment>
        <section className="post-list">
          <div className="content">
            <ul>
              { this.state.posts.map(post => 
                <li key={post.id}>
                  <Post data={post} />
                </li>)
              }
            </ul>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default PostList;