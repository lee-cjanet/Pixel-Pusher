import React from 'react';
import { Link } from 'react-router-dom';

const welcome = () => {
  return (
    <div className="welcome-container">
      <Link to="/index">
        <ul className= "welcome-text-container">
          <label className="welcome-pixelpusher">
            p i x e l
          <span className= "welcome-diamond"> ♦ </span>
            p u s h e r
          </label>
          <br/>
          <label className="welcome-photographers">
            from photographers, to photographers
          </label>
        </ul>
      </Link>
    </div>
  );
};


export default welcome;
