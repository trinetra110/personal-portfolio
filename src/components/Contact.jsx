import { Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <div id="contact" style={{ padding: "50px 20px", textAlign: "center" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Contact
      </Typography>

      {/* Contact Information */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {/* Email */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <EmailIcon color="primary" />
          <Typography
            variant="body1"
            component="a"
            href="mailto:ayan1805.business@gmail.com"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            ayan1805.business@gmail.com
          </Typography>
        </Box>

        {/* Phone */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <PhoneIcon color="primary" />
          <Typography variant="body1">+91 74395 92775</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
