import Link from "next/link";

const about = {
  name: "Kamalpreet Singh",
  title: "B.Tech CSE Student",
  location: "Ludhiana, Punjab",
  email: "kamalpreetsingh2216@gmail.com",
  phone: "+91 6284559758",
  summary:
    "Motivated Computer Science Engineering student with hands-on experience in Python, C/C++, full-stack development, IoT hardware and event leadership.",

  skills: [
    "Python",
    "C",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "MongoDB",
    "Flask",
    "React",
    "Next.js",
    "Arduino",
    "LoRaWAN",
    "Git",
    "Figma",
  ],

  projects: [
    {
      title: "VetsApp",
      tech: "Python, MongoDB",
      desc: "Veterinary appointment platform for pet owners and veterinarians.",
    },
    {
      title: "Online Learning Tutor",
      tech: "Python, HTML, CSS",
      desc: "AI-powered e-learning platform with Q&A, speech detection and quizzes.",
    },
    {
      title: "Smart Irrigation System",
      tech: "Arduino, LoRaWAN",
      desc: "IoT-based automated irrigation system for real-time field monitoring.",
    },
  ],

  education: [
    "B.Tech CSE - Guru Nanak Dev Engineering College, Ludhiana",
    "Diploma CSE - Guru Nanak Dev Polytechnic College, Ludhiana",
  ],

  leadership: [
    "Discipline Head - Cultural Committee",
    "Hospitality Head",
    "Overall Event Coordinator",
    "ICCT-SD 2026 Management Member",
    "NSS Volunteer",
  ],
};

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #4facfe 0%, transparent 30%), linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              marginBottom: "10px",
            }}
          >
            About Me
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#e8e8e8",
            }}
          >
            My skills, projects, education and leadership journey 🚀
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            borderRadius: "28px",
            padding: "40px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ fontSize: "34px", marginBottom: "10px" }}>
            👋 Hi, I am {about.name}
          </h2>

          <h3
            style={{
              fontSize: "22px",
              fontWeight: "normal",
              color: "#FFD166",
              marginBottom: "20px",
            }}
          >
            {about.title} | {about.location}
          </h3>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#f2f2f2",
            }}
          >
            {about.summary} I enjoy building useful applications, managing
            teams, learning new technologies and turning ideas into working
            digital projects.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            <span style={infoBox}>📧 {about.email}</span>
            <span style={infoBox}>📞 {about.phone}</span>
            <span style={infoBox}>📍 {about.location}</span>
          </div>
        </div>

        <div style={grid}>
          <section style={card}>
            <h2>🎓 Education</h2>
            {about.education.map((item) => (
              <p key={item} style={listItem}>
                ✅ {item}
              </p>
            ))}
          </section>

          <section style={card}>
            <h2>🌟 Leadership</h2>
            {about.leadership.map((item) => (
              <p key={item} style={listItem}>
                ⭐ {item}
              </p>
            ))}
          </section>
        </div>

        <section style={card}>
          <h2>💻 Technical Skills</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {about.skills.map((skill) => (
              <span key={skill} style={skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section style={card}>
          <h2>🚀 Projects</h2>

          <div style={projectGrid}>
            {about.projects.map((project) => (
              <div key={project.title} style={projectCard}>
                <h3 style={{ fontSize: "24px", marginBottom: "8px" }}>
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#FFD166",
                    fontWeight: "bold",
                    marginBottom: "12px",
                  }}
                >
                  {project.tech}
                </p>

                <p
                  style={{
                    lineHeight: "1.6",
                    color: "#f0f0f0",
                  }}
                >
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            display: "flex",
            gap: "18px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          <Link href="/portfolio/home">
            <button style={whiteButton}>← Back to Home</button>
          </Link>

          <a
            href="https://www.linkedin.com/in/kamalpreet-singh-744774329/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={linkedInButton}>💼 Visit LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",
  borderRadius: "24px",
  padding: "32px",
  boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
  marginBottom: "30px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const projectGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "22px",
  marginTop: "20px",
};

const projectCard = {
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "18px",
  padding: "24px",
};

const skillBadge = {
  background: "white",
  color: "#1e3c72",
  padding: "10px 18px",
  borderRadius: "25px",
  fontWeight: "bold",
};

const infoBox = {
  background: "rgba(255,255,255,0.18)",
  border: "1px solid rgba(255,255,255,0.25)",
  padding: "10px 16px",
  borderRadius: "20px",
};

const listItem = {
  fontSize: "17px",
  lineHeight: "1.8",
};

const whiteButton = {
  padding: "14px 30px",
  border: "none",
  borderRadius: "10px",
  background: "white",
  color: "#1e3c72",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

const linkedInButton = {
  padding: "14px 30px",
  border: "none",
  borderRadius: "10px",
  background: "#0A66C2",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};