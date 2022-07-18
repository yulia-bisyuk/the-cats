import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { submit } from 'redux/catsDetailsSlice';
import sprite from '../../icons/sprite.svg';
import {
  FormWrapper,
  FormLabel,
  FormInput,
  SubmitBtn,
  ReactionLink,
} from './SearchForm.styled';

const SearchForm = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit(e.target.breedName.value));
    navigate('/breeds-search-by-name')
    e.target.reset();
  };
  
  return (
    <FormWrapper>

          <form 
          autoComplete='off'
          onSubmit={handleSubmit}>
            <FormLabel>Sarch for breeds</FormLabel>
            
          <FormInput
              id="breedName"
              name="breedName"
              type="text"
              placeholder="Search for breeds by name"
             
           / >
            <SubmitBtn type="submit">
              <svg width="20" height="20">
                <use href={sprite + '#icon-search-20'} />
              </svg>
            </SubmitBtn>
           
            
          </form>
      
      <ReactionLink to="/likes">
        {location.pathname === "/likes" ? <svg width="30" height="30">
          <use href={sprite + '#icon-like-white-30'} />
        </svg> : <svg width="30" height="30">
          <use href={sprite + '#icon-like-30'} />
        </svg>}
        
      </ReactionLink>

      <ReactionLink to="/favourites">
        {location.pathname === "/favourites" ? <svg width="30" height="30">
          <use href={sprite + '#icon-Vector-348-white-Stroke'} />
        </svg> : <svg width="30" height="30">
          <use href={sprite + '#icon-Vector-348-Stroke'} />
        </svg>}
      </ReactionLink>

      <ReactionLink to="/dislikes">
        {location.pathname === "/dislikes" ? <svg width="30" height="30">
          <use href={sprite + '#icon-dislike-white-30'} />
        </svg> : <svg width="30" height="30">
          <use href={sprite + '#icon-dislike-30'} />
        </svg>}
        
      </ReactionLink>
    </FormWrapper>
  );
};

export default SearchForm;
