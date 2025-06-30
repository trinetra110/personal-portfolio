import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import { Link } from "react-scroll";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";

const StyledAppBar = styled(AppBar)(({ scrolled }) => ({
  background: scrolled 
    ? "rgba(10, 10, 10, 0.95)" 
    : "transparent",
  backdropFilter: scrolled ? "blur(20px)" : "none",
  borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.1)" : "none",
  boxShadow: scrolled 
    ? "0 8px 32px rgba(0, 0, 0, 0.3)" 
    : "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "fixed",
  zIndex: 1100,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "#e8e8e8",
  fontWeight: 500,
  fontSize: "1rem",
  textTransform: "none",
  padding: "8px 20px",
  margin: "0 4px",
  borderRadius: "25px",
  position: "relative",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.1))",
    borderRadius: "25px",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover": {
    color: "#00d4ff",
    transform: "translateY(-2px)",
    "&::before": {
      opacity: 1,
    },
  },
  "&.active": {
    color: "#00d4ff",
    background: "rgba(0, 212, 255, 0.1)",
    border: "1px solid rgba(0, 212, 255, 0.3)",
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "0.9rem",
    padding: "6px 16px",
    margin: "0 2px",
  },
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <StyledAppBar scrolled={scrolled}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "center", py: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <NavButton
                key={item.name}
                component={Link}
                to={item.to}
                smooth
                duration={800}
                spy
                offset={-100}
                className={activeSection === item.to ? "active" : ""}
                onSetActive={() => setActiveSection(item.to)}
              >
                {item.name}
              </NavButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;