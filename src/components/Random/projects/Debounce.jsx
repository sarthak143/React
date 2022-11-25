import React, { useState, useEffect } from "react";

function Debounce() {
  function debounce(cb, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  function throttle(cb, delay) {
    let inThrottle;
    return (...args) => {
      if (inThrottle) return;
      inThrottle = true;
      cb(...args);
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    };
  }

  return (
    <>
      <button onClick={debounce((e) => console.log("debounce"), 1000)}>
        Click Me Debounce
      </button>
      <button onClick={throttle((e) => console.log("throttle"), 1000)}>
        Click Me Throttle
      </button>
    </>
  );
}

export default Debounce;
