import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../../styles/treatments.css";
import meditation from "../../assets/meditation.jpg";
import cranio from "../../assets/jacky-cst-above.jpeg";
import reiki from "../../assets/reiki-1.jpg";
import iv from "../../assets/lifecoach.jpg";
import colonic from "../../assets/jacky-colonic.jpeg";
import lifecoach from "../../assets/lifecoach-2.jpg";
import nutrition from "../../assets/green-juice.jpeg";
import somato from "../../assets/jacky-somato.jpeg";
import tympa from "../../assets/ears2.jpeg";

const titles = [
  "IV Nutrient Therapy",
  "Colonic Hydrotherapy",
  "Meditation",
  "CranioSacral Therapy",
  "Reiki and Seichem Healing",
  "Health Coaching",
  "Nutritional Assessment and Guidance",
  "Somato Emotional Release",
  "Tympa Hearing Treatment",
];
const descriptions = [
  "IV nutrient therapy is a safe and effective way of administering essential vitamins, minerals and amino acids to your body in a way which helps your body to improve absorption and the uptake of the nutrients",
  "Colonic hydrotherapy is a gentle, safe and effective method to cleanse and remove accumulated toxic waste material from the colon using warmed filtered water",
  "Jacky provides guided meditation sessions one to one or in groups",
  "CranioSacral Therapy is a gentle body work therapy which can be used to treat everyday stresses and strains as well as more chronic conditions making dynamic improvements",
  "Jacky is a Reiki and Seichem Master and can provide therapeutic sessions of Reiki and Seichem healing to align your body’s energy",
  "A life coach’s role is to encourage a person in a range of personal or professional issues. The coach inspires the client to make positive and lasting changes in a solution focused approach to personal development, and they themselves are the facilitators of change",
  "As a Clinical Nutritional Therapist Jacky can help you to plan a new lifestyle. This will include healthy eating and hydration to support all of your nutritional needs",
  "In SER we discover and release the adverse effects of past distresses from mind and body and facilitate the realisation of their effects",
  "The Tympa system allows you to perform: a high-definition digital otoscopy, microsuction wax removal, and carry out a hearing screening, all in a single 30-minute appointment",
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
  tympa,
];

// margin: auto;
// margin-bottom: 15px;
// width: 652px;
// height: 488px;
// padding: 10px;
// display: inline-block;

const AllTreatmentsPage = () => {
  const navigate = useNavigate();
  const handleClick = (location) => {
    console.log(`services/${location}`);
    navigate(`/services/${location}`);
  };
  return (
    <div className="all-treatments-page">
      <Card 
        onClick={() => handleClick("iv_nutrient_therapy")}
      >
        <Card.Img variant="top" src={images[0]} />
        <Card.Body>
          <Card.Title>{titles[0]}</Card.Title>
          <Card.Text>{descriptions[0]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("colonic_hydrotherapy")}>
        <Card.Img variant="top" src={images[1]} />
        <Card.Body>
          <Card.Title>{titles[1]}</Card.Title>
          <Card.Text>{descriptions[1]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("tympa")}>
        <Card.Img variant="top" src={images[8]} />
        <Card.Body>
          <Card.Title>{titles[8]}</Card.Title>
          <Card.Text>{descriptions[8]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("meditation")}>
        <Card.Img variant="top" src={images[2]} />
        <Card.Body>
          <Card.Title>{titles[2]}</Card.Title>
          <Card.Text>{descriptions[2]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("craniosacral_therapy")}>
        <Card.Img variant="top" src={images[3]} />
        <Card.Body>
          <Card.Title>{titles[3]}</Card.Title>
          <Card.Text>{descriptions[3]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("reiki_seichem")}>
        <Card.Img variant="top" src={images[4]} />
        <Card.Body>
          <Card.Title>{titles[4]}</Card.Title>
          <Card.Text>{descriptions[4]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("health_coaching")}>
        <Card.Img variant="top" src={images[5]} />
        <Card.Body>
          <Card.Title>{titles[5]}</Card.Title>
          <Card.Text>{descriptions[5]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("nutritional_therapy")}>
        <Card.Img variant="top" src={images[6]} />
        <Card.Body>
          <Card.Title>{titles[6]}</Card.Title>
          <Card.Text>{descriptions[6]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("somato_emotional_release")}>
        <Card.Img variant="top" src={images[7]} />
        <Card.Body>
          <Card.Title>{titles[7]}</Card.Title>
          <Card.Text>{descriptions[7]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllTreatmentsPage;
