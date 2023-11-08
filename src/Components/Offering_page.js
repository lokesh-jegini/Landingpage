import { Container, Row, Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function Offering_page() {
    return (
        <section>
            <Container fluid className="padding_b_15px we-offer">
                <Col md={11} sm={11} xs={11} className="align_center">
                    <Row >
                        <Col md={4} xs={12} sm={12}>
                            <h3 className='h3_head'>We Offer you</h3>
                            <p className='lorem_1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </Col>
                        <Col md={8} xs={12} sm={12}>
                            <Row>
                                <Col md={4} xs={12} sm={12} className="card_res">
                                    <div class="card">
                                        <div className='card_body align_center'>
                                            <Image className="card_image" src="assets/cardimg/4478ff9024b692b860004cb7aaa1f43f.png" alt="Card image cap" class="img-fluid" />
                                            <h5 className="p_head padding_tb_5_px">Online Counseling</h5>
                                            <p class="p_loram">Counseling For Admission</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} xs={12} sm={12} className="card_res">
                                    <div class="card height_247px">
                                        <div className='card_body align_center'>
                                            <Image className="card_image" src="assets/cardimg/432d9280b2bd93e065bf1dcd14dfc11d.png" alt="Card image cap" class="img-fluid" />
                                            <h5 className="p_head padding_tb_5_px">Online Classes</h5>
                                            <p class="p_loram">Classes for General Test paper for CUET</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} xs={12} sm={12} className="card_res">
                                    <div class="card height_247px">
                                        <div className='card_body align_center'>
                                            <Image className="card_image" src="assets/cardimg/c962f8f3520869897b37998bf3560539.png" alt="Card image cap" class="img-fluid" />
                                            <h5 className="p_head padding_tb_5_px">Other Competitive Exams</h5>
                                            <p class="p_loram">Competitive Exams</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </section>

    );
}

export default Offering_page;