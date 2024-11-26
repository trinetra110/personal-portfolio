import { Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import useResponsive from "./useResponsive";

const Education = () => {
  const isMobile = useResponsive(600);

  return (
    <div id="education" style={{ padding: "50px 20px", textAlign: "center" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Education
      </Typography>

      {isMobile ? (
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {/* High School */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <MenuBookIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                High School: Kendriya Vidyalaya No. 1 Salt Lake (2010 - 2022)
              </Typography>
              <Typography>
                I developed a strong foundation in science and mathematics,
                particularly in Physics, Chemistry, and Computer Science, which
                helped me secure 88.4% in my CBSE exams. This period was key in
                shaping my problem-solving abilities and sparking my interest in
                technology.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* College */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                College: Netaji Subhash Engineering College (2022 - Present)
              </Typography>
              <Typography>
                I focus on competitive programming, full-stack web development,
                and cybersecurity. These areas fuel my passion for technology,
                and I am constantly working on improving my skills through
                hands-on projects and problem-solving challenges.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ) : (
        <Timeline position="alternate">
          {/* High School */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="white"
            >
              2010 - 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <MenuBookIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                High School: Kendriya Vidyalaya No. 1 Salt Lake
              </Typography>
              <Typography>
                I developed a strong foundation in science and mathematics,
                particularly in Physics, Chemistry, and Computer Science, which
                helped me secure 88.4% in my CBSE exams. This period was key in
                shaping my problem-solving abilities and sparking my interest in
                technology.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* College */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="white"
            >
              2022 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                College: Netaji Subhash Engineering College
              </Typography>
              <Typography>
                I focus on competitive programming, full-stack web development,
                and cybersecurity. These areas fuel my passion for technology,
                and I am constantly working on improving my skills through
                hands-on projects and problem-solving challenges.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      )}
    </div>
  );
};

export default Education;
