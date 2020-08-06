import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Header from './Header/Header';
import UserList from './UserList/UserList';

Usermanagement.propTypes = {
    
};

function Usermanagement(props) {
    return (
       <Container>
           <Header></Header>
           <UserList></UserList>
       </Container>
    );
}

export default Usermanagement;