import SearchForm from 'components/SearchForm';
import GoBackGroup from 'components/GoBackGroup';
import Gallery from 'components/Gallery';
import {
  PagesWrapper,
  PagesPositioningWrapper,
} from '../../constants/common-styles';
import { useGetUserFavouritesQuery } from 'redux/catsApi';
import { useNavigate } from 'react-router-dom';

const FavouritesPage = () => {
  const { data: favourites, isSuccess } = useGetUserFavouritesQuery('user');

  return (
    <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
        <GoBackGroup btnText="favourites" />
        {isSuccess && <Gallery items={favourites} />}
      </PagesWrapper>
    </PagesPositioningWrapper>
  );
};

export default FavouritesPage;
