import {
  PagesWrapper,
  PagesPositioningWrapper,
} from "../../constants/common-styles";
import SearchForm from "components/SearchForm";
import GoBackGroup from "components/GoBackGroup";
import { BreedDetails } from "./BreedDetails";
import { BreedId, Wrapper, BreedInfoWrapper, BreedTitle, TitleWrapper, BreedFor } from "./BreedInfoPage.styled";
import { ImageToVote } from "pages/VotingPage/VotingPage.styled";
import { useGetBreedByIdQuery } from "redux/catsApi";
import { renderDotControls } from "./Slider";
import Carousel from 'nuka-carousel';


const BreedInfoPage = () => {
const selectedBreed = JSON.parse(localStorage.getItem('selectedBreed'));
const selectedBreedImages = JSON.parse(localStorage.getItem('selectedBreedImages'));

console.log('selectedBreed', selectedBreed);
console.log('selectedBreedImages', selectedBreedImages);

const {data: breed, isSuccess} = useGetBreedByIdQuery(selectedBreed.id)
 if(isSuccess) console.log('selectedBreedAPI', breed);




    return(
       <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
        <Wrapper>
        <GoBackGroup btnText="breeds" />
        <BreedId>{selectedBreed.id}</BreedId>
        </Wrapper>

        <Carousel
    wrapAround={true}
    slidesToShow={1}
    renderCenterLeftControls={null}
    renderCenterRightControls={null}
    renderBottomCenterControls={props => renderDotControls(props)}
  >
    {selectedBreedImages.map((image, index) => <ImageToVote width='640px'
    height='360px' alt='' src={image.url} key={index}/>)}
  </Carousel> 


       <BreedInfoWrapper>
       <TitleWrapper><BreedTitle>{selectedBreed.name}</BreedTitle></TitleWrapper>
       <BreedFor>{selectedBreed.description}</BreedFor>
       <BreedDetails breed={selectedBreed}/>

       </BreedInfoWrapper>
      </PagesWrapper>
    </PagesPositioningWrapper>
    )
};

export default BreedInfoPage;