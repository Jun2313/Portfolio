import { Container, Row, Col, Nav, Tab} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/ready2.png";

import TrackVisibility from 'react-on-screen';
export const Projects = () => {

  const projects =[
    {
      title: "weather API",
      description: "리액트로 만든 날씨 API",
      imgUrl: projImg1,
      url: "http://was6074.dothome.co.kr/weather",
    },
    {
      title:"Business Startup",
      description: "Design % Development",
      imgUrl: projImg1,
    },
    {
      title:"Business Startup",
      description: "Design % Development",
      imgUrl: projImg1,
    },
    {
      title:"Business Startup",
      description: "Design % Development",
      imgUrl: projImg1,
    },
    {
      title:"Business Startup",
      description: "Design % Development",
      imgUrl: projImg1,
    },
    {
      title:"Business Startup",
      description: "Design % Development",
      imgUrl: projImg1,
    },
  ]

  return(
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
          {({ isVisible }) => 
          <div className={isVisible ? "animate__animated animate__bounce" : ""}>
            <h2>Projects</h2>
            <p>Lorem Ipsum</p>
            </div>}
          </TrackVisibility>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">First</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project, index) => {
                      return(
                        <ProjectCard
                        key={index}
                        {...project}
                        
                        />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
              <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}