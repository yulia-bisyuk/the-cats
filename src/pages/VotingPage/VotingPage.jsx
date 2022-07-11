import SearchForm from "components/SearchForm";
import dummy from '../images/upload-bg.png';
import ClipLoader from "react-spinners/ClipLoader";
import { useAddToFavouritesMutation, useFetchRandomCatQuery, useVotingMutation } from "redux/catsApi";
import {PagesWrapper,  PagesPositioningWrapper} from '../../constants/common-styles';
import { LoaderWrapper } from "./VotingPage.styled";

const VotingPage =() => {
const {data: cat, isSuccess, isFetching} = useFetchRandomCatQuery();
const [vote] = useVotingMutation();
const [add] = useAddToFavouritesMutation();
console.log(cat);

const url = isSuccess ? cat[0].url : dummy;

const positive = isSuccess ? JSON.stringify({
    image_id: cat[0].id, 
    value: 1 
}) : null;
console.log(positive);
// const negative = JSON.stringify({
//     image_id: cat[0].id, 
//     value: 0
// });



    // console.log('VotingPage fetchResult', cat[0].url);

    return(
<PagesPositioningWrapper>
       <SearchForm />
        <PagesWrapper>
<button>Go back</button>
<button onClick={() => window.location.reload(false)}>Voting</button>
{isFetching ? 
<LoaderWrapper><ClipLoader color='#FF868E' size='60px'/></LoaderWrapper> 
    : <img src={url} alt="random cat" width="640px" height="360px"/>}
    {
        isSuccess && <div>
        <button onClick={() => vote({"image_id":`${cat[0].id}`,"value":1})}>Like</button>
        <button onClick={() => add({"image_id":`${cat[0].id}`})}>Favourites</button>
        <button onClick={() => vote({"image_id":`${cat[0].id}`,"value":0})}>Dislike</button>
    </div>
    }
    

        </PagesWrapper>
        </PagesPositioningWrapper>
      
    )
};

export default VotingPage;