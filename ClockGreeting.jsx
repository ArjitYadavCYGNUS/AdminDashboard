import React, { useState, useEffect } from "react";

export default function ClockGreeting() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good Morning 🌅";
    if (hour < 18) return "Good Afternoon ☀️";
    return "Good Evening 🌙";
  };

  return (
    <div className="text-lg font-semibold text-right">
      <p>{getGreeting()}</p>
      <p className="text-sm">{time.toLocaleTimeString()}</p>
    </div>
  );
}
