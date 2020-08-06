import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Button } from "@material-ui/core";
import ERROR403 from "../../assets/images/error/403.gif";
import history from "../../Helpers/history";
Error403.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "550px",
  },
}));
function Error403(props) {
  const classes = useStyle();
  const handleBack = () => {
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <Button
        onClick={handleBack}
        size="large"
        color="secondary"
        variant="contained"
      >
        GO BACK
      </Button>

      <img className={classes.image} alt="403" src={ERROR403}></img>
    </div>
  );
}

export default Error403;
