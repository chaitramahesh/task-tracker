import React from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
export default Button;

Button.defaultProps = {
  color: "steelblue",
};

//  Button.propTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string,
//     onClick: PropTypes.func.isRequired,
//  }
