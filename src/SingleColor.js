import React, { useState, useEffect, Component } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  // console.log(hexColor);
  // console.log(index);
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(',');

  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clicpboard</p>}
    </article>
  );
};

export default SingleColor;
