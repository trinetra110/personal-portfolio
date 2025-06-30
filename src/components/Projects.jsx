import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Box,
  Chip,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const ProjectsContainer = styled(Box)({
  padding: "100px 0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)",
    pointerEvents: "none",
  },
});

const ProjectCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(0, 212, 255, 0.2)",
  borderRadius: "20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.05))",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
    border: "1px solid rgba(0, 212, 255, 0.4)",
    "&::before": {
      opacity: 1,
    },
  },
});

const ProjectTitle = styled(Typography)({
  color: "#00d4ff",
  fontWeight: 700,
  fontSize: "1.5rem",
  marginBottom: "1rem",
});

const ProjectDescription = styled(Typography)({
  color: "#e8e8e8",
  lineHeight: 1.6,
  marginBottom: "1.5rem",
  flexGrow: 1,
});

const TechChip = styled(Chip)({
  background: "rgba(0, 212, 255, 0.1)",
  color: "#00d4ff",
  border: "1px solid rgba(0, 212, 255, 0.3)",
  fontSize: "0.8rem",
  margin: "2px",
  "&:hover": {
    background: "rgba(0, 212, 255, 0.2)",
  },
});

const ActionButton = styled(Button)({
  background: "linear-gradient(135deg, #00d4ff, #0099cc)",
  color: "white",
  fontWeight: 600,
  borderRadius: "25px",
  padding: "8px 20px",
  margin: "4px",
  textTransform: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 20px rgba(0, 212, 255, 0.4)",
  },
});

const projects = [
  {
    name: "Civix",
    description:
      "A comprehensive full-stack grievance management system featuring AI-powered formatting, real-time status tracking, and role-based dashboards. Built with React, Appwrite, and Hugging Face AI integration.",
    technologies: ["React", "Appwrite", "AI/ML", "JWT", "Tailwind CSS"],
    githubLink: "https://github.com/trinetra110/civix",
    highlights: ["30% faster processing", "AI-powered", "Real-time tracking"],
  },
  {
    name: "PixelGuard",
    description:
      "Advanced image integrity verification tool using cryptographic hashing and pixel-level analysis. Supports multiple formats with 95% accuracy in detecting tampering for cybersecurity applications.",
    technologies: ["Python", "PIL", "Hashlib", "Pytest", "Cryptography"],
    githubLink: "https://github.com/trinetra110/PixelGuard",
    highlights: ["95% accuracy", "Multi-format support", "Forensics ready"],
  },
  {
    name: "ChronoCrypt",
    description:
      "Innovative CLI-based encryption tool for creating time-locked secure notes with automatic self-destruction. Features AES-256 encryption and comprehensive security testing.",
    technologies: ["Python", "AES-256", "CLI", "Pytest", "Cryptography"],
    githubLink: "https://github.com/trinetra110/ChronoCrypt",
    highlights: ["Time-locked", "AES-256", "Auto-destruct"],
  },
  {
    name: "Weather CLI Tool",
    description:
      "Efficient command-line weather application providing real-time weather, AQI, and location data through API integration. Designed for developers who prefer terminal-based tools.",
    technologies: ["Node.js", "APIs", "CLI", "JavaScript"],
    githubLink: "https://github.com/trinetra110/weather-cli-tool",
    highlights: ["Real-time data", "Multiple APIs", "Developer-friendly"],
  },
];

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #00d4ff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#b3d9ff",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Innovative solutions showcasing full-stack development and cybersecurity expertise
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.name}>
              <ProjectCard
                sx={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <CardContent sx={{ p: 3, position: "relative", zIndex: 1 }}>
                  <ProjectTitle variant="h5">{project.name}</ProjectTitle>
                  
                  <Box mb={2}>
                    {project.highlights.map((highlight) => (
                      <TechChip
                        key={highlight}
                        label={highlight}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>

                  <ProjectDescription variant="body1">
                    {project.description}
                  </ProjectDescription>

                  <Box mb={3}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#b3d9ff", mb: 1 }}
                    >
                      Technologies:
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={0.5}>
                      {project.technologies.map((tech) => (
                        <TechChip key={tech} label={tech} size="small" />
                      ))}
                    </Box>
                  </Box>

                  <Box display="flex" gap={1} flexWrap="wrap">
                    <ActionButton
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHub />}
                    >
                      View Code
                    </ActionButton>
                  </Box>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;