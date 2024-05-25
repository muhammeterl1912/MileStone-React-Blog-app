import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LoginForm from "../auth/LoginForm";
const Login = () => {
  return (
    <Container maxWidth="lg">
      <h4>USERNAME:test1912</h4>
      <h4>PASSWORD:Testaccount12@</h4>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        alignItems="center"
        sx={{
          height: "80vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>
          <LoginForm />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you not have an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
