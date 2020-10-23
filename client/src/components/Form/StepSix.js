import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import MuqoIcon from "../../resources/images/muqo.jpg";
import { nextStep, prevStep } from "../../redux/actions/influencersActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const StepSix = ({ nextStep, prevStep, location }) => {
  return (
    <div>
      <Card>
        <Card.Header>
          {" "}
          {/* <Card.Img variant="top" src={MuqoIcon} /> */}
        </Card.Header>
        {location.state.mainType === "vip" ? (
          <Card.Body>
            <Card.Title>
              Thank you for your interest in becoming a verrified influencer
            </Card.Title>
            <Card.Text>Requirments for Influencer Partners(VIP):</Card.Text>
            <ListGroup>
              <Card.Text>Every month VIP’s must:</Card.Text>
              <ListGroup.Item> Make 5 Muqo posts</ListGroup.Item>
              <ListGroup.Item>
                Livestream 5 virtual concerts/performances per month
              </ListGroup.Item>
              <ListGroup.Item>
                Musicians must Upload 3 songs to the Muqo music library
              </ListGroup.Item>
              <ListGroup.Item>
                Share 3 of your Muqo music videos to other social media profiles
                every month{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                Have 30,000 followers combined on other social media platforms
              </ListGroup.Item>
              <ListGroup.Item>
                Have 10 people use your referral code per month
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        ) : (
          <Card.Body>
            <Card.Title>
              Thank you for your interest in becoming a verrified influencer
            </Card.Title>
            <Card.Text>Requirments for Pro Affiliates:</Card.Text>
            <ListGroup>
              <Card.Text>Every month Pro’s must:</Card.Text>
              <ListGroup.Item> Make 7 posts on Muqo per month</ListGroup.Item>
              <ListGroup.Item>
                Livestream 5 virtual concerts/performances per month
              </ListGroup.Item>
              <ListGroup.Item>
                Share 3 of your Muqo music videos to other social media profiles
                every month
              </ListGroup.Item>
              <ListGroup.Item>
                Musicians must upload 3 of their songs to the Muqo Music Library
              </ListGroup.Item>
              <ListGroup.Item>
                Have 5,000 followers combined on other social media platforms
              </ListGroup.Item>
              <ListGroup.Item>
                Have 8 people use your referral code per month
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        )}
      </Card>
      <br />

      <div className="row">
        <div className="col-6">
          <Button
            variant="danger"
            onClick={() => {
              prevStep();
            }}
          >
            Back
          </Button>
        </div>
        <div className="col-6 text-right">
          <Button variant="primary" onClick={() => nextStep()}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  nextStep,
  prevStep,
})(withRouter(StepSix));
