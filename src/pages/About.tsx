const About = () => {
    return (
      <div className="container">
        <h2>About This Website 💌</h2>
  
        <p style={{ marginTop: "20px", fontSize: "1.1em", lineHeight: "1.8" }}>
          Hey BBG 🥺💖,<br /><br />
          This isn’t just a website… it’s a whole **365-day journey of love** created just for you.  
          Every day you’ll find something here — a cute message, a surprise, a memory, or just a reminder of how much I love you.  
          You deserve to feel special every single day. And this is my way of making sure you always do.
          <br /><br />
          Because loving you isn’t something I do once — it’s my **daily routine.**
          <br /><br />
          Yours, forever and always 🌸💘
        </p>
  
        <div className="image-box">
          <img src="/assets/images/about.jpg" alt="About us" />
        </div>
  
        <a href="/calendar" className="button">See Your 365 Days 💫</a>
      </div>
    );
  };
  
  export default About;
  