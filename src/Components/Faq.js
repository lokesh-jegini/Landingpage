import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Image from "react-bootstrap/Image";
// import axios from 'axios';
import baseUrl from "./baseUrl";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Faq() {
    const [faqQuestions, setFaqQuestions] = useState("");
    useEffect(() => {
        fetch(`${baseUrl()}/df/getFaqs`, {
            method: "GET",
            headers: {
                "Acces-Control-Allow-Origin": "*",
                Client_ID: "MVOZ7rblFHsvdzk25vsQpQ==",
            }
        })
            .then((response) => response.json())
            .then((result) => {
                // console.log(result);
                if (result.ResultCode == "200") {
                    setFaqQuestions(result)
                    // console.log(faqQuestions.Data);
                }
            })
            .catch((err) => {
                console.log(err)
                // console.log("i am executing")
            });
    }, []);



    return (
        <div>
            <Container fluid className="faq_background">
                <Row>
                    <Col md={4} sm={4} xs={12} className="faq_lay2">
                        <div >
                            <div class="faq_head">
                                Have any doubt?
                            </div>
                            <div class="faq_para">
                                For more general questions about BESST, check out our dedicated FAQs.
                            </div>

                            <Link
                                className="reg_btn margin_0_auto"
                               
                                to="http://localhost:8000/faq"
                            >
                                <b>Check FAQs</b>
                            </Link>
                            {/* <button className="reg_btn" type="button">Check FAQs</button> */}
                         
                            {/* <Link to="/faq" className="reg_btn" >Check FAQs</Link> */}
                        </div>
                    </Col>

                    <Col md={8} sm={8} xs={12} className="faq_margin">
                        {/*Note: it's use to reponsive in accordion tabs */}
                        {/* data-responsive-accordion-tabs="-medium-tabs large-tabs" */}
                        {
                            typeof faqQuestions.Data !== "undefined" && faqQuestions.Data.length > 0 &&
                            faqQuestions.Data.slice(0, 5).map((item) => (
                                <Accordion data-responsive-accordion-tabs="-medium-tabs large-tabs" defaultActiveKey={item.id == 1 ? '0' : '1'} key={item.id} >
                                    <Accordion.Item eventKey="0" style={{ margin: '1em' }}>
                                        <Accordion.Header className="accordion_header">
                                            {item.id}. {item.faq}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {/* <p className="faq_header">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p> */}
                                            <p>{item.answer}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            ))
                        }
                    </Col>
                </Row>
            </Container>

            {/* absolute box */}
            <scetion className="faq__box">
                <Container className="faq_box">
                    <Row>
                        <Col sm={7} md={6} xs={12} className="abso_col">
                            <div className="faq_p">
                                Start a conversation
                                <p className="faq__p">Our help and support teams are available to talk with you</p>
                            </div>
                        </Col>
                        <Col sm={3} md={3} xs={12} className="pt-4" >
                            <button className='sub_button_faq_wa btn btn-sm bg-lite'>
                                <Image src="./assets/caroselimg/Frame (1).png" alt="icon" /> Send us a Message
                            </button>
                        </Col>
                        <Col sm={3} md={3} xs={12} className="pt-4">
                            <button type="button" className="sub_button_faq btn sub_btn_res">Email Us</button>
                        </Col>
                    </Row>
                </Container>

            </scetion>
        </div>
    )
};

export default Faq;