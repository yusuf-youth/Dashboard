import { useEffect, useState } from "react";

const DateDisplay = ({ className = "" }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 86400000); // 24 hours in milliseconds

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
    };
    const day = new Intl.DateTimeFormat("en-US", options).format(date);
    const dayNumber = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return {
      day,
      displayDate: `${dayNumber}/${month}/${year}`,
      isoDate: `${year}-${month}-${dayNumber}`,
    };
  };

  const { day, displayDate, isoDate } = formatDate(currentDate);

  return (
    <div className={`header__date-display date-display ${className}`}>
      <span className="date-display__day">{day}</span>
      <time className="date-display__date" dateTime={isoDate}>
        {displayDate}
      </time>
    </div>
  );
};

export default DateDisplay;
