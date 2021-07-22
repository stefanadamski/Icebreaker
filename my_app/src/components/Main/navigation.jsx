import React from "react";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <div className='menuButton'> menu </div>
          </button>
          <div className='navLogo'>
            <a className='navbar-brand page-scroll' href='#page-top'>
              <div className="crackedSmall">
                <span>Icebreaker Media</span>
                <span>Icebreaker Media</span>
                <span>Icebreaker Media</span>
              </div>
            </a>{' '}
          </div>
        </div>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Przełam lody
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                O nas
              </a>
            </li>
            <li>
              <a href='#strategies' className='page-scroll'>
                Strategie
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#pricing' className='page-scroll'>
                Cennik
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
