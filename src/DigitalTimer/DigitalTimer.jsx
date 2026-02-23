import React, { useState, useRef, useEffect } from "react";
import './DigitalTimer.css';

export default function DigitalTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const pause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="container">
      <div className="clock">{formatTime()}</div>

      <div className="buttonContainer">
        <button className="button" onClick={start} disabled={isRunning}>
          START
        </button>
        <button className="button" onClick={pause} disabled={!isRunning}>
          PAUSE/STOP
        </button>
        <button className="button" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
}