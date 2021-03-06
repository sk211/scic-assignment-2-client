import React from 'react'
import { Badge, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./Header.css"

export default function HederMeddle() {
    return (
        <div>

            <Container className='py-3'>

                <Row>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <a href="index.html">
                            <img src="https://klbtheme.com/machic/wp-content/uploads/2021/08/logo-dark.png" alt="" width="150px" />

                        </a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <form action="">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2"> <i class="fas fa-search    "></i> </InputGroup.Text>
                            </InputGroup>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex ">
                        <Link>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" /></svg>
                            <small>Account</small>
                        </Link>
                        <Link>
                            <div className='badge_svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" /></svg>
                                <Badge className="badge_icon" >9</Badge>
                                {/* <span className="visually-hidden">unread messages</span> */}
                            </div>
                        </Link>
                        <Link>
                            <div className='badge_svg'>


                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                                <Badge className="badge_icon" >9</Badge>
                            </div>
                        </Link>

                    </div>

                </Row>

            </Container>
            <hr />
        </div>
    )
}
