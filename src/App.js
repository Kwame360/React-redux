import React, {Component} from "react";
import {Container, Row, Col, Title} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';
import './App.css';

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        users: [
          {
          name: "Yeboah Godwin",
          email: "godwin@gmail.com",
          gen: 22,
          id: "3456"
          },
          {
          name: "Ricardo Brandt",
          email: "Ricardobrandt@gmail.com",
          gen: 22,
          id: "4567"
          },
          {
          name: "Sarah Mane",
          email: "Sarahmane@gmail.com",
          gen: 22,
          id: "5678"
          },
          {
          name: "Delali Jude",
          Email: "Delalijude@gmail.com",
          Gen: 22,
          id: "6789"
          },
        ]
      }
  }
  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [... this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter (user => user.id !== id)
    this.setState ({
      users: undeletedUsers
    })
  } 
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }
  render (){
  return (
    <>
      <Container fluid style={{marginTop: "2rem"}}>
        <Row>
          <Col md="4">
            <h1 style={{marginBottom: "2rem"}}>Add User</h1>
            <AddUserForm addUser = {this.addNewUser}/>
          </Col>
          <Col>
          <h1 style={{marginBottom: "2rem"}}>All Codetrain Users</h1>
          <Users usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
          </Col>
        </Row>
      </Container>
    </>
  );}
}

export default App;
