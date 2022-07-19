import {
  BackgroundRectangle,
  HomePageImg,
  HomePageWrapper,
} from "./HomePage.styled";
import img from "../images/girl-and-pet.png";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <BackgroundRectangle>
        <HomePageImg
          src={img}
          alt="flying girl and pet"
          width="775px"
          height="900px"
        />
      </BackgroundRectangle>
    </HomePageWrapper>
  );
};

export default HomePage;
