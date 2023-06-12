import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../styles/treatments.css";
import meditation from "../../assets/meditation.jpg";
import cranio from "../../assets/cranio_2.jpg";
import reiki from "../../assets/reiki-1.jpg";
import iv from "../../assets/vitamin-drip-crop.jpg";
import colonic from "../../assets/colonic.jpg";
import lifecoach from "../../assets/lifecoach-2.jpg";
import nutrition from "../../assets/nutrition.jpg";
import somato from "../../assets/somato.jpg";
import tympa from "../../assets/somato.jpg";

const titles = [
  'IV Nutrient Therapy',
  'Colonic Hydrotherapy',
  'Meditation',
  'CranioSacral Therapy',
  'Reiki and Seichem Healing',
  'Health Coaching',
  'Nutritional Assessment and Guidance',
  'Somato Emotional Release',
  " Ear Examination and Microsuction"
];
const descriptions = [
  'IV nutrient therapy is a safe and effective way of administering essential vitamins, minerals and amino acids to your body in a way which helps your body to improve absorption and the uptake of the nutrients',
  'Colonic hydrotherapy is a gentle, safe and effective method to cleanse and remove accumulated toxic waste material from the colon using warmed filtered water',
  "Jacky provides guided meditation sessions one to one or in groups",
  "CranioSacral Therapy is a gentle body work therapy which can be used to treat everyday stresses and strains as well as more chronic conditions making dynamic improvements",
  "Jacky is a Reiki and Seichem Master and can provide therapeutic sessions of Reiki and Seichem healing to align your body’s energy",
  "A life coach’s role is to encourage a person in a range of personal or professional issues. The coach inspires the client to make positive and lasting changes in a solution focused approach to personal development, and they themselves are the facilitators of change",
  "As a Clinical Nutritional Therapist Jacky can help you to plan a new lifestyle. This will include healthy eating and hydration to support all of your nutritional needs",
  "In SER we discover and release the adverse effects of past distresses from mind and body and facilitate the realisation of their effects",
  "The Tympa system allows you to perform: a high-definition digital otoscopy, microsuction wax removal, and carry out a hearing screening, all in a single 30-minute appointment"
];

const images = [
  iv,
  colonic,
  meditation,
  cranio,
  reiki,
  lifecoach,
  nutrition,
  somato,
  tympa
];

const AllTreatments = () => {
  return (
    <div className="all-treatments">
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={images[idx]}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body>
                <Card.Title style={{color: '#036C7B'}}>{titles[idx]}</Card.Title>
                <Card.Text>{descriptions[idx]}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllTreatments;
