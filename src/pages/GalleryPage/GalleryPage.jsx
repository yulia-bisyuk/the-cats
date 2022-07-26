import { useEffect, useState } from "react";
import { useGetAllBreedsQuery, useGetAllImagesQuery } from "redux/catsApi";
import SearchForm from "components/SearchForm";
import Gallery from "components/Gallery";
import sprite from "../../icons/sprite.svg";
import ClipLoader from "react-spinners/ClipLoader";
import { LoaderWrapper } from "pages/VotingPage/VotingPage.styled";
import {
  PagesWrapper,
  PagesPositioningWrapper,
} from "../../constants/common-styles";
import GoBackGroup from "components/GoBackGroup";
import {
  Wrapper,
  UploadButton,
  OptionsSection,
  OptionLabel,
  OptionWrapper,
  UpdateButton,
  OptionSelect,
  OptionSelectStylingWrapper,
  DropdownIcon,
} from "./GalleryPage.styled";
import { orders, types, limits } from "./SelectOptions";

const GalleryPage = () => {
  const {
    data: breeds,
    isSuccess,
    isLoading,
    isFetching,
  } = useGetAllBreedsQuery();
  const [breedsOptions, setBreedsOptions] = useState([]);
  const [order, setOrder] = useState("RANDOM");
  const [type, setType] = useState("All");
  const [breed, setBreed] = useState("none");
  const [limit, setLimit] = useState(5);
  const [imagesToRender, setImagesToRender] = useState([]);
  const {
    data: allImages,
    isSuccess: success,
    isLoading: loading,
    isFetching: fetching,
  } = useGetAllImagesQuery({
    order,
    limit,
  });

  useEffect(() => {
    if (success && type === "All") setImagesToRender(allImages);
    else if (type === "Static")
      setImagesToRender(() =>
        allImages.filter((image) => image.url.endsWith("jpg" || "png"))
      );
    else if (type === "Animated")
      setImagesToRender(() =>
        allImages.filter((image) => image.url.endsWith("gif"))
      );
  }, [type, success, allImages]);

  console.log("imagesToRender", imagesToRender);

  useEffect(() => {
    if (breeds !== [] && isSuccess)
      setBreedsOptions(
        [{ id: "none", name: "None" }].concat(
          breeds.map((breed) => ({ id: breed.id, name: breed.name }))
        )
      );
  }, [breeds, isSuccess]);

  return (
    <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
        <Wrapper>
          <GoBackGroup btnText="gallery" />
          <UploadButton>
            <svg width="16" height="16" style={{ marginRight: "10px" }}>
              <use href={sprite + "#icon-upload-16"} />
            </svg>
            upload
          </UploadButton>
        </Wrapper>

        <OptionsSection>
          <div>
            <OptionLabel htmlFor="orders">Order</OptionLabel>
            <OptionSelectStylingWrapper>
              <OptionSelect
                onChange={(e) => setOrder(e.target.value)}
                id="orders"
              >
                {orders.map((order, i) => (
                  <option key={i} value={order.value}>
                    {order.name}
                  </option>
                ))}
              </OptionSelect>
              <DropdownIcon width="12" height="12">
                <use href={sprite + "#icon-dropdown-12"} />
              </DropdownIcon>
            </OptionSelectStylingWrapper>
          </div>

          <div>
            <OptionLabel htmlFor="types">Type</OptionLabel>
            <OptionSelectStylingWrapper>
              <OptionSelect
                onChange={(e) => setType(e.target.value)}
                id="types"
              >
                {types.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </OptionSelect>
              <DropdownIcon width="12" height="12">
                <use href={sprite + "#icon-dropdown-12"} />
              </DropdownIcon>
            </OptionSelectStylingWrapper>
          </div>

          <div>
            <OptionLabel htmlFor="breeds">Breed</OptionLabel>
            <OptionSelectStylingWrapper>
              <OptionSelect
                onChange={(e) => setBreed(e.target.value)}
                id="breeds"
              >
                {breedsOptions.map((option) => (
                  <option key={option.id} value={option.id} label={option.name}>
                    {option.name}
                  </option>
                ))}
              </OptionSelect>
              <DropdownIcon width="12" height="12">
                <use href={sprite + "#icon-dropdown-12"} />
              </DropdownIcon>
            </OptionSelectStylingWrapper>
          </div>

          <div>
            <OptionLabel htmlFor="limits">Limit</OptionLabel>
            <OptionWrapper>
              <OptionSelectStylingWrapper className="limit">
                <OptionSelect
                  onChange={(e) => setLimit(e.target.value)}
                  id="limits"
                >
                  {limits.map((limit, i) => (
                    <option key={i} value={limit}>
                      {limit} items per page
                    </option>
                  ))}
                </OptionSelect>
                <DropdownIcon width="12" height="12">
                  <use href={sprite + "#icon-dropdown-12"} />
                </DropdownIcon>
              </OptionSelectStylingWrapper>
              <UpdateButton>
                <svg width="17" height="20">
                  <use href={sprite + "#icon-update-20"} />
                </svg>
              </UpdateButton>
            </OptionWrapper>
          </div>
        </OptionsSection>
        {isLoading || loading || isFetching || fetching ? (
          <LoaderWrapper>
            <ClipLoader color="#FF868E" size="100px" />
          </LoaderWrapper>
        ) : (
          <Gallery items={imagesToRender} />
        )}
      </PagesWrapper>
    </PagesPositioningWrapper>
  );
};

export default GalleryPage;
