import { Typography, Avatar, Box, Container } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 50px rgba(0, 212, 255, 0.8);
  }
`;

const FloatingAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  margin: "0 auto 2rem",
  border: "4px solid rgba(0, 212, 255, 0.3)",
  animation: `${float} 6s ease-in-out infinite, ${glow} 3s ease-in-out infinite`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "scale(1.1)",
    border: "4px solid rgba(0, 212, 255, 0.6)",
  },
  [theme.breakpoints.down('md')]: {
    width: 150,
    height: 150,
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(135deg, #00d4ff, #ffffff, #0099cc)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  textShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
  [theme.breakpoints.down('md')]: {
    fontSize: "2.5rem",
  },
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  color: "#b3d9ff",
  fontWeight: 400,
  fontSize: "1.5rem",
  marginTop: "1rem",
  opacity: 0.9,
  [theme.breakpoints.down('md')]: {
    fontSize: "1.2rem",
  },
}));

const HeroContainer = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  background: "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 153, 204, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)
    `,
    pointerEvents: "none",
  },
});

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Box textAlign="center" py={8}>
          <FloatingAvatar
            src="/personal-portfolio/Profile_pic.jpg"
            alt="Ayan Mondal"
          />
          <GradientText variant="h1" component="h1">
            AYAN MONDAL
          </GradientText>
          <SubtitleText variant="h4" component="h2">
            Full-Stack Developer | Cybersecurity Enthusiast
          </SubtitleText>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {["React", "Node.js", "Python", "Cybersecurity"].map((tech, index) => (
              <Box
                key={tech}
                sx={{
                  px: 2,
                  py: 1,
                  background: "rgba(0, 212, 255, 0.1)",
                  border: "1px solid rgba(0, 212, 255, 0.3)",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  color: "#00d4ff",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(0, 212, 255, 0.2)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;