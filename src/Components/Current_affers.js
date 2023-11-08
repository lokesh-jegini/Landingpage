// import { Container } from "react-bootstrap";
// import React, { useState } from 'react';
import parse from "html-react-parser";
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, } from '@fortawesome/free-solid-svg-icons';
import baseUrl from "./baseUrl";
import { useState, useEffect } from "react";
import axios from "axios";

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
function Currentaffer() {
    var [currentAffer, setCurrentAffer] = useState([]);



    const callGetAPI = async () => {
        const response = await axios.get(baseUrl()+'/df/findCurrentAffairs');
        setCurrentAffer(response.data.result);

    };


    useEffect(() => {
        callGetAPI();
        console.log("currentAffer", currentAffer);
        currentAffer.map((r) => {
            console.log("CF", r)
        })

    }, []);



    return (
            <Container className="margin-top-97 margin-top-97_res">
                <Row>
                    <Col md={8} sm={12} xs={12} className="float-md-left gap-10">
                        <div className="curr_left ">
                            <div className="curr_head mb-4">Latest Current Affairs</div>
                            <div className="curr_head_lay mb-4">
                            </div>
                            {currentAffer.slice(0, 2).map((r) => {
                                return (
                                    <>
                                        <div className="curr_head_lay mb-4">
                                            <div className="curr_head_2 mb-4">{r.affairsBeans[0].currentAffairsHead}: {r.affairsBeans[0].title}</div>
                                            <p className="curr_para">{r.affairsBeans[0].currentAffairsContent.replaceAll('<p>', '').replaceAll('</p>', '')}</p>
                                        </div>
                                        <div className="curr_rm mb-4">
                                            Read More
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </Col>
                    <Col md={4} sm={12} xs={12} className="float-md-right  ">

                        <div>
                            < div className="curr_right">
                                <p className="right_head">Monthly Current Affer</p>
                                {
                                    currentAffer.slice(0, 4).map((values, idx) => {
                                        return (

                                            <p key={idx} className="right_p">{values.dateRangeText}</p>
                                        )
                                    })
                                }
                                <div className="right_rm mb-4">View All<FontAwesomeIcon icon={faGreaterThan} className='Grater_then'></FontAwesomeIcon></div>
                                <p className="right_head2">Categories</p>
                                <p className="right_p2">Polity</p>
                                <p className="right_p2">Science & Technology</p>
                                <p className="right_p2">General Knowledge</p>
                                <div className="right_rm">View All<FontAwesomeIcon icon={faGreaterThan} className='Grater_then'></FontAwesomeIcon></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
};

export default Currentaffer;