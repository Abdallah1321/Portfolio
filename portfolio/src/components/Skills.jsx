import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import { CartDash } from "react-bootstrap-icons";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    largeScreen: {
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

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Here are some of the skills that I have! I am always willing to take the time to learn more skills to enhance myself and become a better developer. These skills are
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-sider"
              >
                <div className="item">
                  <img src={meter1} />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} />
                  <h5>RESTful APIs</h5>
                </div>
                <div className="item">
                  <img src={meter3} />
                  <h5>Object Oriented Programming</h5>
                </div>
                <div className="item">
                  <img src={meter3} />
                  <h5>Databases</h5>
                </div>
                <div className="item">
                  <img src={meter3} />
                  <h5>Advanced Algorithms and Data Structures</h5>
                </div>
                <div className="item">
                  <img src={meter2} />
                  <h5>UML</h5>
                </div>
                <div className="item">
                  <img src={meter1} />
                  <h5>Teamwork and Communication</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};
