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
import { useDispatch, useSelector } from "react-redux";
import { Create_campaign_request } from "../../../redux/actionCreators/CampaignActionCreator";
import { Create_item_request } from "../../../redux/actionCreators/ItemActionCreator";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: "40%",
    boxShadow: theme.shadows[5],
    borderRadius: "10px",
  },
}));

function ModalAddItem(props) {
  const classes = useStyles();
  const { handleCloseAddItem, openAddItem } = props;
  const handleCancel = () => {
    handleCloseAddItem();
  };
  const dispatch = useDispatch();
  const dataEdit = useSelector((state) => state.CampaignState.dataEdit);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openAddItem}
      onClose={handleCloseAddItem}
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
            landing_url: "",
            landing_domain: "",
            name: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required !"),
            landing_url: Yup.string().required("Landing URL is required !"),
            landing_domain: Yup.string().required(
              "Landing domain is required !"
            ),
          })}
          onSubmit={(values) => {
           
            dispatch(
              Create_item_request({
                campaign_id: dataEdit._id,
                ...values,
              })
            );
            handleCloseAddItem();
          }}
        >
          {(props) => {
            return (
              <Form className={classes.paper}>
                <Card>
                  <CardHeader title="Create Item"></CardHeader>
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
                      <Grid item xs={12}>
                        <TextField
                          placeholder="Landing URL"
                          label="Landing URL"
                          variant="outlined"
                          size="small"
                          fullWidth
                          name="landing_url"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.landing_url}
                          error={
                            props.errors.landing_url &&
                            props.touched.landing_url
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.landing_url &&
                            props.touched.landing_url
                              ? props.errors.landing_url
                              : ""
                          }
                        ></TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                        
                          placeholder="Landing domain"
                          label="Landing domain"
                          variant="outlined"
                          size="small"
                          fullWidth
                          name="landing_domain"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.landing_domain}
                          error={
                            props.errors.landing_domain &&
                            props.touched.landing_domain
                              ? true
                              : false
                          }
                          helperText={
                            props.errors.landing_domain &&
                            props.touched.landing_domain
                              ? props.errors.landing_domain
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

export default ModalAddItem;
