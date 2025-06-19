import { useEffect, useState } from "react";

const Surprise = () => {
  const [isSunday, setIsSunday] = useState(false);

  useEffect(() => {
    const today = new Date();
    const day = today.getDay(); // Sunday = 0
    setIsSunday(day === 0);
  }, []);

  return (
    <div className="container">
      <h2>Sunday Surprises 🎁</h2>
      {isSunday ? (
        <>
          <p style={{ marginTop: "20px", fontSize: "1.2em" }}>
            It’s Sunday! Time for your surprise BBG 😍
          </p>

          <div style={{ marginTop: "30px" }}>
            <img
              src="/assets/images/surprise1.jpg"
              alt="Surprise"
              style={{ maxWidth: "90%", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
            />
            <p style={{ marginTop: "20px", fontSize: "1.1em" }}>
              Just a little something to make you smile today 💕  
              <br />
              I’ve hidden more for next Sundays too 😉
            </p>
          </div>
        </>
      ) : (
        <p style={{ marginTop: "40px", fontSize: "1.2em", color: "#999" }}>
          Surprises are only unlocked on Sundays, BBG 😌<br />
          Come back in {7 - new Date().getDay()} day(s) for your next surprise!
        </p>
      )}
    </div>
  );
};

export default Surprise;
