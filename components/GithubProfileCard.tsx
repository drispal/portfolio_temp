import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-default shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                LOOKING FOR A GAMEPLAY PROGRAMMER INTERNSHIP STARTING IN SEPTEMBER 2023
              </p>
              <p className="text-white">
                Mail me at : <a href='mailto:damienjoseph.rispal@gmail.com'>damienjoseph.rispal@gmail.com</a>
              </p>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
