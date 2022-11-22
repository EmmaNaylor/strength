import Carousel from "react-bootstrap/Carousel";
import meditation from "../assets/meditation.jpg";
import cranio from "../assets/cranio-2.jpg";
import massage from "../assets/massage.jpg";
import indian from "../assets/indian.jpg";
import lifecoach from "../assets/lifecoach.jpg";
import nutrition from "../assets/nutrition.jpg";
import somato from "../assets/somato.jpg";

function ConditionCarousel() {
  return (
    <Carousel variant="dark" fade>
      <Carousel.Item style={{ padding: "0", margin: "0" }}>
        <img
          className="d-block w-100"
          src={meditation}
          alt="First slide"
          style={{ width: "100%", height: "200px" }}
        />
        <Carousel.Caption className="carousel2">
          <div
            className="backing"
            style={{
              backgroundColor: "rgba(149,169,36,1)",
              borderRadius: "10px",
            }}
          >
            <h3
              className="treatment-carousel-item"
              style={{ fontSize: "15px" }}
            >
              Meditation Classes
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cranio}
          alt="Second slide"
          style={{ width: "100%", height: "200px" }}
        />

        <Carousel.Caption className="carousel2">
          <div
            className="backing"
            style={{
              backgroundColor: "rgba(149,169,36,1)",
              borderRadius: "10px",
            }}
          >
            <h3
              className="treatment-carousel-item"
              style={{ fontSize: "15px" }}
            >
              Reiki and Seichem Healing
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={massage}
          alt="Third slide"
          style={{ width: "100%", height: "200px" }}
        />

        <Carousel.Caption className="carousel2">
          <div
            className="backing"
            style={{
              backgroundColor: "rgba(149,169,36,1)",
              borderRadius: "10px",
            }}
          >
            <h3
              className="treatment-carousel-item"
              style={{ fontSize: "15px" }}
            >
              Massage Therapy
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={meditation}
          alt="First slide"
          style={{ width: "100%", height: "200px" }}
        />
        <Carousel.Caption className="carousel2">
          <div
            className="backing"
            style={{
              backgroundColor: "rgba(149,169,36,1)",
              borderRadius: "10px",
            }}
          >
            <h3
              className="treatment-carousel-item"
              style={{ fontSize: "15px" }}
            >
              Indian Head Massage
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={indian}
          alt="First slide"
          style={{ width: "100%", height: "200px" }}
        />
        <Carousel.Caption className="carousel2">
          <div
            className="backing"
            style={{
              backgroundColor: "rgba(149,169,36,1)",
              borderRadius: "10px",
            }}
          >
            <h3
              className="treatment-carousel-item"
              style={{ fontSize: "15px" }}
            >
              Health and Wellness
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lifecoach}
          alt="First slide"
          style={{ width: "100%", height: "200px" }}
        />
        <Carousel.Caption className="carousel2">
          <div
            className="backing"
            style={{
              backgroundColor: "rgba(149,169,36,1)",
              borderRadius: "10px",
            }}
          >
            <h3
              className="treatment-carousel-item"
              style={{ fontSize: "15px" }}
            >
              Craniosacral Therapy
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nutrition}
          alt="First slide"
          style={{ width: "100%", height: "200px" }}
        />
        <Carousel.Caption className="carousel2">
          <div
            className="backing"
            style={{
              backgroundColor: "rgba(149,169,36,1)",
              borderRadius: "10px",
            }}
          >
            <h3
              className="treatment-carousel-item"
              style={{ fontSize: "15px" }}
            >
              Nutritional Therapy
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={somato}
          alt="First slide"
          style={{ width: "100%", height: "200px" }}
        />
        <Carousel.Caption className="carousel2">
          <div
            className="backing"
            style={{
              backgroundColor: "rgba(149,169,36,1)",
              borderRadius: "10px",
            }}
          >
            <h3
              className="treatment-carousel-item"
              style={{ fontSize: "15px" }}
            >
              Somato Emotional Release
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ConditionCarousel;
