import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/Asset_2.svg";
import navBtn1 from "../assets/img/nav-icon1.svg";
import navBtn2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abdallah-ibrahim37/">
                <img src={navBtn1} alt="" />
              </a>
              <a href="https://github.com/Abdallah1321">
                <img src={navBtn2} alt="" />
              </a>
            </div>
            <p>CopyRight 2023. All Right Reserved - Abdallah Ibrahim</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
