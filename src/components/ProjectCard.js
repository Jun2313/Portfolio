import { Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

export const ProjectCard = ({title, description, imgUrl}) => {
  return(
    <Col sm={6} md={4}>
      <TrackVisibility>
          {({ isVisible }) => 
          <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{width: '100%'}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </div>}
      </TrackVisibility>
    </Col>
  )
}