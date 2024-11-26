import { Typography, Avatar } from "@mui/material";

const HeroSection = () => {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <Avatar
        src="/Profile_pic.jpg"
        alt="Ayan Mondal"
        sx={{ width: 150, height: 150, margin: "0 auto" }}
      />
      <Typography variant="h2" style={{ fontWeight: "bold", color: "#08f" }}>
        AYAN MONDAL
      </Typography>
      <Typography variant="h5" style={{ margin: "20px 0", color: "#fff" }}>
      Full-Stack Developer | Cybersecurity Enthusiast 
      </Typography>
    </div>
  );
};

export default HeroSection;
