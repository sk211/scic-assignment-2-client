import React from 'react'
import { Container, Row } from 'react-bootstrap';

export default function HeaderTop() {
    return (
        <div>
            <Container id="headerTop" className='py-3'>
                <Row  >
                    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <a href="facebook.com"> <i class="fab fa-facebook   "></i> </a>
                        <a href="twitter.com" > <i class="fab fa-twitter   "></i> </a>
                        <a href="instagram.com" > <i class="fab fa-instagram   "></i> </a>
                        <a href="linkedin.com" > <i class="fab fa-linkedin   "></i> </a>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 text-center">
                        <small>FREE SHIPPING THIS WEEK ORDER OVER - $75</small>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <small>Language</small>
                        <small>Currency</small>
                    </div>

                </Row>

            </Container >
        </div>

    )
}
