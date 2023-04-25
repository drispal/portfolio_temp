import React from 'react';
import EducationCard from '../components/EducationCard';
import { educationInfo } from '../portfolio';
import { Container, Row, Col } from 'reactstrap';

const Education = () => {
  return (
    educationInfo && (
      <section className="section pb-0 my-5" id="education">
        <Container>
          <div className="d-flex px-3">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-books text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Education</h4>
            </div>
          </div>
          {educationInfo.map((info) => {
            return (
              <Row className="row-grid align-items-center">
                <Col key={info.schoolName}>
                  <EducationCard {...info} />
                </Col>
              </Row>
            );
          })}
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    )
  );
};

export default Education;
