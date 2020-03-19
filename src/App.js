import React, { Fragment } from 'react';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <Fragment>
      <Header />
      <PostList />
    </Fragment>
  )
}

export default App;