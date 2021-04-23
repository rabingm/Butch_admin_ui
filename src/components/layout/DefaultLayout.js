import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "./partials/Footer";
import Header from "./partials/Header";

import "./DefaultLayout.style.css"


export const DefaultLayout = () => {
    return (
        <Container>
            <Row>
            <Col xs ={4}>
            <div className="left-bar">
            This is left
            </div>
            </Col>

            <Col xs ={8}>
            
            <Header/>
            
            <Footer />
            </Col>
            </Row>
            

        </Container>
        
    )
}
