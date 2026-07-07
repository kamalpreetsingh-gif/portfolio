import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at top left, #4facfe 0%, transparent 30%), linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1050px",
          padding: "60px 45px",
          borderRadius: "28px",
          textAlign: "center",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.22)",
        }}
      >
        <p
          style={{
            display: "inline-block",
            padding: "10px 18px",
            borderRadius: "25px",
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.25)",
            fontSize: "16px",
            marginBottom: "25px",
          }}
        >
          👨‍💻 B.Tech CSE Student Portfolio
        </p>

        <h1
          style={{
            fontSize: "58px",
            fontWeight: "700",
            marginBottom: "25px",
          }}
        >
          Welcome to My Portfolio
        </h1>

        <p
          style={{
            fontSize: "21px",
            maxWidth: "780px",
            margin: "0 auto 42px",
            lineHeight: "1.8",
            color: "#f2f2f2",
          }}
        >
          Explore my projects, skills, achievements, certifications and discover
          more about my journey as a Computer Science student.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/portfolio/home">
            <button
              style={{
                padding: "15px 34px",
                fontSize: "17px",
                fontWeight: "bold",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                background: "white",
                color: "#1e3c72",
              }}
            >
              Go to Home →
            </button>
          </Link>

          <Link href="/portfolio/about">
            <button
              style={{
                padding: "15px 34px",
                fontSize: "17px",
                fontWeight: "bold",
                borderRadius: "12px",
                border: "2px solid white",
                cursor: "pointer",
                background: "transparent",
                color: "white",
              }}
            >
              About Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}