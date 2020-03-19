import React, { Component, Fragment } from 'react';

import Comment from './Comment';

function Post({ data }) {
    return (
      <Fragment>
        <div className="post">
          <div className="user-info">
            <img src={data.author.avatar} alt="User Avatar"/>
            <div className="post-info">
              <strong>{data.author.name}</strong>
              <span>{data.date}</span>
            </div>
          </div>
          <p>{data.content}</p>

          {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
        </div>
      </Fragment>
    );
}

export default Post;