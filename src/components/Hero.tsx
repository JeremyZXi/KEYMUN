import React, { useEffect, useState } from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative h-full flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Keystone Model United Nation
                    </h1>
                    <h3 className="text-lg md:text-2xl font-semibold text-white/90 mb-6">
                        November 7–9, 2025 @ Keystone Academy, Beijing
                    </h3>

                    {/* Countdown merged + styled to match hero */}
                    <div className="max-w-3xl mx-auto">
                        <CountdownTimer targetDateString="25/11/7/00/00/00" />
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * CountdownTimer
 * targetDateString format: "YY/MM/DD/HH/MM/SS" (e.g., "25/11/7/00/00/00" → Nov 7, 2025 00:00:00 local time)
 */
const CountdownTimer = ({ targetDateString = "25/11/7/00/00/00" }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const parseTarget = () => {
            const [yy, mm, dd, HH, MM, SS] = targetDateString.split('/').map(Number);
            return new Date(2000 + yy, (mm || 1) - 1, dd || 1, HH || 0, MM || 0, SS || 0);
        };

        const calc = () => {
            const target = parseTarget();
            const now = new Date();
            const diff = target - now;

            if (diff <= 0) {
                setIsExpired(true);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            };
        };

        setTimeLeft(calc());
        const timer = setInterval(() => setTimeLeft(calc()), 1000);
        return () => clearInterval(timer);
    }, [targetDateString]);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="text-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">KEYMUN starts in</h2>
                <div className="h-1 w-16 md:w-20 bg-[#005694] rounded mx-auto mt-2"></div>
            </div>

            {isExpired ? (
                <div className="text-base md:text-lg font-semibold text-white bg-[#005694] bg-opacity-90 px-4 py-2 rounded-md shadow-lg">
                    KEYMUN is now live!
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                    <TimeBlock value={timeLeft.days} label="Days" />
                    <TimeBlock value={timeLeft.hours} label="Hours" />
                    <TimeBlock value={timeLeft.minutes} label="Minutes" />
                    <TimeBlock value={timeLeft.seconds} label="Seconds" />
                </div>
            )}
        </div>
    );
};

const TimeBlock = ({ value, label }) => {
    const display = value < 10 ? `0${value}` : value;

    return (
        <div className="flex flex-col items-center">
            <div
                className="
          w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
          flex items-center justify-center
          text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight
          rounded-xl
          bg-white/10 backdrop-blur
          border border-white/20
          shadow-[0_6px_30px_rgba(0,0,0,0.35)]
          text-white
        "
            >
                {display}
            </div>
            <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-white/80">
                {label}
            </div>
        </div>
    );
};

export default Hero;
