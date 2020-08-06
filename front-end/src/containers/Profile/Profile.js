import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Card,
  makeStyles,
  CardContent,
  Typography,
  CardHeader,
  Divider,
  TextField,
  CardActions,
  Button,
} from "@material-ui/core";
import Header from "./Header/Header";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  getProfileRequest,
  updateProfileRequest,
} from "../../redux/actionCreators/ProfileActionCreator";
import * as Yup from "yup";
import format from "date-fns/format";
import { KeyboardDateTimePicker, DateTimePicker } from "@material-ui/pickers";
import { VariantContext } from "@material-ui/pickers/wrappers/Wrapper";
Profile.propTypes = {};
const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
  form: {
    width: "100%",
  },
}));
function Profile(props) {
  const classes = useStyles();
  const Authorization = useSelector((state) => state.Authorization);
  const dispatch = useDispatch();
  var data = useSelector((state) => state.ProfileState.data);

  useEffect(() => {
    dispatch(getProfileRequest());
  }, []);
  return (
    <Container>
      <Header></Header>
      <Formik
        enableReinitialize={true}
        initialValues={{
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          account_name: data.account_name,
          password: "",
          confirm_password: "",
          company_name: data.company_name,
          create_at: data.create_at,
          update_at: data.update_at,
        }}
        validationSchema={Yup.object().shape({
          first_name: Yup.string().required("Fist name is required !"),
          last_name: Yup.string().required("Last name is required !"),
          email: Yup.string()
            .required("Email is required !")
            .email("Email is not valid !"),
          password: Yup.string()

            .min(6, "Minimum is 6 characters !")
            .max(16, "Maximum is 16 characters !"),
          confirm_password: Yup.string().oneOf(
            [Yup.ref("password")],
            "Password is not match !"
          ),
          account_name: Yup.string().required("Account name is required !"),
          company_name: Yup.string().required("Company name is required !"),
        })}
        onSubmit={(values) => {
          dispatch(updateProfileRequest(values));
        }}
      >
        {(props) => {
          return (
            <Form onSubmit={props.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Card className={classes.card}>
                    <CardHeader title="Information"></CardHeader>
                    <Divider></Divider>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <TextField
                            size="small"
                            name="first_name"
                            variant="outlined"
                            required
                            fullWidth
                            label="First Name"
                            value={props.values.first_name}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            error={
                              props.errors.first_name &&
                              props.touched.first_name
                                ? true
                                : false
                            }
                            helperText={
                              props.errors.first_name &&
                              props.touched.first_name
                                ? props.errors.first_name
                                : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
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
                            disabled
                            autoComplete="email"
                            value={props.values.email}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            error={
                              props.errors.email && props.touched.email
                                ? true
                                : false
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
                            disabled
                            label="Account name"
                            name="account_name"
                            value={props.values.account_name}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            error={
                              props.errors.account_name &&
                              props.touched.account_name
                                ? true
                                : false
                            }
                            helperText={
                              props.errors.account_name &&
                              props.touched.account_name
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
                            name="company_name"
                            label="Company name"
                            value={props.values.company_name}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            error={
                              props.errors.company_name &&
                              props.touched.company_name
                                ? true
                                : false
                            }
                            helperText={
                              props.errors.company_name &&
                              props.touched.company_name
                                ? props.errors.company_name
                                : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <DateTimePicker
                            size="small"
                            fullWidth
                            disabled
                            label="Create time"
                            name="create_at"
                            inputVariant="outlined"
                            value={props.values.create_at}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <DateTimePicker
                            size="small"
                            fullWidth
                            disabled
                            label="Update time"
                            name="update_at"
                            inputVariant="outlined"
                            value={props.values.update_at}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider></Divider>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        disabled={!props.isValid }
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        SAVE
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardHeader title="Change Password"></CardHeader>
                    <Divider></Divider>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            size="small"
                            variant="outlined"
                            fullWidth
                            name="password"
                            label="New Password"
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
                      </Grid>
                    </CardContent>
                    <Divider></Divider>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={props.values.password ? false : true}
                      >
                        SAVE
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default Profile;
