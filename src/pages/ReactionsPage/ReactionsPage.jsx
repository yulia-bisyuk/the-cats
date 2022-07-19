import { useLocation } from "react-router-dom";
import SearchForm from "components/SearchForm";
import Gallery from "components/Gallery";
import GoBackGroup from "components/GoBackGroup";
import {
  PagesWrapper,
  PagesPositioningWrapper,
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

  const btnText = location.pathname === "/likes" ? "Likes" : "Dislikes";

  return (
    <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
        <GoBackGroup btnText={btnText} />
        {location.pathname === "/likes" && <Gallery items={likes} />}
        {location.pathname === "/dislikes" && <Gallery items={dislikes} />}
      </PagesWrapper>
    </PagesPositioningWrapper>
  );
};

export default LikesPage;
