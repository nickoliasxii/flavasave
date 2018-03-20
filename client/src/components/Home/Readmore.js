import React from "react";
import Scrollchor from 'react-scrollchor';

const ReadMore = () => (
  <div className="readmore-block">
    <div className="readmore-description">
      <p>Save recipes from the web.</p>
      <p id="readmore-organize">Organize as you go.</p>
    </div>
    <Scrollchor to="homeAbout" className="readmore-subBlock">
      <h3 className="readmore-text">READ MORE</h3>
      <img className="arrow" src={require('../../images/arrow.png')} alt="Arrow" />
    </Scrollchor>
  </div>
);

export default ReadMore;