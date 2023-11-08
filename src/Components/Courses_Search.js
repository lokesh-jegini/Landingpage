import { useState, props } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group "> 
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} ><FontAwesomeIcon icon={faLessThan} /></button>
        <button onClick={() => next()} > <FontAwesomeIcon icon={faGreaterThan} /> </button>
      </div>
    );
  };

const Courses_Search = (props) => {
    const [index, setIndex] = useState(0);
    const CourseData = props.CourseData;
    let CourseCount = 0;

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid className=" padding_b_15px">
            <Col md={11} sm={11} xs={11} className="align_center">
                <p className='Search_head padding_t_25px padding_b_15px'>Search Results <span className='Search_head_dark'>“{CourseData.length} Courses”</span> Found</p>
                
                {CourseData.length > 0 ? 
                    <Carousel responsive={responsive} className='row' arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} swipeable={true}  draggable={true} scrollable={true} ssr={true} infinite={false} keyBoardControl={true} itemClass="carousel-item-padding-40-px" containerClass="carousel-container">
                    
                    {CourseData?.map((item) => {
                        return (
                            item.courses?.map((courseItem) => {
                                return(
                                    <Card className='Course_card' >
                                        <div className="card_body align_center">
                                            <img src="./assets/caroselimg/a15b1a303b3f952504925c02f3604e4c .jpg" alt='frame' className="img-course" fluid />
                                            <div class="card-title">
                                                <h5 class="card-university-title">{courseItem.degree}</h5>
                                            
                                                <h5 class="card-university-title" >{item.university.name}</h5>
                                            </div>
                                            {/* <Col className='icon_col'>
                                                <img src='./assets/icons/book-icon.png' /> <h6 className='course_heading margin_r_30px'>Lesson:6</h6>
                                                <img src='./assets/icons/user-icon.png' /> <h6 className='course_heading margin_r_30px'>student:198</h6>
                                                <img src='./assets/icons/cup-icon.png' /> <h6 className='course_heading'>Begginers </h6>
                                            </Col> */}
                                            <Row>
                                                <Col md={9} sm={9} xs={12}><button className='button'>Start Course <FontAwesomeIcon icon={faGreaterThan} className='Grater_then' ></FontAwesomeIcon></button></Col>
                                                <Col md={3} sm={3} xs={12}><Image src='./assets/elips/Score.png' alt='' className='padding_t_10px' /></Col>
                                            </Row>
                                        </div>
        
                                    </Card>
                                )
                                
                            })
                        )
                        
                        
                    })}
                    
                        {/* <Card className='Course_card' >
                            <div className="card_body align_center">
                                <img src="./assets/caroselimg/learning-education-ideas-insight-intelligence-study-concept.png" alt='frame' className="img-course" fluid />
                                <div>
                                    <h5 class="card-title" >Python for Beginners</h5>
                                </div>
                                <Col className='icon_col'>
                                    <img src='./assets/icons/book-icon.png' /> <h6 className='course_heading margin_r_30px'>Lesson:21</h6>
                                    <img src='./assets/icons/user-icon.png' /> <h6 className='course_heading margin_r_30px'>student:99  </h6>
                                    <img src='./assets/icons/cup-icon.png' /> <h6 className='course_heading'>Begginers </h6>
                                </Col>
                                <Row>
                                    <Col md={9} sm={9} xs={12}><button className='button'>Start Course <FontAwesomeIcon icon={faGreaterThan} className='Grater_then' ></FontAwesomeIcon></button></Col>
                                    <Col md={3} sm={3} xs={12}><Image src='./assets/elips/Score.png' alt='' className='padding_t_10px' /></Col>
                                </Row>
                            </div>

                        </Card>
                        <Card className='Course_card' >
                            <div className="card_body align_center">
                                <img src="./assets/caroselimg/unsplash_YQQMGoOix4c.png" alt='frame' className="img-course" fluid />
                                <div>
                                    <h5 class="card-title" >Acoustic Guitar and Electric Guitar Started</h5>
                                </div>
                                <Col className='icon_col'>
                                    <img src='./assets/icons/book-icon.png' /> <h6 className='course_heading margin_r_30px'>Lesson:8</h6>
                                    <img src='./assets/icons/user-icon.png' /> <h6 className='course_heading margin_r_30px'>student:301</h6>
                                    <img src='./assets/icons/cup-icon.png' /> <h6 className='course_heading'>Average </h6>
                                </Col>
                                <Row>
                                    <Col md={9} sm={9} xs={12}><button className='button'>Start Course <FontAwesomeIcon icon={faGreaterThan} className='Grater_then' ></FontAwesomeIcon></button></Col>
                                    <Col md={3} sm={3} xs={12}><Image src='./assets/elips/Score.png' alt='' className='padding_t_10px' /></Col>
                                </Row>
                            </div>

                        </Card>
                        <Card className='Course_card' >
                            <div className="card_body align_center">
                                <img src="./assets/caroselimg/c5b062781256fd38688f16afb7be29d7.jpg" alt='frame' className="img-course" fluid />
                                <div>
                                    <h5 class="card-title" >Mobile App Development with Flutter & Dart...</h5>
                                </div>
                                <Col className='icon_col'>
                                    <img src='./assets/icons/book-icon.png' /> <h6 className='course_heading margin_r_30px'>Lesson:15</h6>
                                    <img src='./assets/icons/user-icon.png' /> <h6 className='course_heading margin_r_30px'>student:215</h6>
                                    <img src='./assets/icons/cup-icon.png' /> <h6 className='course_heading'>Average </h6>
                                </Col>
                                <Row>
                                    <Col md={9} sm={9} xs={12}><button className='button'>Start Course <FontAwesomeIcon icon={faGreaterThan} className='Grater_then' ></FontAwesomeIcon></button></Col>
                                    <Col md={3} sm={3} xs={12}><Image src='./assets/elips/Score.png' alt='' className='padding_t_10px' /></Col>
                                </Row>
                            </div>

                        </Card> */}
                    </Carousel>
                    :
                    <></>
                }
            </Col>
        </Container>    
    )
}
export default Courses_Search; 