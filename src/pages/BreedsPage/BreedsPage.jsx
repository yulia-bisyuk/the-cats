import { useState } from "react";
import SearchForm from "components/SearchForm";
import Gallery from "components/Gallery";
import GoBackGroup from "components/GoBackGroup";
import ClipLoader from "react-spinners/ClipLoader";
import { LoaderWrapper } from "pages/VotingPage/VotingPage.styled";
import {
  PagesWrapper,
  PagesPositioningWrapper,
} from "../../constants/common-styles";
import { useGetAllBreedsQuery, useGetImagesForBreedQuery } from "redux/catsApi";
import sprite from '../../icons/sprite.svg';
import { SelectsWrapper, SortButton, SelectField, LimitField } from "./BreedsPage.styled";
import { useEffect } from "react";


const BreedsPage = () => {
    const [breedId, setBreedId] = useState('');
    const [limit, setLimit] = useState(5);
    const [breedsOptions, setBreedsOptions] = useState([]);
    const [imagesForAllBreeds, setImagesForAllBreeds] = useState([]);
    const [imagesToRender, setImagesToRender] = useState([]);
    const [reverse, setReverse] = useState(false);

 const {data: breeds, isSuccess, isFetching, isLoading} = useGetAllBreedsQuery();
const { data: imagesForOneBreed, isLoading: loading, isFetching: fetching } = useGetImagesForBreedQuery({id: breedId, limit: limit});
if(isSuccess) console.log('breeds', breeds);

useEffect(() => {
  // eslint-disable-next-line
  if(isSuccess) setImagesForAllBreeds(breeds.map(breed => 
  {if(breed.image !== undefined) {
return ({name: breed.name, url: breed.image.url})
  }}
).filter(image => image !==undefined).slice(0,limit));
}, [isSuccess, breeds, limit]);

useEffect(() => {
if(breeds !== [] && isSuccess) setBreedsOptions([{id: 'all', name: 'All breeds'}]
.concat(breeds.map(breed => ({id: breed.id, name: breed.name}))));

if(breeds !== [] && isSuccess && reverse) setBreedsOptions([{id: 'all', name: 'All breeds'}]
.concat([...breeds].reverse().map(breed => ({id: breed.id, name: breed.name}))));
}, [breeds, isSuccess, reverse])


useEffect(() => {
  if(isSuccess) setImagesToRender(breedId === 'all' ? imagesForAllBreeds : imagesForOneBreed);
  
}, [isSuccess, imagesForAllBreeds, imagesForOneBreed, breedId])
console.log('imagesToRender', imagesToRender);

    return(
         <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
          <SelectsWrapper>
        <GoBackGroup btnText='breeds' />
 <SelectField  onChange={(e) => setBreedId(e.target.value)}>
  
        {isSuccess && breedsOptions.map(option => 
        <option key={option.id} value={option.id} label={option.name}>{option.name}
        </option>)

         }
          </SelectField>

          <LimitField onChange={(e) => setLimit(e.target.value)}>
              <option value={5} >Limit: 5</option>
              <option value={10}>Limit: 10</option>
              <option value={15}>Limit: 15</option>
              <option value={20}>Limit: 20</option>
          </LimitField>
         <SortButton onClick={() => setReverse(true)}>
             <svg width="20" height="20">
          <use href={sprite + "#icon-sort-20"} />
        </svg>
         </SortButton>
         <SortButton onClick={() => setReverse(false)}>
             <svg width="20" height="20">
          <use href={sprite + "#icon-sort-revert-20"} />
        </svg>
         </SortButton>
</SelectsWrapper>

{(isLoading || isFetching || fetching || loading) ? (
          <LoaderWrapper>
            <ClipLoader color="#FF868E" size="100px" />
          </LoaderWrapper>
        ) : <Gallery items={imagesToRender} />}


      </PagesWrapper>
    </PagesPositioningWrapper>
    )
};

export default BreedsPage;