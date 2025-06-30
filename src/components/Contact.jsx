import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const ContactContainer = styled(Box)({
  padding: "100px 0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 70%)",
    pointerEvents: "none",
  },
});

const ContactCard = styled(Card)({
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

const ContactItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  borderRadius: "16px",
  background: "rgba(0, 212, 255, 0.05)",
  border: "1px solid rgba(0, 212, 255, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(0, 212, 255, 0.1)",
    border: "1px solid rgba(0, 212, 255, 0.3)",
    transform: "translateX(8px)",
  },
});

const SocialButton = styled(IconButton)({
  background: "rgba(0, 212, 255, 0.1)",
  border: "1px solid rgba(0, 212, 255, 0.3)",
  color: "#00d4ff",
  width: 60,
  height: 60,
  margin: "0 8px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background: "rgba(0, 212, 255, 0.2)",
    transform: "translateY(-4px) scale(1.1)",
    boxShadow: "0 10px 25px rgba(0, 212, 255, 0.3)",
  },
});

const Contact = () => {
  const contactInfo = [
    {
      icon: <Email sx={{ color: "#00d4ff", fontSize: 28 }} />,
      label: "Email",
      value: "ayan1805.business@gmail.com",
      href: "mailto:ayan1805.business@gmail.com",
    },
    {
      icon: <Phone sx={{ color: "#00d4ff", fontSize: 28 }} />,
      label: "Phone",
      value: "+91 74395 92775",
      href: "tel:+917439592775",
    },
    {
      icon: <LocationOn sx={{ color: "#00d4ff", fontSize: 28 }} />,
      label: "Location",
      value: "Kolkata, West Bengal, India",
      href: null,
    },
  ];

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
    <ContactContainer id="contact">
      <Container maxWidth="md">
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
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#b3d9ff",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology!
          </Typography>
        </Box>

        <ContactCard>
          <CardContent>
            <Box display="flex" flexDirection="column" gap={3} mb={4}>
              {contactInfo.map((item, index) => (
                <ContactItem
                  key={item.label}
                  component={item.href ? "a" : "div"}
                  href={item.href || undefined}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {item.icon}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#b3d9ff", fontSize: "0.9rem" }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#e8e8e8",
                        fontWeight: 500,
                        fontSize: "1.1rem",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </ContactItem>
              ))}
            </Box>

            <Box textAlign="center" pt={3} borderTop="1px solid rgba(0, 212, 255, 0.1)">
              <Typography
                variant="h6"
                sx={{ color: "#b3d9ff", mb: 3 }}
              >
                Connect with me
              </Typography>
              <Box display="flex" justifyContent="center" flexWrap="wrap">
                {socialLinks.map((social, index) => (
                  <SocialButton
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 0.3}s both`,
                    }}
                  >
                    {social.icon}
                  </SocialButton>
                ))}
              </Box>
            </Box>
          </CardContent>
        </ContactCard>
      </Container>
    </ContactContainer>
  );
};

export default Contact;