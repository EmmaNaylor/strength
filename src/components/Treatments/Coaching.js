import React from "react";
import { useNavigate } from "react-router-dom";
import strengthLogo from "../../assets/strengthLogo.png";
import coach from "../../assets/lifecoach.jpg";
import coach2 from "../../assets/lifecoach-2.jpg";
import beach from "../../assets/beach.jpg";
import Button from "react-bootstrap/Button";
import "../../styles/treatments.css";
import styled from "styled-components";

const DesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    display: block;
  }
`;

const Coaching = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Life Coach</h3>
        <p className="treatment-text">
          A life coach’s role is to encourage a person in a range of personal or
          professional issues. The coach inspires the client to make positive
          and lasting changes in a solution focused approach to personal
          development, and they themselves are the facilitators of change. These
          changes can be as large or small as you need.
        </p>
        <p className="treatment-text">
          Evidence based tools and techniques are used to empower a client in a
          caring supportive and inspiring environment.
        </p>
      </section>
      <img className="treatment-image" src={coach} />
      <img className="treatment-image" src={coach2} />
      <DesktopWrapper><img className="treatment-image" src={coach} /></DesktopWrapper>
      <section className="treatment-section">
        <h3 className="treatment-heading">Why you might use a Life Coach</h3>
        <div className="treatment-grid">
          <ul className="treatment-list">
            <li className="treatment-item">To help build confidence</li>
            <li className="treatment-item">To improve self esteem</li>
            <li className="treatment-item">To improve life skills</li>
            <li className="treatment-item">To change a work/life balance</li>
            <li className="treatment-item">To reprogram negative beliefs</li>
            <li className="treatment-item">To improve communication skills</li>
            <li className="treatment-item">
              To alter unhelpful behavioural patterns
            </li>
            <li className="treatment-item">To increase motiviation</li>
          </ul>
        </div>
      </section>
      <img className="wide-treatment-image" src={beach} />
      <div className="treatment-grid">
        <ul className="treatment-list">
          <li className="treatment-item">
            Encourage self-discovery and growth
          </li>
          <li className="treatment-item">
            Nurture and evoke strategies and plan of action based on the persons
            goals, personality and vision
          </li>
          <li className="treatment-item">
            Clarify, identify and create a vision with attainable measurable
            goals for a person’s needs
          </li>
          <li className="treatment-item">
            Nurtures a person’s accountability in order to increase productivity
          </li>
        </ul>
      </div>
      <p className="treatment-text">
        The individual (the client) and life coach have a creative partnership
        that pursues to:
      </p>
      <p className="treatment-text">
        Life coaching works in a specific structured format. The coach works
        together with you to formulate a plan. You will ascertain your goals as
        the basis for this. Once these steps have been taken you will
        collaborate to identify barriers and limiting beliefs that may have been
        obstructing you.
      </p>
      <p className="treatment-text">
        The coach will discuss and set challenging but measureable and
        achievable goals on a regular basis for you to work towards and attain
        to enable your final goal to be accomplished.
      </p>
      <h3 className="treatment-heading">Health Coach</h3>
      <p className="treatment-text">
        A Health Coach supports people in gaining and using knowledge, skills,
        tools and confidence to become active participants in their own care; to
        enable them to reach their self-identified health and wellbeing goals,
        using evidence based interventions to facilitate and maintain the plans
        they have set out.
      </p>
      <p className="treatment-text">
        Clients build new habits and make lasting changes.
      </p>
      <p className="treatment-text">
        In the first conference (whether it be face to face, using zoom or over
        the phone or by email) you will dictate how much interaction you want
        and can alter this at any time. You may feel that face-to-face, or using
        emails is best way of contact for you, or you may feel you need a
        mixture of all methods, You are in control. I will facilitate the
        changes you want to make.
      </p>
      <div className="button-container">
        <Button
          variant="outline-success"
          className="book"
          onClick={handleClick}
        >
          Book
        </Button>
      </div>
    </div>
  );
};

export default Coaching;
