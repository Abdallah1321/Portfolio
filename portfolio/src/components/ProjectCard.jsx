import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, stack, description, imgUrl, gitHub }) => {
  return (
    <Col sm={6} md={4}>
      <a href={gitHub}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <h5>{stack}</h5>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
