import { BackgroundRectangle, HomePageImg } from "./HomePage.styled";
import img from "../images/girl-and-pet.png";

const HomePage = () => {
  return (
    <BackgroundRectangle>
      <HomePageImg src={img} alt="flying girl and pet" />
    </BackgroundRectangle>
  );
};

export default HomePage;
