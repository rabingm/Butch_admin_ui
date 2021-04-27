import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

import "./AdminLoginForm.style.css";

const initialState = {
  email: "",
  password: "",
};

const AdminLoginForm = () => {
  const [login, setLogin] = useState(initialState);

  const handleOnChange = (e) => {
      const {name, value} = e.target

    setLogin({
        ...login,
        [name]:value
    })
  };


  const handleOnSubmit = e =>{
      e.preventDefault()
      console.log(login)
  }

  return (
    <div className="adminLoginFrom bg-dark">
      <Card className="form-card p-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={handleOnChange}
              value={login.email}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={handleOnChange}
              value={login.password}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group>
            <a href="/forgotpp">Forgot Password?</a>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AdminLoginForm;
