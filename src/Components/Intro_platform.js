import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import baseUrl from './baseUrl';
import { useState, useEffect } from "react";
import './Intro.css';

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


function Intro_platform() {

    var [introplatform, setIntroPlatform] = useState([]);

    const fetchPost = async () => {
        await axios.post(`${baseUrl()}/df/statistics`,
            {},
            { headers: { Client_ID: "MVOZ7rblFHsvdzk25vsQpQ==" } })
            .then((response) => {
                console.log("response", response.data.Data)
                setIntroPlatform(response.data.Data);
            })
            .catch((error) => {
                console.log("error intro", error)
            });

    }

    useEffect(() => {

        fetchPost();
    }, [])



    return (
        <section responsive={responsive} fluid className='intro_plat'>
            <div className='intro_panel'>
                <div className=''>
                    <Col md={11} sm={11} xs={11} className='align_center'>
                        <Row >
                            <p className='inrto_p'>Our platform boasts top-notch educators, efficient processes, and cutting-edge technology, all aimed at guiding our students on a personalized and exceptional learning journey across various platforms. Our goal is to empower them to achieve their best performance.</p>
                        </Row>
                        <Row >
                            <Col md={3} sm={6} xs={12} >
                                <Card className="intro_card">
                                    <Row>
                                        <Col md={5} sm={12} xs={12} >
                                            <div className="intro_images">
                                                <Image src="./assets/svg/students.png" alt='frame' className="img-intro" />
                                            </div>
                                        </Col>
                                        <Col md={6} sm={12} xs={12} className="text-center">
                                            <h2 className='user_1'>{introplatform?.totalUser}+</h2>
                                            <p className='user_name'>USERS</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} >
                                <Card className="intro_card">
                                    <Row>
                                        <Col md={5} sm={12} xs={12} >
                                            <div className="intro_images">
                                                <Image src="./assets/svg/students.png" alt='frame' className="img-intro" />
                                            </div>
                                        </Col>
                                        <Col md={6} sm={12} xs={12} className="text-center">
                                            <h2 className='user_1'>{introplatform?.totalStudent}</h2>
                                            <p className='user_name'>STUDENTS</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} >
                                <Card className="intro_card">
                                    <Row>
                                        <Col md={5} sm={12} xs={12} >
                                            <div className="intro_images">
                                                <Image src="./assets/svg/Group 13834 (1).png" alt='frame' className="img-intro" />
                                            </div>
                                        </Col>
                                        <Col md={6} sm={12} xs={12} className="text-center">
                                            <h2 className='user_1'>{introplatform?.totalMCQ}</h2>
                                            <p className='user_name'>MCQ'S </p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} >
                                <Card className="intro_card">
                                    <Row>
                                        <Col md={5} sm={12} xs={12} >
                                            <div className="intro_images">
                                                <Image src="./assets/svg/students.png" alt='frame' className="img-intro" />
                                            </div>
                                        </Col>
                                        <Col md={6} sm={12} xs={12} className="text-center">
                                            <h2 className='user_1'>{introplatform?.totalSubject}</h2>
                                            <p className='user_name'>SUBJECT</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/* <Col md={3} sm={6} xs={6} className='intro_card'>
                            <Image src="./assets/svg/Frame.png" alt='groups' fluid />
                            <h2 className='user_1'>578</h2>
                            <p className='user_name'>STUDENTS</p>
                        </Col>

                        <Col md={3} sm={6} xs={6} className='intro_card'>
                            <Image src="./assets/svg/Frame.png" alt='mcqs' fluid />
                            <h2 className='user_1'>345</h2>
                            <p className='user_name'>MCQ'S </p>
                        </Col>

                        <Col md={3} sm={6} xs={6} className='intro_card' >
                            <Image src="./assets/svg/Frame.png" alt='subjects' fluid />
                            <h2 className='user_1'>45</h2>
                            <p className='user_name'>SUBJECT</p>
                        </Col> */}

                        </Row>
                    </Col>
                </div>
            </div>
        </section>
    );
}

export default Intro_platform;              