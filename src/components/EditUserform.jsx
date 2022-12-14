import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class EditUserForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: props.userInfo.name,
            email: props.userInfo.email,
            gen: props.userInfo.gen,
            id: props.userInfo.id
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        this.props.editUser(this.state.id, this.state)
        e.preventDefault();
        this.setState({
            name: "",
            email: "",
            gen: ""
        });
        this.props.closeModal()
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} name="email" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Gen</Form.Label>
                        <Form.Control type="Number" placeholder="Enter Gen" value={this.state.gen} name="gen" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save changes
                    </Button>
                </Form>
            </div>
        );
    }
}

export default EditUserForm;
