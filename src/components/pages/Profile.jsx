import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Avatar, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    margin: "auto",
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
  },
  bio: {
    marginTop: theme.spacing(2),
    textAlign: "center",
    color: "#666",
  },
}));

const ProfileCard = () => {
  const { user } = useSelector((state) => state.auth);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justifyContent="center">
          <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.image} className={classes.avatar} />
        </Grid>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary" className={classes.bio} gutterBottom>
          {user.bio}
        </Typography>
        {user.city && (
          <Typography variant="body2" color="textSecondary" className={classes.bio}>
            {user.city}
          </Typography>
        )}
        {user.email && (
          <Typography variant="body2" color="textSecondary" className={classes.bio}>
            {user.email}
          </Typography>
        )}
        {user.phoneNumber && (
          <Typography variant="body2" color="textSecondary" className={classes.bio}>
            {user.phoneNumber}
          </Typography>
        )}
        {user.birthDate && (
          <Typography variant="body2" color="textSecondary" className={classes.bio}>
            {user.birthDate}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
