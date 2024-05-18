import {useState} from 'react'
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import Box from "@mui/material/Box";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { object, string } from "yup";
const LoginForm = () => { 
    const [showPassword, setShowPassword] = useState(false);
    
    
    const loginSchema = object({
        username: string()
      .email("Enter a valid Email or username")
      .required("Email or username is a required field"),
    password: string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters long")
      .max(16, "Password must be the most 16 characters long")
      .matches(/\d+/, "Password must contain at least one number.")
      .matches(/[a-z]+/, "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]+/, "Password must contain at least one uppercase letter.")
      .matches(
        /[@$!%*?&]+/,
        "The password must contain at least one special character (@$!%?&)."
      ),
  });
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>  <Formik
    initialValues={{ username: "", password: "" }}
    validationSchema={loginSchema}
    onSubmit={(values, actions) => {
;
      actions.resetForm();
      actions.setSubmitting(false);
    }}
  >
    {({
      values,
      handleChange,
      handleBlur,
      touched,
      errors,
      isSubmitting,
    }) => (
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email or Username"
            name="username"
            id="username"
            type="text"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
          />
          <TextField
            label="Password"
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Box>
      </Form>
    )}
  </Formik></div>
  )
}

export default LoginForm