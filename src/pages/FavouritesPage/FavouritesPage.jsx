import SearchForm from "components/SearchForm";
import GoBackGroup from "components/GoBackGroup";
import Gallery from "components/Gallery";
import ClipLoader from "react-spinners/ClipLoader";
import {
  PagesWrapper,
  PagesContentWrapper,
} from "../../constants/common-styles";
import { useGetUserFavouritesQuery } from "redux/catsApi";
import { LoaderWrapper } from "./FavouritesPage.styled";

const FavouritesPage = () => {
  const {
    data: favourites,
    isSuccess,
    isLoading,
  } = useGetUserFavouritesQuery("user");

  return (
    <PagesWrapper>
      <SearchForm />
      <PagesContentWrapper>
        <GoBackGroup text="favourites" />
        {isLoading && (
          <LoaderWrapper>
            <ClipLoader color="#FF868E" size="100px" />
          </LoaderWrapper>
        )}
        {isSuccess && <Gallery items={favourites} />}
      </PagesContentWrapper>
    </PagesWrapper>
  );
};

export default FavouritesPage;
