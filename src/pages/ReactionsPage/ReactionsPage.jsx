import { useLocation, useNavigate } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import Gallery from 'components/Gallery';
import { useGetUserVotesQuery } from 'redux/catsApi';
import {
  PagesWrapper,
  PagesPositioningWrapper,
} from '../../constants/common-styles';

const LikesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: votes, isSuccess } = useGetUserVotesQuery('user');
  console.log('votes', votes);

  // const {data: image} = useGetImagesQuery("MjAxNTU5MA");
  // console.log('image', image);

  const btnText = location.pathname === '/likes' ? 'Likes' : 'Dislikes';

  return (
    <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
        <button onClick={() => navigate('/voting')}>Go back</button>
        <button>{btnText}</button>
        {isSuccess && location.pathname === '/likes' && (
          <Gallery items={votes.filter(vote => vote.value === 1)} />
        )}
        {isSuccess && location.pathname === '/dislikes' && (
          <Gallery items={votes.filter(vote => vote.value === 0)} />
        )}
      </PagesWrapper>
    </PagesPositioningWrapper>
  );
};

export default LikesPage;
