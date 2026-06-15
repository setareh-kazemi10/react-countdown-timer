import { useEffect, useState } from "react";
import './countDown.css';

const CountDown = () => {
   const [day, setDay] = useState(0);
   const [hours, setHours] = useState(0);
   const [minute, setMinute] = useState(0);
   const [second, setSecond] = useState(0);

   const datePast = new Date("2026-07-01T12:01");
   useEffect(() => {
      const timer = setInterval(() => {
         const date = new Date();
         const diffDate = datePast - date;
         if (diffDate <= 0) {
            setDay(0);
            setHours(0);
            setMinute(0);
            setSecond(0);
            clearInterval(timer);
            return;
         }
         const secondDate = 1000;
         const minuteDate = 60 * secondDate;
         const hoursDate = 60 * minuteDate;
         const dayDate = hoursDate * 24;
         const newDay = Math.floor(diffDate / dayDate);
         const newHours = Math.floor((diffDate % dayDate) / hoursDate);
         const newMinute = Math.floor((diffDate % hoursDate) / minuteDate);
         const newSecond = Math.floor((diffDate % minuteDate) / secondDate);
         setDay(newDay);
         setHours(newHours);
         setMinute(newMinute);
         setSecond(newSecond);

      }, 1000);
      return () => clearInterval(timer)

   }, [])

   return (
      <div className="time-counter">
         <div className="time-countdown clearfix" data-countdown="2020/2/01">
            <div className="counter-column">
               <div className="inner">
                  <span className="count" >{day}</span>Days</div></div>
            <div className="counter-column">
               <div className="inner"><span className="count">{hours}</span>Hours</div></div>
            <div className="counter-column">
               <div className="inner">
                  <span className="count">{minute}</span>Mins</div></div>
            <div className="counter-column">
               <div className="inner"><span className="count">{second}</span>Secs</div>
            </div>
         </div>
      </div>
   );
}

export default CountDown;