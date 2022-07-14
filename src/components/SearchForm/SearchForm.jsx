import { Formik } from 'formik';
import sprite from '../../icons/sprite.svg';
import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormField,
  SubmitBtn,
  ReactionLink,
} from './SearchForm.styled';

const SearchForm = ({ formSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    formSubmit(values);
    resetForm();
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={{ breedName: '' }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {formik => (
          <FormField onSubmit={formik.handleSubmit}>
            <FormLabel htmlFor="breedName">Sarch for breeds</FormLabel>
            <FormInput
              id="breedName"
              name="breedName"
              type="text"
              placeholder="Search for breeds by name"
              {...formik.getFieldProps('breedName')}
            />
            <SubmitBtn type="submit">
              <svg width="20" height="20">
                <use href={sprite + '#icon-search-20'} />
              </svg>
            </SubmitBtn>

            {/* {formik.touched.breedName && formik.errors.breedName ? (
              <ErrorMessage>{formik.errors.breedName}</ErrorMessage>
            ) : null} */}
          </FormField>
        )}
      </Formik>
      <ReactionLink to="/likes">
        <svg width="30" height="30">
          <use href={sprite + '#icon-like-30'} />
        </svg>
      </ReactionLink>

      <ReactionLink to="/favourites">
        <svg width="30" height="30">
          <use href={sprite + '#icon-Vector-348-Stroke'} />
        </svg>
      </ReactionLink>

      <ReactionLink to="/dislikes">
        <svg width="30" height="30">
          <use href={sprite + '#icon-dislike-30'} />
        </svg>
      </ReactionLink>
    </FormWrapper>
  );
};

export default SearchForm;
