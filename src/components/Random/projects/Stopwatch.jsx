import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [ss, setss] = useState(10);
  const [mm, setmm] = useState(1);
  const [hh, sethh] = useState(1);
  let timer;
  useEffect(() => {
    timer = setTimeout(() => setss(ss - 1), 1000);
    if (ss < 1) {
      setss(60);
      if (mm > 0) setmm(mm - 1);
      if (mm < 1) {
        setmm(60);
        if (hh > 0) sethh(hh - 1);
        if (hh <= 0) sethh(24);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  });

  function resetHandler() {
    setss(60);
    setmm(60);
    sethh(10);
  }
  function startHandler() {
    timer = setTimeout(() => setss(ss - 1), 1000);
  }
  function pauseHandler() {
    clearTimeout(timer);
  }
  return (
    <>
      <p>
        {hh}:{mm}:{ss}
      </p>

      <button onClick={startHandler}>Start</button>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
}

export default Stopwatch;
