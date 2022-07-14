import SearchForm from 'components/SearchForm';
import GoBackGroup from 'components/GoBackGroup';
import { Logger } from './Logger/Logger';
import dummy from '../images/upload-bg.png';
import sprite from '../../icons/sprite.svg';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  useAddToFavouritesMutation,
  useFetchRandomCatQuery,
  useVotingMutation,
} from 'redux/catsApi';
import {
  PagesWrapper,
  PagesPositioningWrapper,
} from '../../constants/common-styles';
import {
  LoaderWrapper,
  ImageToVote,
  ButtonsWrapper,
  ButtonLike,
  ButtonFav,
  ButtonDislike,
} from './VotingPage.styled';
import { useState } from 'react';

const VotingPage = () => {
  const { data: cat, isSuccess, isFetching } = useFetchRandomCatQuery();
  const [vote] = useVotingMutation();
  const [add] = useAddToFavouritesMutation();
  const [activities, setActivities] = useState([]);

  const url = isSuccess ? cat[0].url : dummy;

  const activityLogger = (id, type) => {
    const date = new Date().toTimeString().slice(0, 5);

    setActivities(prevState => [
      ...prevState,
      { imageId: id, type: type, time: date },
    ]);
    console.log('activity', activities);
  };

  return (
    <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
        <GoBackGroup btnText="voting" />
        {isFetching ? (
          <LoaderWrapper>
            <ClipLoader color="#FF868E" size="60px" />
          </LoaderWrapper>
        ) : (
          <ImageToVote
            src={url}
            alt="random cat"
            width="640px"
            height="360px"
          />
        )}
        {isSuccess && (
          <ButtonsWrapper>
            <ButtonLike
              onClick={() => {
                vote({ image_id: `${cat[0].id}`, value: 1, sub_id: 'user' });
                activityLogger(`${cat[0].id}`, 'Likes');
              }}
            >
              <svg width="30" height="30">
                <use href={sprite + '#icon-like-white-30'} />
              </svg>
            </ButtonLike>
            <ButtonFav
              onClick={() => {
                add({ image_id: `${cat[0].id}`, sub_id: 'user' });
                activityLogger(`${cat[0].id}`, 'Favourites');
              }}
            >
              <svg width="30" height="30">
                <use href={sprite + '#icon-Vector-348-white-Stroke'} />
              </svg>
            </ButtonFav>
            <ButtonDislike
              onClick={() => {
                vote({ image_id: `${cat[0].id}`, value: 0, sub_id: 'user' });
                activityLogger(`${cat[0].id}`, 'Dislike');
              }}
            >
              <svg width="30" height="30">
                <use href={sprite + '#icon-dislike-white-30 '} />
              </svg>
            </ButtonDislike>
          </ButtonsWrapper>
        )}
        {activities !== [] && <Logger activities={activities} />}
      </PagesWrapper>
    </PagesPositioningWrapper>
  );
};

export default VotingPage;
