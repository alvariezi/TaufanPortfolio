import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../aassets/img/port1.png";
import projImg2 from "../aassets/img/port2.png";
import projImg3 from "../aassets/img/port3.png";
import projImg4 from "../aassets/img/port4.png";
import projImg5 from "../aassets/img/port5.png";
import projImg6 from "../aassets/img/port6.png";
import colorSharp2 from "../aassets/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Website Portfolio",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Mie Ayam Mas Don Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Codecraft Website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Kasir Website",
      description: "Application",
      imgUrl: projImg4,
    },
    {
      title: "Coffe Application",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Pictografest Website",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>these are some of the projects I have made while studying at smkn 1 banyuwangi.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">App Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}