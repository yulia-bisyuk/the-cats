import SearchForm from "components/SearchForm";
import GoBackGroup from "components/GoBackGroup";
import Gallery from "components/Gallery";
import ClipLoader from "react-spinners/ClipLoader";
import {
  PagesWrapper,
  PagesPositioningWrapper,
} from "../../constants/common-styles";
import { useGetUserFavouritesQuery } from "redux/catsApi";
import { LoaderWrapper } from "./FavouritesPage.styled";

const FavouritesPage = () => {
  const {
    data: favourites,
    isSuccess,
    isLoading,
  } = useGetUserFavouritesQuery("user");

  if (isSuccess) console.log("favourites", favourites);

  return (
    <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
        <GoBackGroup btnText="favourites" />
        {isLoading && (
          <LoaderWrapper>
            <ClipLoader color="#FF868E" size="100px" />
          </LoaderWrapper>
        )}
        {isSuccess && <Gallery items={favourites} />}
      </PagesWrapper>
    </PagesPositioningWrapper>
  );
};

export default FavouritesPage;
