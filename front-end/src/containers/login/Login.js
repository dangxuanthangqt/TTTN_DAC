import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login_request } from "../../redux/actionCreators/AuthenActionCreator";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{ account_name: "", password: "" }}
            validationSchema={Yup.object().shape({
              account_name: Yup.string().required("Account name is required !"),
              password: Yup.string().required("Passoword is required !"),
            })}
            onSubmit={(values) => {
              dispatch(login_request(values));
            }}
          >
            {(props) => (
              <Form className={classes.form}>
                <TextField
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
                  size="small"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Account name"
                  name="account_name"
                  autoComplete="email"
                  
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                <TextField
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
                  size="small"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                <Button
                  disabled={!props.isValid || !props.dirty}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  {/* <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid> */}
                  <Grid item>
                    <RouterLink to="/auth/register">
                      Don't have an account? Sign Up
                    </RouterLink>
                  </Grid>
                </Grid>
                <Box mt={5}></Box>
              </Form>
            )}
          </Formik>
        </div>
      </Grid>
     
    </Grid>
  );
}
