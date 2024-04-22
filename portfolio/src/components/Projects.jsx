import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/e7gez.png";
import projImg2 from "../assets/img/triphopper.png";
import projImg3 from "../assets/img/purrfectpal.png";
import projImg4 from "../assets/img/fraud.png";
import projImg5 from "../assets/img/raterestaurants.png";
import projImg6 from "../assets/img/imdbdata.png";
import { ExperienceCard } from "./ExperienceCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "E7GEZ - Graduation Project",
      stack: "ReactJS, NodeJS, MongoDB, ExpressJS",
      description:
        "A Restaurant Reservation and Management System aimed to making the reservation experience better in Egypt.",
      imgUrl: projImg1,
      gitHub: "https://github.com/Abdallah1321/e7gez-reservationapp",
    },
    {
      title: "TripHopper",
      stack: "ReactJS, NodeJS, MongoDB, ExpressJS",
      description:
        "A trip planner web application where users can browse and search for trips based on location or their budget.",
      imgUrl: projImg2,
      gitHub: "https://github.com/Abdallah1321/e7gez-reservationapp",
    },
    {
      title: "PurrfectPal",
      stack: "C#, Unity, Firebase",
      description: "A 2D virtual pet mobile game developed in Unity.",
      imgUrl: projImg3,
      gitHub: "https://github.com/TKH-Lv6-23MAD/CU1900008",
    },
    {
      title: "Payment Fraud Detection",
      stack: "Python, Keras, TensorFlow, JupyterNotebook",
      description:
        "A Machine Learning project which focused on binary classification for payment fraud based on different features.",
      imgUrl: projImg4,
      gitHub: "https://github.com/Abdallah1321/Machine-Learning",
    },
    {
      title: "Secure Restaurant Review Web Application",
      stack: "NodeJS, Express, MongoDB, HTML, EJS, CSS",
      description:
        "A secure Restaurant Review web application built on NodeJS for the backend and EJS for the front end.",
      imgUrl: projImg5,
      gitHub: "https://github.com/Abdallah1321/Rate-Restaurants",
    },
    {
      title: "Big Data Project for Shows on IMDB",
      stack:
        "Python, R, Jupyter Notebook, Docker, Hadoop, Matplotlib, Plotly, Dash",
      description:
        "Web scraped data from IMDB using Python and R to create a dataset containing data for TV show episodes including the top review.",
      imgUrl: projImg6,
      gitHub: "https://github.com/Abdallah1321/IMDBepisodes",
    },
  ];

  const experiences = [
    {
      company: "The Sparks Foundation",
      role: "Web Developer Internship",
      date: "September 2023 - October 2023",
      description: (
        <>
          <ul>
            <li>
              Completed tasks related to web development such as creating a bank
              system using the MERN stack. This system allowed users to create
              bank transfers to other customers, view customer details, delete
              customers from the system and view the transaction history.
            </li>
            <li>
              Worked on developing a web application with payment integration
              using the PayPal developer APIs. This involved deep research on
              the documentation of the PayPal API to create a working system
              which allowed the payments.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Qcentris",
      role: "Software Test Consultant Intern",
      date: "August 2023 - September 2023",
      description: (
        <>
          <ul>
            <li>
              Collaborated with Arab African International Bank for testing
              their advanced Temenos 24 system tailored to Dubai's new banking
              branch.
            </li>
            <li>
              Developed, executed, and refined test cases, performing both
              manual and performance testing to ensure the flawless operation of
              the T24 system.
            </li>
            <li>
              Strengthened proficiency in testing methodologies and gained
              invaluable exposure to the intricate world of banking software
              systems.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Instabug",
      role: "Software Quality Control Engineer Intern",
      date: "July 2022 - September 2022",
      description: (
        <>
          <ul>
            <li>
              Played a key role in the Application Performance Monitoring (APM)
              squad, participating in planning, writing front-end automation
              scripts, and executing manual testing for new APM features.
            </li>
            <li>
              Collaborated closely with cross-functional teams to swiftly
              identify and resolve bugs, enhancing the quality and performance
              of the development process.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const achievements = [
    {
      company: "First Place Winner",
      role: "Graduation Project Pitch Competition",
      date: "March 2023",
      description: (
        <>
          <ul>
            <li>
              Competed against other seniors in pitching my graduation project
              to a group of judges.
            </li>
            <li>
              Won first place and a prize of 4000 EGP for having the best
              presentation, idea, and project implementation.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "ECPC Finalist",
      role: "ECPC",
      date: "August 2022",
      description: (
        <>
          <ul>
            <li>
              Worked in a team of 3 in the ECPC and qualifed into the finals.
            </li>
            <li>
              Solved multiple questions utilizing problem solving skills to be
              able to qualify into the finals.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Founding Member and Head of Treasury",
      role: "IEEE TKH Student Branch",
      date: "September 2021 – 2022",
      description: (
        <>
          <ul>
            <li>
              Co-Founded with twelve other members the IEEE TKH student branch
              and guided the direction of the club by suggesting activities and
              workshops which can be implemented to enhance student experience
              in the club.{" "}
            </li>
            <li>
              Oversaw the interview process and devised questions for potential
              candidates.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "First Place Winner",
      role: "ISCC’21 Hackathon",
      date: "September 2021 – 2022",
      description: (
        <>
          <ul>
            <li>
              Co-Founded with twelve other members the IEEE TKH student branch
              and guided the direction of the club by suggesting activities and
              workshops which can be implemented to enhance student experience
              in the club.{" "}
            </li>
            <li>
              Oversaw the interview process and devised questions for potential
              candidates.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Member",
      role: "National Honors Society",
      date: "September 2021 – 2022",
      description: (
        <>
          <ul>
            <li>
              Took part in community service and was always helping others, one
              of these acts of service included setting up food to be given to
              workers at school during Ramadan and preparing and serving food
              for them.
            </li>
            <li>
              Helped year 9 students in learning the basics of programming.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Resume</h2>
                  <p>
                    Here you can view the projects I have worked on, my work
                    experience as well as the achievements I have earned
                    throughout my career.
                  </p>
                  <Tab.Container id="projects-tab" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Achievements</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {experiences.map((experience, index) => {
                            return (
                              <ExperienceCard key={index} {...experience} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {achievements.map((achievement, index) => {
                            return (
                              <ExperienceCard key={index} {...achievement} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
