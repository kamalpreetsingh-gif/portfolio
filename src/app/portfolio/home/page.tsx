import Link from "next/link";

const profile = {
  name: "Kamalpreet Singh",
  title: "B.Tech CSE Student",
  semester: "7th Semester",
  photo: "/profile.jpeg",
};

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #4facfe 0%, transparent 30%), linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "25px",
          padding: "50px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.22)",
        }}
      >
        <div
          style={{
            flex: 1,
            textAlign: "center",
          }}
        >
          <img
            src={profile.photo}
            alt="Profile"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        <div
          style={{
            flex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              marginBottom: "10px",
            }}
          >
            {profile.name}
          </h1>

          <h2
            style={{
              fontSize: "28px",
              fontWeight: "normal",
              marginBottom: "10px",
              color: "#FFD166",
            }}
          >
            {profile.title}
          </h2>

          <p
            style={{
              fontSize: "20px",
              marginBottom: "25px",
            }}
          >
            🎓 {profile.semester}
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#f2f2f2",
              marginBottom: "35px",
            }}
          >
            Passionate Computer Science student with a strong interest in Web
            Development, React, Next.js, and building modern responsive
            applications. I enjoy solving real-world problems through technology
            and continuously learning new skills.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            <Link href="/portfolio/about">
              <button
                style={{
                  padding: "14px 30px",
                  border: "none",
                  borderRadius: "10px",
                  background: "white",
                  color: "#1e3c72",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                About Me
              </button>
            </Link>

            <a
              href="https://www.linkedin.com/in/kamalpreet-singh-744774329/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  padding: "14px 30px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#0A66C2",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                💼 LinkedIn
              </button>
            </a>
          </div>

          <hr
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              marginBottom: "20px",
            }}
          />

          <p
            style={{
              fontSize: "17px",
              color: "#e8e8e8",
              margin: 0,
            }}
          >
            💻 HTML • CSS • JavaScript • React • Next.js • TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}