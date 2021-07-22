import React from 'react';
import {Link} from 'react-router-dom';

export const StartPage = (props) => {
  return (
      <div className="app">
        <header className="appHeader">
          <img src='img/LogoSvg.svg' className="appLogo" alt="logo" />
          <Link to="/home" className='startLink'>
            <div className="cracked">
              <span>Icebreaker Media</span>
              <span>Icebreaker Media</span>
              <span>Icebreaker Media</span>
            </div>
          </Link>
        </header>
      </div>
  )
}

export default StartPage;