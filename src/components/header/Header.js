import React from 'react';
import './header.styles.scss';

const Header = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <div className='navigation'>
        <p className='sign-out' onClick={() => onRouteChange('signout')}>Sign Out</p>
        </div>
    )
    } else {
      return (
        <div className='navigation'>
        <p className='sign-out' onClick={() => onRouteChange('signin')}>Sign In</p>
        <p className='sign-out' onClick={() => onRouteChange('register')}>Register</p>
        </div>
      );
    }
}

export default Header;