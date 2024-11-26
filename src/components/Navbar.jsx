import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "#000000", boxShadow: "none" }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            component={Link}
            to="about"
            smooth
            style={{ color: "#fff", margin: "0 10px" }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="skills"
            smooth
            style={{ color: "#fff", margin: "0 10px" }}
          >
            Skills
          </Button>
          <Button
            component={Link}
            to="projects"
            smooth
            style={{ color: "#fff", margin: "0 10px" }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="education"
            smooth
            style={{ color: "#fff", margin: "0 10px" }}
          >
            Education
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
