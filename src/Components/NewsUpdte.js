import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";



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



function NewsUpdte() {

    const [newsholders, setNewsHolders] = useState([]);



    const newsGetApi = async () => {
        const response = await axios.get('https://www.besst.in/besstMainApi/df/findNewsEventDtls/1');
        setNewsHolders(response.data.result);
        console.log(response.data.result);

    };

    const formatDate = async (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    useEffect(() => {
        newsGetApi();
    }, []);

    return (
        <div>
            <section  className="back_ground gray_bg">

                <Row className="">
                    <Col md={6} sm={12} xs={12} className="">
                        <Card >
                            <Image src="./assets/cardimg/4debf7567473808f02f905a4a642fb82.png" alt='frame' className="report_img" fluid />
                            <Card.Body className="card-back">
                                <Card.Title className="card_title">{parse(String(newsholders[0]?.title).substring(0,100))}...s</Card.Title>
                                <Card.Text className="card-text">{parse(String(newsholders[0]?.description).substring(0,300))}...
                                </Card.Text>
                                <div className="auther-name " style={{ display: "flex", gap: 15 }}>
                                    <span> {newsholders[0]?.createdBy}</span>
                                    <span>{  newsholders[0]? new Date(newsholders[0].newsBlinkTs).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}) : ''  }</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} sm={12} xs={12} className="news_upd">
                        <Row className="news-heading">News & Updates</Row>
                        <Row className="news-content">

                            {newsholders.slice(0,5).map((values, idx) => {
                                return (
                                    <>
                                   <a href={values.link} target="_blank" className="news_a"> <p key={idx}> {parse(String(values.title).substring(0,200))}...</p></a>
                                    
                                    <div className="auther_name" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span>{values.createdBy}</span>
                                        <span>{  new Date(values.newsBlinkTs).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}) }</span>
                                    </div>
                                    </>
                                )
                            })

                            }
                            {/* <p>The Top Types of AI-Generated Content in Marketing [New
                                Data, Examples & Tips]</p> */}

                            
                        </Row>
                        

                        {/* <Row className="news-content">
                            <p>The Top Types of AI-Generated Content in Marketing [New
                                Data, Examples & Tips]</p>
                            <div className="auther_name" style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Tristen Taylor</span>
                                <span>6/5/23</span>
                            </div>
                        </Row>

                        <Row className="news-content">
                            <p>The Top Types of AI-Generated Content in Marketing [New
                                Data, Examples & Tips]</p>
                            <div className="auther_name" style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Tristen Taylor</span>
                                <span>6/5/23</span>
                            </div>
                        </Row>

                        <Row className="news-content">
                            <p>The Top Types of AI-Generated Content in Marketing [New
                                Data, Examples & Tips]</p>
                            <div className="auther_name" style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Tristen Taylor</span>
                                <span>6/5/23</span>
                            </div>
                        </Row> */}
                    </Col>
                </Row>

            </section>
        </div>
    )
};
export default NewsUpdte;