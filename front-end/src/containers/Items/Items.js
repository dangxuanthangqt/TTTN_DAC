import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import Header from "./Header/Header";
import { useDispatch } from "react-redux";
import { Get_item_request } from "../../redux/actionCreators/ItemActionCreator";
import ListItem from "./ListItem/ListItem";
import ModalEditItem from "./ModalEditItem/ModalEditItem";

Items.propTypes = {};

function Items(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_item_request());
  }, []);
  const [open, setopen] = useState(false);
  const handleOpen = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  return (
    <Container>
      <Header></Header>
      <ListItem handleOpen={handleOpen}></ListItem>
      <ModalEditItem handleClose={handleClose} open={open}></ModalEditItem>
    </Container>
  );
}

export default Items;
