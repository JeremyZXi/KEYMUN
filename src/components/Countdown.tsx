import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    // Developer can change this target date (format: YY/MM/DD/HH/MM/SS)
    const targetDateString = "25/9/13/00/00/00"; // Example: Christmas 2025

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            // Parse the target date string
            const [year, month, day, hour, minute, second] = targetDateString.split('/').map(Number);
            const targetDate = new Date(2000 + year, month - 1, day, hour, minute, second);
            const now = new Date();

            const difference = targetDate - now;

            if (difference <= 0) {
                setIsExpired(true);
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        };

        // Calculate immediately
        setTimeLeft(calculateTimeLeft());

        // Then set up interval
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clean up interval
        return () => clearInterval(timer);
    }, [targetDateString]);

    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    return (
        <div className="flex flex-col items-center justify-center p-8" style={{ backgroundColor: "#192236" }}>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-white">KEYMUN starts in</h2>
                <div className="h-1 w-20 bg-[#9e0a3b] rounded mx-auto"></div>
            </div>

            {isExpired ? (
                <div className="text-xl font-bold p-4 rounded-md text-white bg-opacity-80" style={{ backgroundColor: "#9e0a3b" }}>
                    KEYMUN is now live!
                </div>
            ) : (
                <>
                    <div className="flex space-x-4 mb-6">
                        <TimeBlock value={timeLeft.days} label="Days" />
                        <TimeBlock value={timeLeft.hours} label="Hours" />
                        <TimeBlock value={timeLeft.minutes} label="Minutes" />
                        <TimeBlock value={timeLeft.seconds} label="Seconds" />
                    </div>

                    <div className="text-sm text-gray-300 mt-2">
                        {/*Counting down to: {targetDateString.replace(/\//g, '-')}*/}
                    </div>
                </>
            )}
        </div>
    );
};

const TimeBlock = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-32 h-32 flex items-center justify-center text-5xl font-bold rounded-md"
                 style={{ backgroundColor: "#9e0a3b", color: "white" }}>
                {value < 10 ? `0${value}` : value}
            </div>
            <div className="text-sm mt-2 text-white">{label}</div>
        </div>
    );
};

export default CountdownTimer;

