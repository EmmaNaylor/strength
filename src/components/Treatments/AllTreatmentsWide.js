import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../../styles/treatments.css";
import meditation from "../../assets/meditation.jpg";
import cranio from "../../assets/jacky-cst-above.jpeg";
import reiki from "../../assets/reiki-1.jpg";
import iv from "../../assets/vitamin-drip-crop.jpg";
import colonic from "../../assets/colonic-bed.JPG";
import lifecoach from "../../assets/lifecoach-2.jpg";
import nutrition from "../../assets/green-juice.jpeg";
import somato from "../../assets/jacky-somato.jpeg";
import tympa from "../../assets/ears2.jpeg";
import dorn from "../../assets/dorn.jpg";


const titles = [
  "IV Nutrient Therapy",
  "Colonic Hydrotherapy",
  "Meditation",
  "CranioSacral Therapy",
  "Reiki and Seichem Healing",
  "Health Coaching",
  "Nutritional Assessment and Guidance",
  "Somato Emotional Release",
  "Ear Examination and Microsuction",
  "Dorn Method and Breuss Massage"
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
  "The Dorn Method is a gentle spinal column and joint treatment designed to help alleviate back pain and headaches, caused by misaligned vertebrae or a difference in leg lengths. It is a manipulative treatment that can help joints and vertebrae slip back into their original position through dynamic movements. The Breuss Massage is a very gentle Spinal Massage that safely stretches, nourishes, aligns and energizes the spine, and combines perfectly with the Dorn Method"
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
  dorn
];

const AllTreatmentsWide = () => {
  const navigate = useNavigate();
  const handleClick = (location) => {
    console.log(`services/${location}`);
    navigate(`/services/${location}`);
  };
  return (
    <div className="all-treatments-wide">
      <Card onClick={() => handleClick("iv_nutrient_therapy")}>
        <Card.Img
          variant="top"
          src={images[0]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[0]}</Card.Title>
          <Card.Text>{descriptions[0]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("colonic_hydrotherapy")}>
        <Card.Img
          variant="top"
          src={images[1]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[1]}</Card.Title>
          <Card.Text>{descriptions[1]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("tympa")}>
        <Card.Img
          variant="top"
          src={images[8]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[8]}</Card.Title>
          <Card.Text>{descriptions[8]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("meditation")}>
        <Card.Img
          variant="top"
          src={images[2]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[2]}</Card.Title>
          <Card.Text>{descriptions[2]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("craniosacral_therapy")}>
        <Card.Img
          variant="top"
          src={images[3]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[3]}</Card.Title>
          <Card.Text>{descriptions[3]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("reiki_seichem")}>
        <Card.Img
          variant="top"
          src={images[4]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[4]}</Card.Title>
          <Card.Text>{descriptions[4]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("health_coaching")}>
        <Card.Img
          variant="top"
          src={images[5]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[5]}</Card.Title>
          <Card.Text>{descriptions[5]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("nutritional_therapy")}>
        <Card.Img
          variant="top"
          src={images[6]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[6]}</Card.Title>
          <Card.Text>{descriptions[6]}</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={() => handleClick("somato_emotional_release")}>
        <Card.Img
          variant="top"
          src={images[7]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[7]}</Card.Title>
          <Card.Text>{descriptions[7]}</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src={images[9]}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{titles[9]}</Card.Title>
          <Card.Text>{descriptions[9]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllTreatmentsWide;
