import React from "react";
import ticketsImage from "./../img/tickets.png";

function Header(){
    const myHeaderStyle = {
        margin: '50%'
    }
  return (
    <React.Fragment style={myHeaderStyle}>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="tickets" />
    </React.Fragment>
  );
}

export default Header;