import React from "react";
import "./Header.css";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

function Header() {
  return (
    <Stack
      className="header d-flex justify-content-center align-items-center bg-white py-5"
      gap={4}
    >
      <div>
        <Image
          roundedCircle
          src="https://neal.fun/spend/billgates.jpg"
          className="header__image"
        />
      </div>
      <div>
        <h2>Spend Bill Gates' Money</h2>
      </div>
    </Stack>
  );
}

export default Header;
