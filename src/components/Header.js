import React from "react";
import Button from "./Button";

const Header = ({ title, onAddBtnClick, onAddShow }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAddBtnClick}
        color={onAddShow ? "red" : "green"}
        text={onAddShow ? "Close" : "Add"}
        
      />
    </header>
  );
};

export default Header;

Header.defaultProps = {
  title: "Task Tracker",
};
