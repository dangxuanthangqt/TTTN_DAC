import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import { LinearProgress, makeStyles } from "@material-ui/core";

Authentication.propTypes = {};
const useStyles = makeStyles(theme =>({
    main:{
        height: "100%",
        width: "100%"
    }
}))
function Authentication(props) {
    const classes = useStyles();
  return (
    <div className={classes.main}>
      <Suspense fallback={<LinearProgress></LinearProgress>}>
        <Header></Header>
        {props.children}
      </Suspense>
    </div>
  );
}

export default Authentication;
