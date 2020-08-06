import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { Get_list_campaign_request } from "../../../redux/actionCreators/CampaignActionCreator";
import { Get_item_request, Get_item_follow_campaign_request } from "../../../redux/actionCreators/ItemActionCreator";
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { handleOpen } = props;
  const ListCampaign = useSelector((state) => state.CampaignState.data);
  const dispatch = useDispatch();
  const handleOption = () => {
    let temp = ListCampaign.map((e, i) => {
      return {
        label: e.name,
        value: e._id,
      };
    });
    return [{ label: "ALL", value: "ALL" }, ...temp];
  };
  useEffect(() => {
    dispatch(Get_list_campaign_request());
  }, []);
  const handleChange = (values) => {
    
    if(values.value ==="ALL"){
      dispatch(Get_item_request());
    }else{
      
      dispatch(Get_item_follow_campaign_request(values.value))
    }
  };
  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" variant="overline">
            Management
          </Typography>
          <Typography component="h6" variant="h6">
            List Items
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Select
            styles={{
              // Fixes the overlapping problem of the component
              menu: (provided) => ({ ...provided, zIndex: 9999 }),
            }}
            placeholder="Please select campaign *"
            options={handleOption()}
            onChange={handleChange}
          ></Select>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
