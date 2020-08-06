import React, { useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useSelector, useDispatch } from "react-redux";
import {
  Get_list_campaign_request,
  Delete_campaign_request,
  Up_data_edit_to_store,
} from "../../../redux/actionCreators/CampaignActionCreator";
CampaignList.propTypes = {};

function CampaignList(props) {
  const CampaignState = useSelector((state) => state.CampaignState);
  const dispatch = useDispatch();
  const { handleOpenEdit, handleOpenAddItem } = props;
  useEffect(() => {
    dispatch(Get_list_campaign_request());
  }, []);
  return (
    <MaterialTable
      title="LIST CAMPAIGNS"
      columns={[
        { title: "Name", field: "name" },
        { title: "Start date", field: "start_date", type: "date" },
        { title: "End date", field: "end_date", type: "date" },
        {
          title: "Budget",
          field: "budget",
        },
        {
          title: "Bid amount",
          field: "bid_amount",
        },
      ]}
      data={CampaignState.data}
      actions={[
        {
          icon: () => <OpenInNewIcon></OpenInNewIcon>,
          tooltip: "Details",
          onClick: (event, rowData) => {
            dispatch(Up_data_edit_to_store(rowData));
            handleOpenEdit();
          },
        },
        {
          icon: () => <AddBoxIcon></AddBoxIcon>,
          tooltip: "Add items",
          onClick: (event, rowData) => {
            dispatch(Up_data_edit_to_store(rowData));
            handleOpenAddItem();
          },
        },
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete",
          onClick: (event, rowData) => {
            if (window.confirm("Do you want to delete this campaign ?"))
              dispatch(Delete_campaign_request(rowData._id));
          },
        }),
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
    />
  );
}

export default CampaignList;
