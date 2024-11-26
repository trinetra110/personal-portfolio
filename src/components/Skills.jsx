import { Grid, Card, CardContent, Typography } from "@mui/material";

const skills = [
  "C",
  "C++",
  "Python",
  "React.js",
  "Node.js",
  "Express.js",
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "Git, GitHub",
  "AWS",
  "Firebase",
  "REST APIs",
  "Linux",
  "Windows",
  "Canva",
  "Figma",
  "NoSQL (MongoDB)",
  "SQL (MySQL, PostgreSQL)",
];

const Skills = () => {
  return (
    <div id="skills" style={{ padding: "50px 20px", textAlign: "center" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill) => (
          <Grid item xs={6} sm={4} md={2} key={skill}>
            <Card
              style={{
                background: "linear-gradient(145deg, #003366, #000000)",
                color: "#fff",
                padding: "10px",
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
                <Typography align="center">{skill}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
