import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  box: {
    textAlign: "center",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    width: "70%",
    maxWidth: 400,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Typography variant="h1" color="primary">
          404
        </Typography>
        <Typography variant="h2" color="primary">
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.primary">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        href="/"
      >
        Return to Home Page
      </Button>
    </div>
  );
};

export default NotFound;
