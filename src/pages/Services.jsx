import React from "react";
import { useParams } from "react-router-dom";
import AllTreatments from "../components/Treatments/AllTreatments";
import Coaching from "../components/Treatments/Coaching";
import Cranio from "../components/Treatments/Cranio";
import IndianHeadMassage from "../components/Treatments/IndianHeadMassage";
import Massage from "../components/Treatments/Massage";
import Meditation from "../components/Treatments/Meditation";
import Nutrition from "../components/Treatments/Nutrition";
import Reiki from "../components/Treatments/Reiki";
import Somato from "../components/Treatments/Somato";

const Services = () => {
  const treatments = [
    "craniosacral_therapy",
    "somato_emotional_release",
    "life_coaching",
    "nutritional_therapy",
    "meditation",
    "reiki_seichem",
    "massage_therapy",
    "indian_head_massage",
  ];
  const { service } = useParams();
  const all = !treatments.includes(service);
  return (
    <>
      {all && <AllTreatments />}
      {service === "craniosacral_therapy" && <Cranio />}
      {service === "somato_emotional_release" && <Somato />}
      {service === "life_coaching" && <Coaching />}
      {service === "nutritional_therapy" && <Nutrition />}
      {service === "meditation" && <Meditation />}
      {service === "reiki_seichem" && <Reiki />}
      {service === "massage_therapy" && <Massage />}
      {service === "indian_head_massage" && <IndianHeadMassage />}
    </>
  );
};

export default Services;
