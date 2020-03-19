import React, { Component, Fragment } from 'react';

import userProfile from '../assets/profile.png';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="main-header">
          <div className="content">
            <h2>Facebook</h2>
            <p>My Profile <img src={userProfile} alt="User Profile"/></p>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;