import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return(
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
            <TrackVisibility>
          {({ isVisible }) => 
          <div className={isVisible ? "animate__animated animate__bounce" : ""}>
              <h2>
                Skills
              </h2>
              <p>
                lorem
              </p>
              </div>}
            </TrackVisibility>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className='item'>
                  <img src={meter1} alt="테스트1" />
                  <h5>테스트1</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt="테스트2" />
                  <h5>테스트2</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt="테스트3" />
                  <h5>테스트3</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt="테스트4" />
                  <h5>테스트1</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='배경이미지' />
    </section>

  )
}