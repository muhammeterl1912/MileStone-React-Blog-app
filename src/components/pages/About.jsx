import React from "react";
import { Card, CardContent, Typography, Avatar, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ComputerIcon from "@mui/icons-material/Computer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "auto",
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  content: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  paragraph: {
    marginBottom: theme.spacing(2),
    textAlign: "justify",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Avatar className={classes.avatar}>
            <ComputerIcon />
          </Avatar>
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Muhammet Erol
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            align="justify"
            className={classes.paragraph}
          >
            Hey there! I'm Muhammet, a recent computer engineering graduate
            who's enthusiastic about coding and web development. With a strong
            foundation in programming and problem-solving skills, I'm passionate
            about crafting elegant solutions to real-world problems.
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            align="justify"
            className={classes.paragraph}
          >
            At 23 years old, I'm on a journey to delve deeper into the world of
            software development, particularly focusing on modern technologies
            like React, Node.js, and beyond. I enjoy the creativity involved in
            building user-friendly web applications and am always eager to learn
            and grow professionally.
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            align="justify"
            className={classes.paragraph}
          >
            When I'm not coding, you'll likely find me exploring the latest tech
            trends, engaging in open-source projects, or honing my skills
            through online courses and tutorials. Let's connect and build
            something awesome together!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
