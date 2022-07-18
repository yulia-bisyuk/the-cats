import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  PagesWrapper,
  PagesPositioningWrapper,
} from '../../constants/common-styles';
import SearchForm from 'components/SearchForm';
import GoBackGroup from 'components/GoBackGroup';
import Gallery from 'components/Gallery';
import {BreedNotification, Breed} from './SearchForBreedsPage.styled';
import { LoaderWrapper } from 'pages/VotingPage/VotingPage.styled';
import {getBreedRequestValue } from '../../redux/catsDetailsSlice';
import { useGetBreedByNameQuery, useGetImagesForBreedQuery } from 'redux/catsApi';

const SearchForBreedsPage = () => {
const request = useSelector(getBreedRequestValue);


const {data: breed, isSuccess } = useGetBreedByNameQuery(request, { skip: request === '' });
// const {data: images, isSuccess, isLoading} = useGetImagesForBreedQuery('asho', 'braz');



let breedId;

if(isSuccess && breed.length !== 0) {breedId = breed[0].id;
}

console.log('breed', breed);


const {data: images, isLoading } = useGetImagesForBreedQuery(breedId);



    
     console.log('images', images);


    return(<PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
        <GoBackGroup btnText="search" />
        {request && <BreedNotification>Search results for: <Breed>{request}</Breed></BreedNotification>}
        {/* <img alt='' src={image[0].url} /> */}
        {isLoading &&  <LoaderWrapper>
            <ClipLoader color="#FF868E" size="100px" />
          </LoaderWrapper>}
      {isSuccess && <Gallery items={images} />}
      </PagesWrapper>
    </PagesPositioningWrapper>

    )
};

export default SearchForBreedsPage;