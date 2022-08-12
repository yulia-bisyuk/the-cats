import { useLocation } from "react-router-dom";
import SearchForm from "components/SearchForm";
import Gallery from "components/Gallery";
import GoBackGroup from "components/GoBackGroup";
import {
  PagesWrapper,
  PagesContentWrapper,
} from "../../constants/common-styles";
import {
  getLikedImageslValue,
  getDislikedImageslValue,
} from "redux/catsDetailsSlice";
import { useSelector } from "react-redux";

const LikesPage = () => {
  const location = useLocation();
  const likes = useSelector(getLikedImageslValue);
  const dislikes = useSelector(getDislikedImageslValue);
  console.log("imageUrl", likes);

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
