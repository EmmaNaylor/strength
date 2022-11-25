import Carousel from "react-bootstrap/Carousel";
import meditation from "../assets/meditation.jpg";
import cranio from "../assets/cranio_2.jpg";
import reiki from "../assets/reiki-1.jpg";
import massage from "../assets/massage.jpg";
import indian from "../assets/indian.jpg";
import lifecoach from "../assets/lifecoach.jpg";
import nutrition from "../assets/nutrition.jpg";
import somato from "../assets/somato.jpg";
import "../styles/conditions.css";

function ConditionCarousel() {
  return (
    <div className="carousel-wrapper">
    <Carousel variant="dark" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={meditation} alt="First slide" />
        <Carousel.Caption>
          <div className="backing">
            <h3 className="treatment-carousel-item">Meditation Classes</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={cranio} alt="Second slide" />
        <Carousel.Caption>
          <div className="backing">
            <h3 className="treatment-carousel-item">
              Reiki and Seichem Healing
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={massage} alt="Third slide" />

        <Carousel.Caption>
          <div className="backing">
            <h3 className="treatment-carousel-item">Massage Therapy</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={indian} alt="First slide" />
        <Carousel.Caption>
          <div className="backing">
            <h3 className="treatment-carousel-item">Indian Head Massage</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={lifecoach} alt="First slide" />
        <Carousel.Caption>
          <div className="backing">
            <h3 className="treatment-carousel-item">Health and Wellness</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cranio} alt="First slide" />
        <Carousel.Caption>
          <div className="backing">
            <h3 className="treatment-carousel-item">Craniosacral Therapy</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={nutrition} alt="First slide" />
        <Carousel.Caption>
          <div className="backing">
            <h3 className="treatment-carousel-item">Nutritional Therapy</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={somato} alt="First slide" />
        <Carousel.Caption>
          <div className="backing">
            <h3 className="treatment-carousel-item">
              Somato Emotional Release
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ConditionCarousel;
