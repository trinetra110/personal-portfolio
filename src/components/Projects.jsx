import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

const projects = [
  {
    name: "Civix",
    description:
      "A full-stack grievance management system using React, Appwrite, and Hugging Face AI, featuring Google OAuth & email/password authentication with JWT-based security. Designed role-based dashboards (User/Admin) with real-time status tracking (Pending → Resolved/Rejected). Integrated AI-powered grievance formatting and file uploads (5 files/grievance) via Appwrite Storage. Built a responsive UI with Tailwind CSS, ensuring secure workflows with input validation and protected routes. Reduced manual processing time by 30% through automated status updates.",
    githubLink: "https://github.com/trinetra110/civix",
  },
  {
    name: "PixelGuard",
    description:
      "An image integrity verification tool using Python, Pillow (PIL), and Hashlib to ensure image authenticity and detect " +
      "tampering through SHA-256 hashing, metadata analysis, and pixel-level comparison. Implemented pytest unit tests covering " +
      "hash generation, metadata extraction, and pixel-diff detection for reliability. Supports JPG, PNG, BMP, and WEBP formats, " +
      "enhancing integrity verification accuracy by 95%, making it valuable for cybersecurity and digital forensics.",
    githubLink: "https://github.com/trinetra110/PixelGuard",
  },
  {
    name: "ChronoCrypt",
    description:
      "A powerful CLI-based encryption tool that allows users to create time-locked secure notes that self-destruct after a specified " +
      "duration. Validated cryptographic integrity with pytest unit tests for AES-256 encryption/decryption, expiry enforcement, and " +
      "secure file deletion. Uses AES-256 (CBC mode) to securely store sensitive information, ensuring notes are unreadable beyond " +
      "their expiry time.",
    githubLink: "https://github.com/trinetra110/ChronoCrypt",
  },
  {
    name: "Weather CLI Tool",
    description:
      "A command-line interface tool that provides weather, AQI, and location data using APIs, designed to give developers quick weather status from the terminal.",
    githubLink: "https://github.com/trinetra110/weather-cli-tool",
  },
];

const Projects = () => {
  return (
    <div id="projects" style={{ padding: "50px 20px", textAlign: "center" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Projects
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.name}>
            <Card
              style={{
                background: "linear-gradient(145deg, #00bcd4, #000000)",
                color: "#fff",
                padding: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "8px",
              }}
              // Hover effect
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <CardContent>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="body2" style={{ marginBottom: "10px" }}>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#018388",
                    color: "#fff",
                  }}
                  href={project.githubLink}
                  target="_blank"
                >
                  GitHub
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
