import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import * as Yup from "yup";
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Grid,
  TextField,
  CardActions,
  Button,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useDispatch } from "react-redux";
import { Create_campaign_request } from "../../../redux/actionCreators/CampaignActionCreator";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: "60%",
    boxShadow: theme.shadows[5],
    borderRadius: "10px",
  },
}));

function ModalAdd(props) {
  const classes = useStyles();
  const { handleClose, open } = props;
  const handleCancel = () => {
    handleClose();
  };
  const dispatch = useDispatch();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fragment>
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: "",
            start_date: new Date(),
            end_date: new Date(),
            budget: "",
            bid_amount: "",
            title: "",
            description: "",
            final_url: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required !"),
            start_date: Yup.date().required("Start date is required!"),
            end_date: Yup.date().min(
              Yup.ref("start_date"),
              "End date >= Start date"
            ),
            budget: Yup.number()
              .min(0, "Min 0 !")
              .required("Budget is required !"),
            bid_amount: Yup.number()
              .min(0, "Min 0 !")
              .required("Budget is required !"),
            title: Yup.string().required("Title is required !"),
            description: Yup.string().required("Description is requried !"),
            final_url: Yup.string().required("Final URL is required"),
          })}
          onSubmit={(values) => {
            dispatch(Create_campaign_request(values));
            handleClose();
          }}
        >
          {(props) => {
            return (
              <Form className={classes.paper}>
                <Card>
                  <CardHeader title="Create campaign"></CardHeader>
                  <Divider></Divider>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          placeholder="Name"
                          label="Name"
                          variant="outlined"
                          size="small"
                          fullWidth
                          name="name"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.name}
                          error={
                            props.errors.name && props.touched.name
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.name && props.touched.name
                              ? props.errors.name
                              : ""
                          }
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <KeyboardDatePicker
                          fullWidth
                          size="small"
                          autoOk
                          name="start_date"
                          variant="inline"
                          inputVariant="outlined"
                          label="Start date"
                          format="MM/dd/yyyy"
                          value={props.values.start_date}
                          InputAdornmentProps={{ position: "start" }}
                          onChange={(date) =>
                            props.setFieldValue("start_date", date)
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <KeyboardDatePicker
                          fullWidth
                          size="small"
                          autoOk
                          name="end_date"
                          variant="inline"
                          inputVariant="outlined"
                          label="End date"
                          format="MM/dd/yyyy"
                          value={props.values.end_date}
                          InputAdornmentProps={{ position: "start" }}
                          onChange={(date) =>
                            props.setFieldValue("end_date", date)
                          }
                          error={
                            props.errors.end_date && props.touched.end_date
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.end_date && props.touched.end_date
                              ? props.errors.end_date
                              : ""
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          label="Budget"
                          variant="outlined"
                          size="small"
                          fullWidth
                          name="budget"
                          type="number"
                          value={props.values.budget}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.budget && props.touched.budget
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.budget && props.touched.budget
                              ? props.errors.budget
                              : ""
                          }
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          label="Budget amount"
                          variant="outlined"
                          size="small"
                          fullWidth
                          name="bid_amount"
                          type="number"
                          value={props.values.bid_amount}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.bid_amount && props.touched.bid_amount
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.bid_amount && props.touched.bid_amount
                              ? props.errors.bid_amount
                              : ""
                          }
                        ></TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          name="title"
                          value={props.values.title}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          size="small"
                          fullWidth
                          label="Title"
                          placeholder="Title"
                          error={
                            props.errors.title && props.touched.title
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.title && props.touched.title
                              ? props.errors.title
                              : ""
                          }
                        ></TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          name="description"
                          multiline
                          rows={5}
                          value={props.values.description}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          size="small"
                          fullWidth
                          label="description"
                          placeholder="description"
                          error={
                            props.errors.description &&
                            props.touched.description
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.description &&
                            props.touched.description
                              ? props.errors.description
                              : ""
                          }
                        ></TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          size="small"
                          fullWidth
                          value={props.values.final_url}
                          name="final_url"
                          label="Final URL"
                          placeholder="Final URL"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.final_url && props.touched.final_url
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.final_url && props.touched.final_url
                              ? props.errors.final_url
                              : ""
                          }
                        ></TextField>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider></Divider>
                  <CardActions>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          type="submit"
                        >
                          SAVE
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          onClick={handleCancel}
                        >
                          CANCEL
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Form>
            );
          }}
        </Formik>
      </Fragment>
    </Modal>
  );
}

export default ModalAdd;
