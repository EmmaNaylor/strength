import Carousel from 'react-bootstrap/Carousel';
import meditation from "../assets/meditation.jpg";
import cranio from "../assets/cranio-2.jpg";
import massage from "../assets/massage.jpg";

function ConditionCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meditation}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Meditation Classes</h3>
                    <p>Jacky provides guided meditation sessions one to one or in groups</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cranio}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Reiki and Seichem Healing</h3>
                    <p>Jacky is a Reiki and Seichem Master and can provide therapeutic sessions of Reiki and Seichem healing to align your body’s energy.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={massage}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Massage Therapy</h3>
                    <p>
                        Fully qualified massage therapist providing massage for relaxation as well as for the relief of low back pain and other pain conditions
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ConditionCarousel;