import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const About = () => {
  return (
    <div id="about" style={{ padding: "50px 20px", textAlign: "center" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        About Me
      </Typography>
      <Card style={{ background: "#0f0f3d", color: "#fff" }}>
        <CardContent>
          <Typography>
            Hi, I&apos;m Ayan Mondal, a 3rd Year B.Tech CSE student at Netaji Subhash
            Engineering College, India. Passionate about cybersecurity, web
            development, and building innovative projects.
          </Typography>
        </CardContent>
      </Card>

      {/* Social Media Links */}
      <div style={{ marginTop: "20px" }}>
        <IconButton
          href="https://www.linkedin.com/in/ayan-mondal-063ba323b"
          target="_blank"
          color="primary"
          style={{ margin: "0 10px" }}
        >
          <LinkedIn fontSize="large" />
        </IconButton>

        <IconButton
          href="https://github.com/trinetra110"
          target="_blank"
          color="primary"
          style={{ margin: "0 10px" }}
        >
          <GitHub fontSize="large" />
        </IconButton>

        <IconButton
          href="https://x.com/trinetra110"
          target="_blank"
          color="primary"
          style={{ margin: "0 10px" }}
        >
          <Twitter fontSize="large" />
        </IconButton>
      </div>

      {/* Button to open Resume */}
      <Button
        variant="contained"
        color="primary"
        href="https://drive.google.com/file/d/1ikR37mqfCxEGIles1pG-af0EpVhj7l6S/view?usp=sharing"
        target="_blank"
        style={{ marginTop: "20px", backgroundColor: "#08f" }}
      >
        Résumé
      </Button>
    </div>
  );
};

export default About;
