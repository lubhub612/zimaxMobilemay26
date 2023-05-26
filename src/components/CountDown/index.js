import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    window.location.reload();
    return '00:00:00';
  } else {
    // Render a countdown
    return (
      <>
        {`0${hours}`}:{minutes}:{seconds}
      </>
    );
  }
};

const getLocalStorageValue = (s) => localStorage.getItem(s);

export default function CountDown() {
  const [data, setData] = useState(
    { date: Date.now(), delay: 900000 } //15 minutes
  );
  const wantedDelay = 900000; //15 minutes

  //[START] componentDidMount
  //Code runs only one time after each reloading
  useEffect(() => {
    const savedDate = getLocalStorageValue('end_date');
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      //Do you reach the end?
      if (delta > wantedDelay) {
        //Yes we clear uour saved end date
        if (localStorage.getItem('end_date').length > 0)
          localStorage.removeItem('end_date');
      } else {
        //No update the end date with the current date
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);
  return (
    <>
      <Countdown
        date={data.date + data.delay}
        renderer={renderer}
        onStart={(delta) => {
          //Save the end date
          if (localStorage.getItem('end_date') == null)
            localStorage.setItem(
              'end_date',
              JSON.stringify(data.date + data.delay)
            );
        }}
        onComplete={() => {
          if (localStorage.getItem('end_date') != null)
            localStorage.removeItem('end_date');
        }}
      />
    </>
  );
}
