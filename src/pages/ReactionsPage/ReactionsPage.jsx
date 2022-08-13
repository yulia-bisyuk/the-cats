import { useLocation } from "react-router-dom";
import SearchForm from "components/SearchForm";
import Gallery from "components/Gallery";
import GoBackGroup from "components/GoBackGroup";
import {
  PagesWrapper,
  PagesContentWrapper,
} from "../../constants/common-styles";
import {
  getLikedImagesValue,
  getDislikedImagesValue,
} from "redux/catsDetailsSlice";
import { useSelector } from "react-redux";

const LikesPage = () => {
  const location = useLocation();
  const likes = useSelector(getLikedImagesValue);
  const dislikes = useSelector(getDislikedImagesValue);
  const text = location.pathname === "/likes" ? "Likes" : "Dislikes";

  return (
    <PagesWrapper>
      <SearchForm />
      <PagesContentWrapper>
        <GoBackGroup text={text} />
        {location.pathname === "/likes" && <Gallery items={likes} />}
        {location.pathname === "/dislikes" && <Gallery items={dislikes} />}
      </PagesContentWrapper>
    </PagesWrapper>
  );
};

export default LikesPage;
