import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/mga.png";
import projImg2 from "../assets/img/metapath.png";
import projImg3 from "../assets/img/accessibility.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Web content editor at MGA",
      description: "Migrating the MGA website from WordPress to MSL",
      imgUrl: projImg1,
      externalUrl: "https://mga.monash.edu/",
    },
    {
      title: "Software developer at SWFT blockchain",
      description: `Developed MetaPath, a decentralized aggregator for NFT and GameFi modules.
      Integrated third-party SDKs and endpoints.
      Designed and implemented back-end logic and database update mechanism.
      Utilized Node.js, KOA, MySQL, Redis, web sockets, and GitLab`,
      imgUrl: projImg2,
      externalUrl: "https://paths.finance/#/swap?source=path",
    },
    {
      title: "Monash Summer Scholarship",
      description: `Developed an machine learning based Android app that converts screen recorded videos of user actions into mobile
      phone shortcuts using Python v2s and Flask for the backend and Android Studio for the frontend
      Report weekly progress to supervisor, collaborated with a team of fellow scholars to design and implement the app,
      which earned recognition for its innovative use of technology`,
      imgUrl: projImg3,
      externalUrl: "https://github.com/TonyJiashiChen/NewAccessibilityService",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Work/Project Experience</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content>
                      <Tab.Pane eventKey="first" className="custom-tab-pane">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
