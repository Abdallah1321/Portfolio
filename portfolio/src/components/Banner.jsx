import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Coding Enthusiast", "Software Tester"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hello ! I am Abdallah! `}</h1>
                  <h1>
                    <span className="wrap">A {text}</span>
                  </h1>
                  <div>
                    <p>
                      I graduated from the Coventry University branch in Egypt
                      in 2023 with a Bachelors Degree in Computer Science. The
                      grade I achieved was First Class with Honors. I am a
                      driven and aspiring web developer with a strong passion
                      for crafting innovative and user-centric digital
                      experiences. I am eager to apply my technical proficiency,
                      creative problem-solving skills, and insatiable curiosity
                      to contribute to dynamic web development projects.
                      Committed to staying at the forefront of technological
                      advancements in the field and continuously enhancing my
                      coding expertise to build efficient, visually appealing,
                      and responsive websites. Seeking an opportunity to
                      collaborate with like-minded professionals in a
                      growth-oriented environment where I can leverage my
                      enthusiasm for coding and design to create impactful
                      online solutions.
                    </p>
                  </div>
                  <div className="buttons-container">
                    <button onClick={() => console.log("connect")}>
                      Connect with me! <ArrowRightCircle size={25} />
                    </button>
                    <button>
                      <a href="/Abdallah_Ibrahim_CV.pdf" download={true}>
                        Download my CV! <ArrowDownCircle size={25} />
                      </a>
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
