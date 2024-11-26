import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

const projects = [
  {
    name: "Secure Pass",
    description:
      "A full-stack web application that helps users check password strength, generate strong passwords, and manage secret texts securely in a database.",
    githubLink: "https://github.com/trinetra110/secure-pass",
  },
  {
    name: "Weather CLI Tool",
    description:
      "A command-line interface tool that provides weather, AQI, and location data using APIs, designed to give developers quick weather status from the terminal.",
    githubLink: "https://github.com/trinetra110/weather-cli-tool",
  },
  {
    name: "Nomo Durga",
    description:
      "An open-source frontend application that lists and provides navigation to famous Durga Puja pandals in Kolkata, helping users explore locations during the festival.",
    githubLink: "https://github.com/trinetra110/nomo-durga",
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
