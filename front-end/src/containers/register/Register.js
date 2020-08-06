import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { register_request } from "../../redux/actionCreators/AuthenActionCreator";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            account_name: "",
            password: "",
            confirm_password: "",
            role_name: "",
            company_name: "",
          }}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().required("Fist name is required !"),
            last_name: Yup.string().required("Last name is required !"),
            email: Yup.string()
              .required("Email is required !")
              .email("Email is not valid !"),
            password: Yup.string()
              .required("Password is required !")
              .min(6, "Minimum is 6 characters !")
              .max(16, "Maximum is 16 characters !"),
            confirm_password: Yup.string()
              .oneOf([Yup.ref("password")], "Password is not match !")
              .required("Confirm password is required !"),
            account_name: Yup.string().required("Account name is required !"),
            company_name: Yup.string().required("Company name is required !"),
            role_name: Yup.string().required("Role is required !"),
          })}
          onSubmit={(values) => {
            dispatch(register_request(values));
          }}
        >
          {(props) => {
            return (
              <Form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size="small"
                      autoComplete="fname"
                      name="first_name"
                      variant="outlined"
                      required
                      fullWidth
                      label="First Name"
                      value={props.values.first_name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.errors.first_name && props.touched.first_name
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.first_name && props.touched.first_name
                          ? props.errors.first_name
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      label="Last Name"
                      name="last_name"
                      autoComplete="lname"
                      value={props.values.last_name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.errors.last_name && props.touched.last_name
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.last_name && props.touched.last_name
                          ? props.errors.last_name
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.errors.email && props.touched.email ? true : false
                      }
                      helperText={
                        props.errors.email && props.touched.email
                          ? props.errors.email
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      label="Account name"
                      name="account_name"
                      value={props.values.account_name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.errors.account_name && props.touched.account_name
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.account_name && props.touched.account_name
                          ? props.errors.account_name
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.errors.password && props.touched.password
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.password && props.touched.password
                          ? props.errors.password
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      name="confirm_password"
                      label="Confirm Password"
                      type="password"
                      autoComplete="current-password"
                      value={props.values.confirm_password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.errors.confirm_password &&
                        props.touched.confirm_password
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.confirm_password &&
                        props.touched.confirm_password
                          ? props.errors.confirm_password
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      name="company_name"
                      label="Company name"
                      value={props.values.company_name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.errors.company_name && props.touched.company_name
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.company_name && props.touched.company_name
                          ? props.errors.company_name
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={
                        props.errors.role_name && props.touched.role_name
                          ? true
                          : false
                      }
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.values.role_name}
                        onChange={props.handleChange}
                        name="role_name"
                        label="Age"
                      >
                        <MenuItem value={"dac"}>DAC</MenuItem>
                        <MenuItem value={"advertiser"}>Advertiser</MenuItem>
                      </Select>
                      <FormHelperText>
                        {props.errors.role_name && props.touched.role_name
                          ? props.errors.role_name
                          : ""}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/auth/login" component={RouterLink}>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
