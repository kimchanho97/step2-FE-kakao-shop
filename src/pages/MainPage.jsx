import MainCarousel from "../components/main/molecules/MainCarousel";
import MainProductTemplate from "../components/main/templates/MainProductTemplate";
import carouselImage1 from "../assets/carouselItems/carouselItem1.jpeg";
import carouselImage2 from "../assets/carouselItems/carouselItem2.jpeg";
import carouselImage3 from "../assets/carouselItems/carouselItem3.jpeg";
import image1 from "../assets/images/1.jpg";

const CAROUSEL_IMAGES = [carouselImage1, carouselImage2, carouselImage3];

export default function HomePage() {
  return (
    <div>
      <MainCarousel images={CAROUSEL_IMAGES} />
      <MainProductTemplate />
    </div>
  );
}
