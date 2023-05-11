import React from 'react';
import { Card, CardBody, Col, Button, CardImg } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ProjectType } from '../types/sections';
import YoutubeEmbed from './YoutubeEmbed';

const ProjectsCard = ({ name, image, video, desc, github, link, file }: ProjectType) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          {image && !video && <CardImg variant="top" src={image}/>}
          {video && <YoutubeEmbed embedId={video}/> }
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{name}</h3>
                <p className="description mt-3">{desc}</p>
                {github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="nav-link-inner--text ml-1">Demo </span>
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                  </Button>
                ) : !github && !file && <Button
                  className="btn-icon"
                  color="warning"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="nav-link-inner--text ml-1">Soon </span>
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                </Button>}
                {file && <Button
                    className="btn-icon"
                    color="warning"
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <a href={file} target="_blank">
                    <span className="nav-link-inner--text ml-1">Read More </span>
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    </a>
                  </Button>}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
