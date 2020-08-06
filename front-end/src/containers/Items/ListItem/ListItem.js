import AddBoxIcon from "@material-ui/icons/AddBox";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import MaterialTable from "material-table";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete_item_request, Updata_item_edit_to_redux } from "../../../redux/actionCreators/ItemActionCreator";
ListItem.propTypes = {};

function ListItem(props) {
  const CampaignState = useSelector((state) => state.CampaignState);
  const dispatch = useDispatch();
  const { handleOpen } = props;
  const ItemState = useSelector((state) => state.ItemState);
  const handleData = () => {
    let temp = ItemState.listItems.map((e, i) => {
      return {
        ...e,
        name_item: e.items.name,
        name_campaign: e.name,
        start_date: e.start_date,
        end_date: e.end_date,
        budget: e.budget,
      };
    });
    return temp;
  };
  return (
    <MaterialTable
      title="LIST ITEMS"
      columns={[
        { title: "Item name", field: "name_item" },
        { title: "Campaign name", field: "name_campaign" },
        { title: "Start date", field: "start_date", type: "date" },
        { title: "End date", field: "end_date", type: "date" },
        {
          title: "Budget",
          field: "budget",
        },
      ]}
      data={handleData()}
      actions={[
        {
          icon: () => <OpenInNewIcon></OpenInNewIcon>,
          tooltip: "Details",
          onClick: (event, rowData) => {
            console.log(rowData)
            dispatch(Updata_item_edit_to_redux(rowData.items))
            handleOpen(); 
          },
        },
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete",
          onClick: (event, rowData) => {
              if(window.confirm("Do you want to delete this item?")){
                  dispatch(Delete_item_request(rowData.items._id))
              }
          },
        }),
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
    />
  );
}

export default ListItem;
