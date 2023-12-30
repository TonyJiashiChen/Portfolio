import { Container, Col, Row, Nav, Tab } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, externalUrl }) => {

  const linkStyle = {
    color: 'white',  // Set the color to white or any other color you prefer
    textDecoration: 'none',  // Remove the underline style
  };

  const cardStyle = {
    height: '100%', // Set the desired height
    display: 'flex',
    flexDirection: 'column',
  };
  
  return (
    <Col sm={6} md={4} style={cardStyle}>
      <a href={externalUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} style={{ width: '100%' }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  );
};
