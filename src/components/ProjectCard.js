import { Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

export const ProjectCard = ({title, description, imgUrl, url}) => {
  return (
    <Col sm={6} md={4}>
      <a href={url} rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} style={{width: '100%'}} alt='imgurl'/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}