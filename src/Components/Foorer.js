import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <Container fluid  className='footer_bak '>
                <Container className='footer_con text-center' >
                    <Row>
                        <Col>
                            <div>
                                <h6 class="footer_heading text-center text-uppercase fw-bold mb-4 ">
                                    Got Questions?
                                </h6>
                                {/* mobile */}
                                <span className='bg_color' >Mobile</span>
                                <p>
                                    <a href="#!" class="bg_color " style={{ textDecorationLine: 'underline' }}>+91 8811963303</a>
                                </p>
                                {/* whatsapp */}
                                <span className='bg_color' >Whatsapp</span>
                                <p>
                                    <a href="#!" class="bg_color" style={{ textDecorationLine: 'underline' }}>+91 8822403212</a>
                                </p>
                                <span className='bg_color'>Email</span>
                                <p>
                                    <a href="#!" class="bg_color" style={{ textDecorationLine: 'underline' }}> info@besst.in  </a>
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 class=" footer_heading text-uppercase fw-bold mb-4">
                                    About Us
                                </h6>
                                <p>
                                    <a href="#!" class=" bg_color">   About us</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">Life@BESST</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">Terms of Service</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">Cookie Policy</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">Accessibility Statement</a>
                                </p>

                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 class=" footer_heading text-uppercase fw-bold mb-4">
                                    Courses
                                </h6>
                                <p>
                                    <a href="#!" class="bg_color"> Top Courses</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">Success Stories</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">News</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">Blogs & Articles</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">FAQ’s</a>
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 class=" footer_heading text-uppercase fw-bold mb-4">
                                    Services
                                </h6>
                                <p>
                                    <a href="#!" class="bg_color">CUET Entrance</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">Online Classes</a>
                                </p>
                                <p>
                                    <a href="#!" class="bg_color">Other Competitive Exams     </a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                    {/* social icons */}
                    <Row>
                        <Col md={5} sm={5} xs={12} className='location bg_color '>
                            <span >Location</span>
                            <p>Brahmaputra Exam Success Support Team Private Limited
                                37, 2nd bye lane B.R.Mazumdar Path Baghorbori, Panjabari Guwahati-781037 Assam</p>
                        </Col>
                        <Col md={3} sm={3} xs={12} >
                            <div >
                                <span className='bg_color'>Follow Our Social</span>
                                <p className='icon_foot '>
                                    <a href="" class="bg_color"  >
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="" class="bg_color"  >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="" class="bg_color">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                    <a href="" class="bg_color">
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </a>
                                </p>
                            </div>
                        </Col>
                        {/* <Col md={3} sm={3} xs={12} ><span className="store_head bg_color " >Get our Mobile App</span>
                            <div class="clearfix">
                                <div class="foot_box">
                                    <Image src="./assets/caroselimg/90c1f307f769b7e6ccb573c442a67dde.png" alt="QRcode" width={120} height={120} />
                                </div>
                                <div class="foot_box" >
                                    <span className=''>
                                        <Image src="./assets/logo/5a902db97f96951c82922874.png" alt="apple"
                                            width={120} height={50} />
                                    </span>
                                    <span className=''>
                                        <Image src="./assets/logo/5a902dbf7f96951c82922875.png" alt="playstore"
                                            width={130} height={70} />
                                    </span>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                    {/* copywrite */}
                    <Row>
                        <Col sm={4} md={12} xs={12}>
                            <div className="text-center bg_color padding_tb_5_px">
                                Copyright © 2023 BESST (Brahmaputra Exam Success Support Team)
                            </div>
                        </Col>
                    </Row>
                </Container>
        </Container>

    )
};

export default Footer;