import { BackgroundRectangle, HomePageImg } from "./HomePage.styled";
import img from "../images/girl-and-pet.png";

const HomePage = () => {
  return (
    <div>
      <BackgroundRectangle>
        <HomePageImg src={img} alt="flying girl and pet" />
      </BackgroundRectangle>
    </div>
  );
};

export default HomePage;
