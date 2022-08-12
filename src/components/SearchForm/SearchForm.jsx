import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submit } from "redux/catsDetailsSlice";
import sprite from "../../icons/sprite.svg";
import {
  FormWrapper,
  FormLabel,
  FormInput,
  SubmitBtn,
  ReactionLink,
} from "./SearchForm.styled";

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit(e.target.breedName.value));
    navigate("/breeds-search-by-name");
    e.target.reset();
  };

  return (
    <FormWrapper>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ position: "relative" }}
      >
        <FormLabel>Sarch for breeds</FormLabel>

        <FormInput
          id="breedName"
          name="breedName"
          type="text"
          placeholder="Search for breeds by name"
        />
        <SubmitBtn type="submit">
          <svg width="20" height="20">
            <use href={sprite + "#icon-search-no-fill-20"} />
          </svg>
        </SubmitBtn>
      </form>

      <ReactionLink to="/likes">
        <svg width="30" height="30">
          <use href={sprite + "#icon-like-no-fill-30"} />
        </svg>
      </ReactionLink>

      <ReactionLink to="/favourites">
        <svg width="30" height="30">
          <use href={sprite + "#icon-Vector-348-no-fill-Stroke"} />
        </svg>
      </ReactionLink>

      <ReactionLink to="/dislikes">
        <svg width="30" height="30">
          <use href={sprite + "#icon-dislike-no-fill-30"} />
        </svg>
      </ReactionLink>
    </FormWrapper>
  );
};

export default SearchForm;
