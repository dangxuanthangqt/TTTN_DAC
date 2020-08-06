import AddBoxIcon from "@material-ui/icons/AddBox";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Delete_item_request,
  Updata_item_edit_to_redux,
} from "../../../redux/actionCreators/ItemActionCreator";
import {
  Get_all_user_request,
  Change_status_user_request,
  Delete_user_request,
} from "../../../redux/actionCreators/UserActionCreator";
UserList.propTypes = {};

function UserList(props) {
  const dispatch = useDispatch();
  const { handleOpen } = props;
  const listUser = useSelector((state) => state.UserState.listUser);
  const handleData = () => {
    let temp = listUser.map((e, i) => {
      return {
        ...e,
        role_name: e.role.name,
      };
    });
    return temp;
  };
  useEffect(() => {
    dispatch(Get_all_user_request());
  }, []);
  return (
    <MaterialTable
      title="LIST USERS"
      columns={[
        { title: "Account name", field: "account_name" },
        { title: "Email", field: "email" },
        { title: "Company name", field: "company_name" },
        { title: "Role", field: "role_name" },
        { title: "Status", field: "status" },
      ]}
      data={handleData()}
      actions={[
        {
          icon: () => <LockOpenIcon></LockOpenIcon>,
          tooltip: "Change Status",
          onClick: (event, rowData) => {
            let data = {
              id: rowData._id,
              status: rowData.status === "active" ? "disable" : "active",
            };
            console.log(data);
            if (window.confirm("Do you want change status this users ?")) {
              dispatch(Change_status_user_request(data));
            }
          },
        },
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete",
          onClick: (event, rowData) => {
            if (window.confirm("Do you want to delete this item?")) {
              dispatch(Delete_user_request(rowData._id));
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

export default UserList;
