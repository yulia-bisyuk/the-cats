import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchForm from "components/SearchForm";
import GoBackGroup from "components/GoBackGroup";
import { Logger } from "../../components/Logger/Logger";
import dummy from "../images/upload-bg.png";
import sprite from "../../icons/sprite.svg";
import ClipLoader from "react-spinners/ClipLoader";
import {
  useAddToFavouritesMutation,
  useFetchRandomCatQuery,
  useVotingMutation,
} from "redux/catsApi";
import {
  PagesWrapper,
  PagesContentWrapper,
  LoaderWrapper,
} from "../../constants/common-styles";
import {
  ImageToVote,
  ButtonsWrapper,
  ButtonIcon,
  ButtonLike,
  ButtonFav,
  ButtonDislike,
} from "./VotingPage.styled";
import {
  getLikedImages,
  getDislikedImages,
} from "../../redux/catsDetailsSlice";

const VotingPage = () => {
  const dispatch = useDispatch();
  const { data: cat, isSuccess, isFetching } = useFetchRandomCatQuery();
  const [vote] = useVotingMutation();
  const [add] = useAddToFavouritesMutation();
  const [activities, setActivities] = useState(
    JSON.parse(window.localStorage.getItem("activities")) || []
  );
  const url = isSuccess ? cat[0].url : dummy;

  const activityLogger = (id, type) => {
    const date = new Date().toTimeString().slice(0, 5);

    setActivities((prevState) => [
      ...prevState,
      { imageId: id, type: type, time: date },
    ]);
  };

  useEffect(() => {
    window.localStorage.setItem("activities", JSON.stringify(activities));
    if (activities.length > 20) window.localStorage.clear();
  }, [activities]);

  return (
    <PagesWrapper>
      <SearchForm />
      <PagesContentWrapper>
        <GoBackGroup text="voting" />
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
                vote({ image_id: `${cat[0].id}`, value: 1, sub_id: "user" });
                activityLogger(`${cat[0].id}`, "Likes");
                dispatch(getLikedImages(cat[0].url));
              }}
            >
              <ButtonIcon width="22" height="22">
                <use href={sprite + "#icon-like-no-fill-30"} />
              </ButtonIcon>
            </ButtonLike>
            <ButtonFav
              onClick={() => {
                add({ image_id: `${cat[0].id}`, sub_id: "user" });
                activityLogger(`${cat[0].id}`, "Favourites");
              }}
            >
              <ButtonIcon width="22" height="22">
                <use href={sprite + "#icon-Vector-348-no-fill-Stroke"} />
              </ButtonIcon>
            </ButtonFav>
            <ButtonDislike
              onClick={() => {
                vote({ image_id: `${cat[0].id}`, value: 0, sub_id: "user" });
                activityLogger(`${cat[0].id}`, "Dislike");
                dispatch(getDislikedImages(cat[0].url));
              }}
            >
              <ButtonIcon width="22" height="22">
                <use href={sprite + "#icon-dislike-no-fill-30 "} />
              </ButtonIcon>
            </ButtonDislike>
          </ButtonsWrapper>
        )}
        {activities !== [] && (
          <Logger activities={activities} text="was added to" />
        )}
      </PagesContentWrapper>
    </PagesWrapper>
  );
};

export default VotingPage;
