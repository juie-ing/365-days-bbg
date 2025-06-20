import React from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const memories = [
  {
    id: 1,
    title: "Our First Adventure 🌟",
    image: "/assets/gallery/memory1.jpg",
    date: "March 15, 2023",
  },
  {
    id: 2,
    title: "When You Send Me 47 Memes 😂",
    image: "/assets/gallery/memory2.jpg",
    date: "June 22, 2023",
  },
  {
    id: 3,
    title: "Coffee Date Vibes ☕",
    image: "/assets/gallery/memory3.jpg",
    date: "August 10, 2023",
  },
  {
    id: 4,
    title: "Our Funniest Chat 💬",
    image: "/assets/gallery/memory4.jpg",
    date: "September 5, 2023",
  },
  {
    id: 5,
    title: "Sunset Moments 🌅",
    image: "/assets/gallery/memory5.jpg",
    date: "October 18, 2023",
  },
  {
    id: 6,
    title: "Us Planning Anything 📅",
    image: "/assets/gallery/memory6.jpg",
    date: "November 12, 2023",
  },
]

export default function TimeTravel() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        padding: "2rem 1rem",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#FFF8F0",
        color: "#4B2C36",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#FF6B6B",
              padding: "10px 16px",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={18} /> Back Home
          </button>

          <h1
            style={{
              fontSize: "2.3rem",
              fontFamily: "Pacifico, cursive",
              textAlign: "center",
              flex: 1,
              color: "#ff6b6b",
            }}
          >
            📸 Time Travel Gallery
          </h1>

          <div style={{ width: "100px" }}></div>
        </div>

        {/* Gallery */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {memories.map((memory) => (
            <div
              key={memory.id}
              style={{
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                padding: "0.75rem 0.75rem 1.3rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={memory.image}
                alt={memory.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginBottom: "1rem",
                }}
              />
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: "bold",
                  color: "#4B2C36",
                  marginBottom: "0.4rem",
                }}
              >
                {memory.title}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#7b5a63" }}>
                {memory.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
