import { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img2.png';
import 'animate.css'
import TrackVisibility from 'react-on-screen';
// import { isVisible } from '@testing-library/user-event/dist/utils';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const [useDeliting, setUseDeliting] = useState(false);
  const toRotate= [ "Web Debeloper", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const preiod = 2000;

  useEffect(() => {
let ticker = setInterval(() => {
  tick();
  },delta)

  return() => {clearInterval(ticker)}
}, [delta, isDeleting, loopNum, toRotate, text]);

const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if(isDeleting) {
    setDelta(prevDelta => prevDelta /2)
  }

  if(!isDeleting &&  updatedText === fullText) {
    setIsDeleting(true);
    setDelta(preiod);
  }else if (isDeleting && updatedText === ''){
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setDelta(500);
  }
}

return (
  <section className="banner" id="home">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {({ isVisible }) => 
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <span className="tagline">저의 포트폴리오에 오신건 환영합니다</span>
          <h1>{`안녕하세요 저는 `}<span className="wrap">{text}</span> </h1>
          <p>lorem</p>
          <button onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
          </div>}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt="Headder Img" width={'80%'}></img>
        </Col>
      </Row>
    </Container>
  </section>
  )
}