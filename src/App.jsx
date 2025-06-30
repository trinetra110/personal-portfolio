import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00d4ff",
      light: "#4de6ff",
      dark: "#0099cc",
    },
    secondary: {
      main: "#0099cc",
      light: "#33aadd",
      dark: "#006699",
    },
    background: {
      default: "#0a0a0a",
      paper: "rgba(255, 255, 255, 0.05)",
    },
    text: {
      primary: "#e8e8e8",
      secondary: "#b3d9ff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: "blur(20px)",
        },
      },
    },
  },
});

const App = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Add loading animation
    const root = document.getElementById("root");
    if (root) {
      root.style.opacity = "0";
      root.style.transition = "opacity 0.5s ease-in-out";
      setTimeout(() => {
        root.style.opacity = "1";
      }, 100);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;