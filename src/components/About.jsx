import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
  Fade,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter, Download } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const AboutContainer = styled(Box)({
  padding: "100px 0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 30% 70%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)",
    pointerEvents: "none",
  },
});

const GlassCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(0, 212, 255, 0.2)",
  borderRadius: "24px",
  padding: "2rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(0, 212, 255, 0.4)",
  },
});

const SocialButton = styled(IconButton)(({ theme }) => ({
  background: "rgba(0, 212, 255, 0.1)",
  border: "1px solid rgba(0, 212, 255, 0.3)",
  color: "#00d4ff",
  margin: "0 8px",
  width: 56,
  height: 56,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background: "rgba(0, 212, 255, 0.2)",
    transform: "translateY(-4px) scale(1.1)",
    boxShadow: "0 10px 25px rgba(0, 212, 255, 0.3)",
  },
}));

const EnhancedButton = styled(Button)({
  background: "linear-gradient(135deg, #00d4ff, #0099cc)",
  color: "white",
  fontWeight: 600,
  fontSize: "1.1rem",
  padding: "12px 32px",
  borderRadius: "30px",
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    transition: "left 0.5s",
  },
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 15px 35px rgba(0, 212, 255, 0.4)",
    "&::before": {
      left: "100%",
    },
  },
});

const About = () => {
  const socialLinks = [
    {
      icon: <LinkedIn fontSize="large" />,
      href: "https://www.linkedin.com/in/ayan-mondal-063ba323b",
      label: "LinkedIn",
    },
    {
      icon: <GitHub fontSize="large" />,
      href: "https://github.com/trinetra110",
      label: "GitHub",
    },
    {
      icon: <Twitter fontSize="large" />,
      href: "https://x.com/trinetra110",
      label: "Twitter",
    },
  ];

  return (
    <AboutContainer id="about">
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box textAlign="center">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 6,
                fontWeight: 700,
                background: "linear-gradient(135deg, #00d4ff, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Me
            </Typography>

            <GlassCard>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    lineHeight: 1.8,
                    color: "#e8e8e8",
                    fontSize: "1.2rem",
                    mb: 4,
                  }}
                >
                  Hi, I'm <span style={{ color: "#00d4ff", fontWeight: 600 }}>Ayan Mondal</span>, 
                  a passionate 3rd Year B.Tech CSE student at{" "}
                  <span style={{ color: "#00d4ff" }}>Netaji Subhash Engineering College</span>, India. 
                  I specialize in cybersecurity, full-stack web development, and creating innovative 
                  solutions that make a difference. My journey in technology is driven by curiosity 
                  and a desire to build secure, scalable applications.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    mb: 4,
                  }}
                >
                  {["Problem Solver", "Team Player", "Quick Learner", "Innovation Focused"].map(
                    (trait, index) => (
                      <Box
                        key={trait}
                        sx={{
                          px: 3,
                          py: 1,
                          background: "rgba(0, 212, 255, 0.1)",
                          border: "1px solid rgba(0, 212, 255, 0.3)",
                          borderRadius: "20px",
                          fontSize: "0.9rem",
                          color: "#00d4ff",
                          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                        }}
                      >
                        {trait}
                      </Box>
                    )
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 3,
                    mb: 4,
                  }}
                >
                  {socialLinks.map((social) => (
                    <SocialButton
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </SocialButton>
                  ))}
                </Box>

                <EnhancedButton
                  href="https://drive.google.com/file/d/1c765HdQQFMOqeQfAGF1HjY7uXFO5qiRc/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Download />}
                >
                  Download Resume
                </EnhancedButton>
              </CardContent>
            </GlassCard>
          </Box>
        </Fade>
      </Container>
    </AboutContainer>
  );
};

export default About;