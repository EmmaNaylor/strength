import React from "react";
import strengthLogo from "../../assets/strengthLogo.png";
import coach from "../../assets/lifecoach.jpg";
import coach2 from "../../assets/lifecoach-2.jpg";
import goals from "../../assets/goals.jpeg"
import juice from "../../assets/green-juice.jpeg"
import goal from "../../assets/goal-pad.jpg";
import "../../styles/treatments.css";
import styled from "styled-components";
import BookingButton from "../BookingButton";

const DesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    display: inline-block;
  }
`;

const Coaching = () => {
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Health Coach</h3>
        <p className="treatment-text">
          The coach inspires the client to make positive
          and lasting changes in a solution focused approach to personal
          development, and they themselves are the facilitators of change. These
          changes can be as large or small as you need.
        </p>
        <p className="treatment-text">
          Evidence based tools and techniques are used to empower a client in a
          caring supportive and inspiring environment.
        </p>
      </section>
      {/* <div className="small-image-container">
        <img className="treatment-image" src={juice} />
      </div>
      <div className="small-image-container">
        <img className="treatment-image" src={coach} />
      </div>
      <DesktopWrapper>
        <div className="small-image-container">
          <img className="treatment-image" src={coach2} />
        </div>
      </DesktopWrapper> */}
      {/* <section className="treatment-section">
        <h3 className="treatment-heading">Why you might use a Health Coach</h3>
        <div className="condition-grid">
          <ul className="condition-list">
            <li className="condition-item">To help build confidence</li>
            <li className="condition-item">To improve self esteem</li>
            <li className="condition-item">To improve life skills</li>
            <li className="condition-item">To increase motiviation</li>
            <li className="condition-item">To change a work/life balance</li>
            <li className="condition-item">To reprogram negative beliefs</li>
            <li className="condition-item">To improve communication skills</li>
            <li className="condition-item">
              To alter unhelpful behavioural patterns
            </li>
          </ul>
        </div>
      </section> */}
      <div className="phone-image-container">
        <img className="wide-treatment-image" src={goal} />
      </div>
      <p className="treatment-text">
        The individual (the client) and the coach have a creative partnership
        that pursues to:
      </p>
      <div className="condition-grid">
        <ul className="condition-list-solo">
          <li className="condition-item">
            Encourage self-discovery and growth
          </li>
          <li className="condition-item">
            Nurture and evoke strategies and plan of action based on the persons
            goals, personality and vision
          </li>
          <li className="condition-item">
            Clarify, identify and create a vision with attainable measurable
            goals for a person’s needs
          </li>
        </ul>
      </div>
      <section className="treatment-section">
        <div className="treatment-separator"></div>
        <p className="treatment-text">
          A Health Coach supports people in gaining and using knowledge, skills,
          tools and confidence to become active participants in their own care;
          to enable them to reach their self-identified health and wellbeing
          goals, using evidence based interventions to facilitate and maintain
          the plans they have set out. I firmly believe that nutritional intake, water, exercise, daylight and sleep is the optimum solution for our body’s needs. Clients build new habits and make lasting changes.
        </p>
        <p className="treatment-text">
          In the first meeting (whether it be face to face, using zoom or
          over the phone) you will dictate how much interaction you
          want and can alter this at any time. You may feel that face-to-face,
          or using emails is best way of contact for you, or you may feel you
          need a mixture of all methods, You are in control. I will facilitate
          the changes you want to make.
        </p>
      </section>
      <div className="treatment-separator"></div>
        <h3 className="treatment-heading">
          How do I book my session with you?
        </h3>
        <p className="treatment-text">
          Use our Contact form to book a session with me.
      </p>
      <BookingButton />
        <div className="treatment-separator"></div>
    </div>
  );
};

export default Coaching;
