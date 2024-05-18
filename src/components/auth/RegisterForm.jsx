import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { object, string } from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const registerSchema = object({
    username: string().required("Username is required field."),
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
    email: string()
      .email("Enter a valid Email")
      .required("Email is a required field"),
    firstName: string().required("Name is required field."),
    lastName: string().required("Last name is required field."),
  });
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          firstName: "",
          lastName: "",
          image: "",
          city: "",
          bio: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
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
                label="User Name"
                name="username"
                id="userName"
                type="text"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              <TextField
                label="First Name"
                name="firstName"
                id="firstName"
                type="text"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
              <TextField
                label="Last Name"
                name="lastName"
                id="lastName"
                type="text"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                label="Image"
                name="image"
                id="image"
                type="text"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
              />
              <TextField
                label="BIO"
                name="bio"
                id="bio"
                type="text"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bio}
              />
              <TextField
                label="Password"
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
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
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
              >
                REGİSTER
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
