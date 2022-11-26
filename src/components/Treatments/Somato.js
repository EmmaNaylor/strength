import React from "react";
import { useNavigate } from "react-router-dom";
import strengthLogo from "../../assets/strengthLogo.png";
import somato from "../../assets/somato.jpg";
import somato2 from "../../assets/somato-2.jpg";
import somato3 from "../../assets/somato-3.jpg";
import somato4 from "../../assets/somato-4.jpg";
import Button from "react-bootstrap/Button";
import "../../styles/treatments.css";

const Somato = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">What is Somato Emotional Release?</h3>
        <p className="treatment-text">
          Dr John Upledger along with Dr Zvi Karni understood the human body can
          retain, isolate and suppress negative emotional energy and the
          physical force of an injury rather than dissipating it. They developed
          a system to assist the body to release energy. SomatoEmotional release
          (SER) is the therapeutic process used with Craniosacral Therapy to
          release the emotional energy involving dialogue and touch. Over a
          period of time pain, emotional disturbances and physical dysfunction
          can occur within the body and these blockages of energy, known as
          energy cysts, can manifest as a chronic physical illness, and often be
          more deceptive, appearing as decreased immune function, anxiety,
          fatigue or physiological dysfunction.
        </p>
        <div className="small-image-container">
          <img className="treatment-image" src={somato} />
        </div>
        <p className="treatment-text">
          There is vast research to show that a change in physical health is
          accompanied by a change in mental health and it is equally documented
          that the reverse is apparent. A significant change in mental outlook
          is always accompanied by a change in body activity, movement and
          posture.
        </p>
        <p className="treatment-text">
          SER provides a structure for working with the body’s emotions and
          tissues allowing a release of energy or memory of retained traumas.
        </p>
        <p className="treatment-text">
          SER can facilitate personal growth; it can support the body’s
          transition from illness and unresolved issues towards wellness and
          contentment.
        </p>
      </section>
      <div className="treatment-separator"></div>
      <section className="treatment-section">
        <h3 className="treatment-heading">What is Tissue Memory?</h3>
        <p className="treatment-text">
          Muscles, bones, facia, viscera, cells and tissues have the ability to
          retain memories of trauma, an example of which is when a particular
          muscle group is injured through a physical trauma; a memory of that
          trauma is stored in the affected tissue.
        </p>
        <div className="wide-image-container">
          <img className="wide-treatment-image" src={somato2} />
        </div>
        <p className="treatment-text">
          Generally this is a small, non-conscious spasm that has formed in an
          area of the body as a protective reminder of the trauma. If the memory
          in the particular tissue is not sufficiently released, the spasm will
          remain long after the injury itself has healed leading to further
          dysfunction and pain. If the contractions are not freed, they can
          cause tension to other body areas.
        </p>
        <p className="treatment-text">
          Once the negative emotions and memory are within the patient’s
          conscious awareness, the patient becomes able to relate to them in a
          different and more appropriately healthy way, at the same time the
          physical tension from the area releases, thus easing the pain.
        </p>
        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">What is an SER Treatment like?</h3>
        <p className="treatment-text">
          The body will only release what it wants to and when it is ready to do
          so. Sometimes we hold on to an emotion or energy (an energy cyst) as
          we are not quite ready to heal. This is common and is a protective
          factor.
        </p>
        <div className="wide-image-container">
          <img className="wide-treatment-image" src={somato3} />
        </div>
        <p className="treatment-text">
          When ready, the body will release and the patient may feel the need to
          move. This can happen spontaneously and without thought. This movement
          can present in many ways, something like a gentle arm raise may be
          experienced or a head turn or differentially a large movement
          involving the whole body as in the need to sit up or turn over or
          contort.
        </p>
        <div className="wide-image-container">
          <img className="wide-treatment-image" src={somato4} />
        </div>
        <p className="treatment-text">
          The therapist supports the movement by neutralising gravity and paying
          attention to the craniosacral rhythm.
        </p>
        <p className="treatment-text">
          When the energy from a cyst is discharged the patient may experience
          the memory of the trauma. Emotions at this point are encouraged,
          either to be spoken or released to enable completion of the expression
          and to discharge the energy.
        </p>
        <p className="treatment-text">
          Patients have discussed different sensations when the release occurs,
          some discuss a warmth or warm feeling, or a pain increasing then
          decreasing until disappearing. Others have confirmed a feeling of a
          release of tension mentally or physically from a body part. These
          sensations may well happen immediately or they could take a few days
          to appear. Many patients have disclosed that during the fourth day
          after a treatment they have a release of some kind.
        </p>
        <p className="treatment-text">
          As with all therapies it is essential to listen to your body after a
          treatment. If you feel the need to nap, do so. Try not to do anything
          too stimulating or active, but whatever you do, please remember to
          drink plenty of fluids to help with the flushing of the body’s toxins
          and if consuming alcohol be aware the feeling of intoxication may be
          intensified.
        </p>
        <p className="treatment-text">
          Disclaimer: this treatment can be highly emotional although not
          necessarily for everyone.
        </p>
      </section>
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

export default Somato;
