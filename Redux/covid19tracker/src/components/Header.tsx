import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="app__header">
      <img
        width={370}
        src="https://world19covid.web.app/static/media/image.d7265326.png"
        alt="Covid19Logo"
      />
      <h5>Global and Country Wise Cases of Corona Virus</h5>
      <h5 className="header__info">
        <em>(For a Particular country, select a Country from below)</em>
      </h5>
    </div>
  );
};

export default Header;
