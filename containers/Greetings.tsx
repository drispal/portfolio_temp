import React, { useEffect } from 'react';
import { greetings } from '../portfolio';
import { Button, Container, Row, Col } from 'reactstrap';
import GreetingLottie from '../components/DisplayLottie';
import SocialLinks from '../components/SocialLinks';
import DisplayLottie from '../components/DisplayLottie';

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-300">
          <div className="shape shape-style-1 bg-gradient-default">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={'span-circle' + i}/>
            ))}
          </div>
          <Container className="">
            <div className="col-auto">
              <Row>
                <Col xl={{size: "auto"}} className='align-self-center'>
                  <h1 className="display-1 text-white">
                    {greetings.title + ' '}
                  </h1>
                  <p className="lead text-white">
                    {greetings.description} 
                  </p>
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">See My Resume</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col>
                  <GreetingLottie animationPath="/lottie/gamedev.json" />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
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
            <Container>
              <Row className="align-items-center">
                <Col className="ml-lg-auto">
                    <p className='text-center'>Scroll to discover more</p>
                </Col>
              </Row>
              <Row className="align-items-center position-absolute" style={{width: "48px", height:"48px", right: "50%"}}>
                  <DisplayLottie animationPath="/lottie/scroll_down.json" />
              </Row>
            </Container>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
