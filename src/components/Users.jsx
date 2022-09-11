import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import User from './User'

const Users = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.usersData.map((user) => {
                        return <User userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser}/> 
                    })
                }
            </Row>
        </Container>
    );
}

export default Users;
