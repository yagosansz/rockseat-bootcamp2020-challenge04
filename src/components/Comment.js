import React, { Fragment } from 'react'

function Comment({ data }) {
    return (
      <Fragment>
        <div className="comment">
          <img src={data.author.avatar} alt="User Avatar"/>
          <p><strong>{data.author.name} </strong>{data.content}</p>
        </div>
      </Fragment>
    )
}

export default Comment;