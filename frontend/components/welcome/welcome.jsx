import React from 'react';
import { Link } from 'react-router-dom';



class welcome extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler(e) {
    $(".welcome-container")[0].className = "welcome-container2";
  }

  onMouseLeaveHandler(e) {
    $(".welcome-container2")[0].className = "welcome-container";
  }

  render() {
    return (
      <div>
        <div className="welcome-container">
          <div className="opacity-bar"></div>
        </div>

        <div className="welcome-overlay">
          <div className= "welcome-text-container" >
            <Link to="/index">
              <label className="welcome-pixelpusher"
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}>
                p i x e l
              <span className= "welcome-diamond"> ♦ </span>
                p u s h e r
              </label>
            </Link>
              <br/>
            <Link to="/index">
              <label className="welcome-photographers">
                from photographers, to photographers
              </label>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


export default welcome;
