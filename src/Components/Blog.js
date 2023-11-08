
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image';

// import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowUp, faUser, faStar, faTrophy, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import baseUrl from './baseUrl';

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
        <div className="carousel-button-group_blog">
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} ><FontAwesomeIcon icon={faLessThan} /></button>
            <button onClick={() => next()} > <FontAwesomeIcon icon={faGreaterThan} /> </button>
        </div>
    );
};
function Blog() {
    const [blogs, setBlogs] =  useState([]);

    const getBlogs = async () => {
        axios.get(baseUrl() + '/homePageData/Blogs')
        .then((result) =>{
            setBlogs(result.data.data);
            console.log("blogs", result.data.data)
        })
        .catch((error) => {
            console.log("blogs error", error)
        })
    }
 
    useEffect(() =>{
        getBlogs();
    }, [])
    return (

        <Container fluid className="bg-light padding_b_15px section bg-white magin_top_113px">
            <Col md={11} sm={11} xs={11} className="align_center">
                <p className='blog_head padding_t_25px padding_b_15px'>Blog</p>

                <Carousel responsive={responsive} className='row' arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} swipeable={true} draggable={true} scrollable={true} ssr={true} infinite={false} keyBoardControl={true} itemClass="carousel-item-padding-40-px" containerClass="carousel-container">

                    {blogs?.map((item) => {
                        return(
                            <Card className='blog_card' >
                                <div className="card_body align_center">
                                    <img src="./assets/caroselimg/a15b1a303b3f952504925c02f3604e4c .jpg" alt='frame' className="img-course" fluid />
                                    <div>
                                        <h5 class="blog_card_title " >{item.name}</h5>
                                    </div>
                                    <Col className=''>
                                        <p>
                                           {item.shortContent.substring(0,150)}...
                                        </p>

                                    </Col>
                                    <Row>
                                        <Col md={9} sm={9} xs={12}><button className='button_blog'>Read More <FontAwesomeIcon icon={faGreaterThan} className='Grater_then' ></FontAwesomeIcon></button></Col>
                                        {/* <Col md={3} sm={3} xs={12}></Col> */}
                                    </Row>
                                </div>

                            </Card>
                        )
                    })}
                </Carousel>
            </Col>
        </Container>
    );
}

export default Blog;