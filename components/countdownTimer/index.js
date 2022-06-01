import {useState, useEffect} from "react";
import {getRemainingTimeUntilMsTimestamp} from "@utils/helpers";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({countdownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const countdown = [
    {title: "DAYS", time: remainingTime?.days},
    {title: "HOURS", time: remainingTime?.hours},
    {title: "MINUTES", time: remainingTime?.minutes},
    {title: "SECONDS", time: remainingTime?.seconds},
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div>
      <div className="flex flex-row font-roboto justify-between">
        {countdown?.map((item, index) => (
          <div
            className="flex flex-col justify-start align-start items-start"
            key={index}
          >
            <span className="flex text-black h4">{item?.time}</span>
            <span className="flex text-grey h6">{item?.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
