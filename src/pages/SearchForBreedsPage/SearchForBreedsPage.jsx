import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import {
  PagesWrapper,
  PagesPositioningWrapper,
} from "../../constants/common-styles";
import SearchForm from "components/SearchForm";
import GoBackGroup from "components/GoBackGroup";
import Gallery from "components/Gallery";
import { BreedNotification, Breed } from "./SearchForBreedsPage.styled";
import { LoaderWrapper } from "pages/VotingPage/VotingPage.styled";
import { getBreedRequestValue } from "../../redux/catsDetailsSlice";
import {
  useGetBreedByNameQuery,
  useGetImagesForBreedQuery,
} from "redux/catsApi";

const SearchForBreedsPage = () => {
  const request = useSelector(getBreedRequestValue);
  const [breedId, setBreedId] = useState(null);

  const { data: breed, isSuccess } = useGetBreedByNameQuery(request, {
    skip: request === "",
  });

  useEffect(() => {
    if(breed && breed.length !== 0) setBreedId(breed[0].id);
  }, [ isSuccess, breed ]);

   const { data: images, isLoading } = useGetImagesForBreedQuery({id: breedId, limit: 5});

  //  console.log('imagesFromSearchForBreedsPage', images)

  return (
    <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
        <GoBackGroup btnText="search" />
        {request && (
          <BreedNotification>
            Search results for: <Breed>{request}</Breed>
          </BreedNotification>
        )}
        {isLoading && (
          <LoaderWrapper>
            <ClipLoader color="#FF868E" size="100px" />
          </LoaderWrapper>
        )}
        {isSuccess && <Gallery items={images} />}
      </PagesWrapper>
    </PagesPositioningWrapper>
  );
};

export default SearchForBreedsPage;
