import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import { submit } from "redux/catsDetailsSlice";
import MobileMenu from "components/MobileMenu/MobileMenu";
import sprite from "../../icons/sprite.svg";
import {
  FormWrapper,
  BurgerBtn,
  Form,
  FormLabel,
  FormInput,
  SubmitBtn,
  LinksWrap,
  ReactionLink,
} from "./SearchForm.styled";

const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit(e.target.breedName.value));
    navigate("/breeds-search-by-name");
    e.target.reset();
  };

  return (
    <>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      {isMobile ? (
        <FormWrapper>
          <BurgerBtn onClick={(e) => setIsOpen(true)}>
            <svg width="30" height="30">
              <use href={sprite + "#icon-burger"} />
            </svg>
          </BurgerBtn>
          <LinksWrap>
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
          </LinksWrap>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <FormLabel>Search for breeds</FormLabel>

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
          </Form>
        </FormWrapper>
      ) : (
        <FormWrapper>
          <BurgerBtn onClick={(e) => setIsOpen(true)}>
            <svg width="30" height="30">
              <use href={sprite + "#icon-burger"} />
            </svg>
          </BurgerBtn>

          <Form autoComplete="off" onSubmit={handleSubmit}>
            <FormLabel>Search for breeds</FormLabel>

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
          </Form>
          <LinksWrap>
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
          </LinksWrap>
        </FormWrapper>
      )}
    </>
  );
};

export default SearchForm;
