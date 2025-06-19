import { useEffect, useState } from "react";
import messages from "../data/messages";

const Calendar = () => {
  const [todayMessage, setTodayMessage] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const todayDate = new Date();
    const formatted = todayDate.toISOString().split("T")[0]; // yyyy-mm-dd
    setToday(formatted);

    if (messages[formatted]) {
      setTodayMessage(messages[formatted]);
    } else {
      setTodayMessage("No special message written for today yet 😌 But know this: I’m always thinking of you ❤️");
    }
  }, []);

  return (
    <div className="container">
      <h2>Today’s Love Note 💌</h2>
      <p style={{ marginTop: "10px", fontSize: "1.2em" }}>
        {new Date(today).toDateString()}
      </p>

      <div style={{ marginTop: "30px", padding: "20px", background: "#ffe6f2", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <p style={{ fontSize: "1.3em", color: "#c2185b", lineHeight: "1.8" }}>{todayMessage}</p>
      </div>
    </div>
  );
};

export default Calendar;
