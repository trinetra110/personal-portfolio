import { Grid, Card, CardContent, Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const SkillsContainer = styled(Box)({
  padding: "100px 0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 70% 30%, rgba(0, 153, 204, 0.05) 0%, transparent 50%)",
    pointerEvents: "none",
  },
});

const SkillCard = styled(Card)(({ category }) => {
  const colors = {
    languages: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
    frontend: "linear-gradient(135deg, #00d4ff, #0099cc)",
    backend: "linear-gradient(135deg, #10ac84, #00a085)",
    tools: "linear-gradient(135deg, #a55eea, #8b5cf6)",
    databases: "linear-gradient(135deg, #feca57, #ff9ff3)",
    design: "linear-gradient(135deg, #ff9ff3, #54a0ff)",
  };

  return {
    background: colors[category] || colors.frontend,
    color: "white",
    borderRadius: "16px",
    padding: "1rem",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(255, 255, 255, 0.1)",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    "&:hover": {
      transform: "translateY(-8px) scale(1.05)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      "&::before": {
        opacity: 1,
      },
    },
  };
});

const CategoryTitle = styled(Typography)({
  color: "#00d4ff",
  fontWeight: 600,
  marginBottom: "1.5rem",
  fontSize: "1.3rem",
  textAlign: "center",
});

const skills = {
  languages: ["C", "C++", "Python", "JavaScript"],
  frontend: ["React.js", "HTML", "CSS", "Bootstrap"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  tools: ["Git, GitHub", "AWS", "Firebase", "Linux", "Windows"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
  design: ["Canva", "Figma"],
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <SkillsContainer id="skills">
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
            Skills & Technologies
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#b3d9ff",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            A comprehensive toolkit for building modern, secure, and scalable applications
          </Typography>
        </Box>

        {Object.entries(skills).map(([category, skillList]) => (
          <Box key={category} mb={6}>
            <CategoryTitle variant="h5">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryTitle>
            <Grid container spacing={3} justifyContent="center">
              {skillList.map((skill, index) => (
                <Grid item xs={6} sm={4} md={3} key={skill}>
                  <SkillCard
                    category={category}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    sx={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <CardContent sx={{ textAlign: "center", p: 2 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          fontSize: hoveredSkill === skill ? "1.1rem" : "1rem",
                          transition: "font-size 0.3s ease",
                        }}
                      >
                        {skill}
                      </Typography>
                    </CardContent>
                  </SkillCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </SkillsContainer>
  );
};

export default Skills;