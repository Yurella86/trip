import React, {useState, useEffect} from "react";
import "../style/timer.scss";

const Timer = ({timeStart}) => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval;

    const startTimer = () => {
        const countdownDate = new Date(`${timeStart}`).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval);
        };
    }, [timeStart]);

    if (!timeStart) {
        return <div className="not-time">loding...</div>;
    }

    return (
        <div className="timer">
            <div className="flex-container">
                <div className="num timer-days">
                    <span>{timerDays}</span> <br />
                    days
                </div>
                <div className="num timer-hours">
                    <span>{timerHours}</span> <br />
                    hours
                </div>
                <div className="num timer-minutes">
                    <span>{timerMinutes}</span> <br />
                    minutes
                </div>
                <div className="num timer-seconds">
                    <span>{timerSeconds}</span> <br />
                    seconds
                </div>
            </div>
        </div>
    );
};

export default Timer;
