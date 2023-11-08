import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
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


function ControlledCarosel() {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [slider, setSlider] = useState([]);

  const sliderGetAPI = async () => {
    const response = await axios.get(baseUrl()+'/homePageData/Banner');
    setSlider(response.data.data);
    console.log(response.data);

  };


  useEffect(() => {
    sliderGetAPI();
    console.log("slider", slider);
  }, []);

  // animated slides: 
  //   const element = document.querySelector('.my-element');
  // element.classList.add('animate__animated', ' animate__fadeInRight');

  // element.addEventListener('animationend', () => {
  // do something
  // first slide -- animate__fadeInLeft
  // secound slide --  animate__fadeInRight
  // third slide -- animate__fadeInRight
  // });


  return (
    <section /*  responsive={responsive} */ fluid >
      <Carousel activeIndex={index} onSelect={handleSelect} className='banner-slider' >
        {
          slider?.map((value) => {
            return (
              <Carousel.Item>
                <img src={"./assets/caroselimg/" + value.imagename} alt="image" fluid height="900" width="100%"></img>
                {/* <Carousel.Caption>
                  <div className='content-head'>
                  <p className='content1'>Upgrade yourself quality to <br></br> ready a better future</p>
                <div className='content_1'>
                  <button type='button' className='button-btn'  >Get Started</button>
                  <Image src="./assets/svg/Group 185142.svg" alt='play btn' className="play-btn" fluid />
                  <a href=' ' className='play_link'>Play Video</a>
                  </div>
                  </div>
                </Carousel.Caption> */}
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    {/* </Container> */}
    </section>
  );
}

const Slider = () => {
  return (
    <section className='Slider'>
      {/* <div className='container'> */}
      <ControlledCarosel />
      {/* </div> */}
    </section>
  )
}
export default Slider;