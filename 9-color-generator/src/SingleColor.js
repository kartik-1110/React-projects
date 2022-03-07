import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  // converting rgb to hex value
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  return (
    <article
      className={`color ${index > 10 && "color-light"} `}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
