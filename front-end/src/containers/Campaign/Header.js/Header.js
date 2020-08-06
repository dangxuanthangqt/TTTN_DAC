import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { handleOpen } = props;
  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" variant="overline">
            Management
          </Typography>
          <Typography component="h6" variant="h6">
            Campaign
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={handleOpen} variant="contained" color="secondary">
            ADD CAMPAIGN
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
