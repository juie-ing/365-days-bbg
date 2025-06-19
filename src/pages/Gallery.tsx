const images = [
    "/assets/gallery/memory1.jpg",
    "/assets/gallery/memory2.jpg",
    "/assets/gallery/memory3.jpg",
    "/assets/gallery/memory4.jpg",
    "/assets/gallery/memory5.jpg",
  ];
  
  const Gallery = () => {
    return (
      <div className="container">
        <h2>Our Memories 📸</h2>
        <p style={{ marginTop: "10px", fontSize: "1.1em" }}>
          These are not just pictures — they’re pieces of us 💘
        </p>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Memory ${index + 1}`}
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  