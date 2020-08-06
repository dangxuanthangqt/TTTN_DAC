import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import Header from "./Header.js/Header";
import ModalAdd from "./ModalAdd/ModalAdd";
import CampaignList from "./CampaignList/CampaignList";
import ModalEdit from "./ModalEdit/ModalEdit";
import ModalAddItem from "../Items/ModalAddItem/ModalAddItem";

Campaign.propTypes = {};

function Campaign(props) {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openAddItem, setOpenAddItem] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenAddItem = () => {
    setOpenAddItem(true);
  };

  const handleCloseAddItem = () => {
    setOpenAddItem(false);
  };
  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  return (
    <Container>
      <Header handleOpen={handleOpen}></Header>
      <ModalAdd open={open} handleClose={handleClose}></ModalAdd>
      <ModalEdit
        openEdit={openEdit}
        handleCloseEdit={handleCloseEdit}
      ></ModalEdit>
      <ModalAddItem
        openAddItem={openAddItem}
        handleCloseAddItem={handleCloseAddItem}
      ></ModalAddItem>
      <CampaignList handleOpenAddItem={handleOpenAddItem} handleOpenEdit={handleOpenEdit}></CampaignList>
    </Container>
  );
}

export default Campaign;
