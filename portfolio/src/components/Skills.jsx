import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import { CartDash } from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.png";

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
                Welcome to my skills showcase, a testament to my journey of
                continuous growth in technology. Proficient in front-end
                development with ReactJS, CSS, and HTML, I craft engaging user
                experiences that seamlessly adapt across platforms. On the
                back-end, I leverage NodeJS, ExpressJS, and MongoDB to architect
                robust server systems. My database experience includes MongoDB as
                previously mentioned, but also MySQL, SQLite, and FireBase,
                enabling scalable and secure data solutions. Agile methodologies
                and strong software testing underpin my approach, supported by
                effective use of UML diagrams and Git. Beyond technical prowess,
                my communication, teamwork, leadership, and problem-solving
                skills drive productive collaborations. Let's embark on a
                journey together, where innovation and adaptability fuel the
                creation of exceptional digital solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-sider"
              >
                <div className="item">
                  <h2 className="title">Front-End Skills</h2>
                  <h5>
                    ReactJS, CSS, HTML, SCSS, Bootstrap, Tailwind CSS,
                    Responsive Design, JavaScript
                  </h5>
                </div>
                <div className="item">
                  <h2 className="title">Back-End Skills</h2>
                  <h5>
                    NodeJS, ExpressJS, Flask, Java, C++, Data Structures and
                    Algorithms, OOP, RESTful APIs
                  </h5>
                </div>
                <div className="item">
                  <h2 className="title">Database Skills</h2>
                  <h5>
                    MySQL, SQLite, MongoDB, FireBase, Big Data, Complex Queries,
                    Data Modeling
                  </h5>
                </div>
                <div className="item">
                  <h2 className="title">Method Skills</h2>
                  <h5>
                    Waterfall Model, Agile Development, Software Development,
                    Sprint Planning, UML Diagrams and Modeling, Software
                    Testing, Git
                  </h5>
                </div>
                <div className="item">
                  <h2 className="title">Soft Skills</h2>
                  <h5>
                    English Communication, Arabic Communication, Teamwork and
                    Leadership, Time Management, Problem Solving
                  </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
