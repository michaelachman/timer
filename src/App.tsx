import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isTimerOn, setTimerOn] = useState(false);
  const [timerValue, setTimerValue] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(()=>{
  //     setCount((prev) => prev + 1)
  //   }, 1000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  function formatTime(ms: any) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(ms / (1000 * 60));
    let formattedMs = Math.floor(ms % 1000)
      .toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })
      .slice(0, 2);
    let formattedS = (seconds % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      maximumFractionDigits: 2,
    });
    let formattedM = (minutes % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      maximumFractionDigits: 2,
    });

    return (
      <h1>
        {formattedM}:{formattedS}:{formattedMs}
      </h1>
    );
  }

  function setTimer() {
    setTimerOn((prev) => !prev);

    if (isTimerOn) {
      setTimerValue(
        setInterval(() => {
          setCount((prev) => prev + 10);
        }, 10)
      );
    } else {
      clearInterval(timerValue);
    }
  }

  function resetTimer() {
    setTimerOn(false);
    setCount(0);
  }

  return (
    <div
      onClick={setTimer}
      onDoubleClick={resetTimer}
      className="font tracking-tighter flex h-screen w-screen place-content-center place-items-center bg-gradient-to-b from-indigo-500 to-black "
    >
      <h1 className="text-9xl text-white">{formatTime(count)}</h1>
    </div>
  );
}

export default App;
