import { Col } from "react-bootstrap";

export const ExperienceCard = ({ company, role, date, description}) => {
  return (
    <Col sm={6} md={4}>
          <div className="experience-card">
            <h4>{company}</h4>
            <span>{date}</span>
            <h5>{role}</h5>
            <span>{description}</span>
          </div>
    </Col>
  );
};