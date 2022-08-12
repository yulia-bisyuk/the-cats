import { useState } from "react";
import SearchForm from "components/SearchForm";
import Gallery from "components/Gallery";
import GoBackGroup from "components/GoBackGroup";
import ClipLoader from "react-spinners/ClipLoader";
import { LoaderWrapper } from "pages/VotingPage/VotingPage.styled";
import { DropdownIcon } from "pages/GalleryPage/GalleryPage.styled";
import {
  PagesWrapper,
  PagesContentWrapper,
} from "../../constants/common-styles";
import { useGetAllBreedsQuery, useGetImagesForBreedQuery } from "redux/catsApi";
import sprite from "../../icons/sprite.svg";
import {
  SelectsWrapper,
  FieldWrapper,
  SortButton,
  SelectField,
  LimitField,
} from "./BreedsPage.styled";
import { useEffect } from "react";

const BreedsPage = () => {
  const [breedId, setBreedId] = useState("all");
  const [limit, setLimit] = useState(5);
  const [breedsOptions, setBreedsOptions] = useState([]);
  const [imagesForAllBreeds, setImagesForAllBreeds] = useState([]);
  const [imagesToRender, setImagesToRender] = useState([]);

  const {
    data: breeds,
    isSuccess,
    isFetching,
    isLoading,
  } = useGetAllBreedsQuery();
  const {
    data: imagesForOneBreed,
    isLoading: loading,
    isFetching: fetching,
  } = useGetImagesForBreedQuery({ id: breedId, limit: limit });

  useEffect(() => {
    if (isSuccess)
      setImagesForAllBreeds(
        breeds
          // eslint-disable-next-line
          .map((breed) => {
            if (breed.image !== undefined) {
              return {
                breeds: [{ ...breed }],
                url: breed.image.url,
                id: breed.image.id,
              };
            }
          })
          .sort(() => Math.random() - 0.5)
          .filter((image) => image !== undefined)
          .slice(0, limit)
      );
  }, [isSuccess, breeds, limit]);

  useEffect(() => {
    if (breeds !== [] && isSuccess)
      setBreedsOptions(
        [{ id: "all", name: "All breeds" }].concat(
          breeds.map((breed) => ({ id: breed.id, name: breed.name }))
        )
      );
  }, [breeds, isSuccess]);

  useEffect(() => {
    if (isSuccess)
      setImagesToRender(
        breedId === "all" ? imagesForAllBreeds : imagesForOneBreed
      );
  }, [isSuccess, imagesForAllBreeds, imagesForOneBreed, breedId]);

  const handleAlphabeticSort = () => {
    setImagesForAllBreeds((prevImages) =>
      [...prevImages].sort((a, b) =>
        a.breeds[0].name.localeCompare(b.breeds[0].name)
      )
    );
  };

  const handleRevertAlphabeticSort = () => {
    setImagesForAllBreeds((prevImages) =>
      [...prevImages].sort((a, b) =>
        b.breeds[0].name.localeCompare(a.breeds[0].name)
      )
    );
  };

  return (
    <PagesWrapper>
      <SearchForm />
      <PagesContentWrapper>
        <SelectsWrapper>
          <GoBackGroup text="breeds" />
          <FieldWrapper>
            <SelectField onChange={(e) => setBreedId(e.target.value)}>
              {breedsOptions.map((option) => (
                <option key={option.id} value={option.id} label={option.name}>
                  {option.name}
                </option>
              ))}
            </SelectField>
            <DropdownIcon width="12" height="12">
              <use href={sprite + "#icon-dropdown-12"} />
            </DropdownIcon>
          </FieldWrapper>
          <FieldWrapper>
            <LimitField onChange={(e) => setLimit(e.target.value)}>
              <option value={5}>Limit: 5</option>
              <option value={10}>Limit: 10</option>
              <option value={15}>Limit: 15</option>
              <option value={20}>Limit: 20</option>
            </LimitField>
            <DropdownIcon width="12" height="12">
              <use href={sprite + "#icon-dropdown-12"} />
            </DropdownIcon>
          </FieldWrapper>
          <SortButton onClick={handleAlphabeticSort}>
            <svg width="20" height="20">
              <use href={sprite + "#icon-sort-20"} />
            </svg>
          </SortButton>
          <SortButton onClick={handleRevertAlphabeticSort}>
            <svg width="20" height="20">
              <use href={sprite + "#icon-sort-revert-20"} />
            </svg>
          </SortButton>
        </SelectsWrapper>

        {isLoading || isFetching || fetching || loading ? (
          <LoaderWrapper>
            <ClipLoader color="#FF868E" size="100px" />
          </LoaderWrapper>
        ) : (
          <Gallery items={imagesToRender} />
        )}
      </PagesContentWrapper>
    </PagesWrapper>
  );
};

export default BreedsPage;
