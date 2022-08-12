import {
  PagesWrapper,
  PagesContentWrapper,
} from "../../constants/common-styles";
import SearchForm from "components/SearchForm";
import GoBackGroup from "components/GoBackGroup";
import { BreedDetails } from "./BreedDetails";
import {
  BreedId,
  Wrapper,
  BreedInfoWrapper,
  BreedTitle,
  TitleWrapper,
  BreedFor,
} from "./BreedInfoPage.styled";
import { ImageToVote } from "pages/VotingPage/VotingPage.styled";
import { useGetImagesForBreedQuery } from "redux/catsApi";
import { renderDotControls } from "./Slider";
import Carousel from "nuka-carousel";
import ClipLoader from "react-spinners/ClipLoader";
import { LoaderWrapper } from "pages/VotingPage/VotingPage.styled";

const BreedInfoPage = () => {
  const selectedBreed = JSON.parse(localStorage.getItem("selectedBreed"));
  const {
    data: imagesForOneBreed,
    isSuccess,
    isLoading,
  } = useGetImagesForBreedQuery({ id: selectedBreed.id, limit: 5 });

  if (isSuccess) console.log("imagesForOneBreed", imagesForOneBreed);

  return (
    <PagesWrapper>
      <SearchForm />
      <PagesContentWrapper>
        <Wrapper>
          <GoBackGroup text="breeds" />
          <BreedId>{selectedBreed.id}</BreedId>
        </Wrapper>
        {isLoading && (
          <LoaderWrapper>
            <ClipLoader color="#FF868E" size="100px" />
          </LoaderWrapper>
        )}

        <Carousel
          wrapAround={true}
          slidesToShow={1}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderBottomCenterControls={(props) => renderDotControls(props)}
        >
          {isSuccess &&
            imagesForOneBreed.map((image, index) => (
              <ImageToVote
                width="640px"
                height="360px"
                alt=""
                src={image.url}
                key={index}
              />
            ))}
        </Carousel>
        <BreedInfoWrapper>
          <TitleWrapper>
            <BreedTitle>{selectedBreed.name}</BreedTitle>
          </TitleWrapper>
          <BreedFor>{selectedBreed.description}</BreedFor>
          <BreedDetails breed={selectedBreed} />
        </BreedInfoWrapper>
      </PagesContentWrapper>
    </PagesWrapper>
  );
};

export default BreedInfoPage;
