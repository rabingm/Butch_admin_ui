import React, {useState} from "react";
import { Form, Button, Card } from "react-bootstrap";

import "./AdminLoginForm.style.css";

const ForgotPP = () => {

    const [email, setEmail] = useState("")

    const handdleOnChange = e =>{
      const  {value} = e.target

      setEmail({
          ...email,
          email : value
      })
    }

    const handleOnSubmit =e =>{
        e.preventDefault()
    }
    console.log(email)

  return (
    <div className="adminLoginFrom bg-dark">
        
      <Card className="form-card p-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name = "email" onChange={handdleOnChange} type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Reset
          </Button>
     
          
        </Form>
        <a href="/login" className="text-right">Back to Login</a>
      </Card>
    </div>
  );
};

export default ForgotPP;
