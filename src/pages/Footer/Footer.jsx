import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import "./Footer.css"

export default function Footer() {
    return (
        <section id="footer" className="py-5" >
            <Container >

                <Row>
                    <Col lg={3} sm={6} md={3} className='col-md-8'><h6>Contact us</h6>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">About us</Nav.Link>
                            <Nav.Link eventKey="link-1">FAQ</Nav.Link>
                            <Nav.Link eventKey="link-2">Delivery information</Nav.Link>
                            <Nav.Link eventKey="disabled" >
                                Contact us
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={2} sm={6} md={2} ><h6>Information</h6>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">About us</Nav.Link>
                            <Nav.Link eventKey="link-1">FAQ</Nav.Link>
                            <Nav.Link eventKey="link-2">Delivery information</Nav.Link>
                            <Nav.Link eventKey="disabled" >
                                Contact us
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={2} sm={6} md={2} ><h6>Account</h6>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">About us</Nav.Link>
                            <Nav.Link eventKey="link-1">FAQ</Nav.Link>
                            <Nav.Link eventKey="link-2">Delivery information</Nav.Link>
                            <Nav.Link eventKey="disabled" >
                                Contact us
                            </Nav.Link>
                        </Nav></Col>
                    <Col lg={2} sm={6} md={2} ><h6>Services</h6>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">About us</Nav.Link>
                            <Nav.Link eventKey="link-1">FAQ</Nav.Link>
                            <Nav.Link eventKey="link-2">Delivery information</Nav.Link>
                            <Nav.Link eventKey="disabled" >
                                Contact us
                            </Nav.Link>
                        </Nav></Col>
                    <Col lg={3} sm={6} md={3} ><h6>Newsletter</h6>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">About us</Nav.Link>
                            <Nav.Link eventKey="link-1">FAQ</Nav.Link>
                            <Nav.Link eventKey="link-2">Delivery information</Nav.Link>
                            <Nav.Link eventKey="disabled" >
                                Contact us
                            </Nav.Link>
                        </Nav></Col>
                </Row>

            </Container>
        </section>

    )
}
