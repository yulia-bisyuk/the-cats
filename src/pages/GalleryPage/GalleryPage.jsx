import { useEffect, useState } from "react";
import {
  useGetAllBreedsQuery,
  useGetAllImagesQuery,
  useGetImagesForBreedQuery,
  useGetUploadedImagesQuery,
} from "redux/catsApi";
import SearchForm from "components/SearchForm";
import Gallery from "components/Gallery";
import Modal from "components/Modal";
import sprite from "../../icons/sprite.svg";
import ClipLoader from "react-spinners/ClipLoader";
import {
  PagesWrapper,
  PagesContentWrapper,
  LoaderWrapper,
} from "../../constants/common-styles";
import GoBackGroup from "components/GoBackGroup";
import {
  Wrapper,
  UploadButton,
  Option,
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
  const [breedsOptions, setBreedsOptions] = useState([]);
  const [order, setOrder] = useState("RANDOM");
  const [type, setType] = useState("All");
  const [breed, setBreed] = useState("none");
  const [limit, setLimit] = useState(5);
  const [imagesToRender, setImagesToRender] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: breeds,
    isSuccess,
    isLoading,
    isFetching,
  } = useGetAllBreedsQuery();
  const {
    data: imagesForOneBreed,
    isSuccess: imagesForOneBreedFetched,
    isLoading: loadingProcess,
    isFetching: fetchingProcess,
  } = useGetImagesForBreedQuery(
    { id: breed, limit, order },
    { skip: breed === "none" }
  );
  const {
    data: allImages,
    isSuccess: allImagesFetched,
    isLoading: loading,
    isFetching: fetching,
  } = useGetAllImagesQuery(
    {
      order,
      limit,
    },
    { skip: breed !== "none" }
  );

  const { data: userImage, isSuccess: userImageUploaded } =
    useGetUploadedImagesQuery();

  const sortByType = (images, type) => {
    if (images) return images.filter((image) => image.url.endsWith(type));
  };

  useEffect(() => {
    if (allImagesFetched && type === "All") setImagesToRender(allImages);
    else if (type === "Static")
      setImagesToRender(sortByType(allImages, "jpg" || "png"));
    else if (type === "Animated")
      setImagesToRender(sortByType(allImages, "gif"));
  }, [type, allImagesFetched, allImages]);

  useEffect(() => {
    if (imagesForOneBreedFetched && breed !== "none" && type === "All") {
      setImagesToRender(imagesForOneBreed);
    } else if (breed !== "none" && type === "Static")
      setImagesToRender(sortByType(imagesForOneBreed, "jpg" || "png"));
    else if (breed !== "none" && type === "Animated")
      setImagesToRender([] || sortByType(imagesForOneBreed, "gif"));
  }, [imagesForOneBreed, imagesForOneBreedFetched, breed, type, limit]);

  useEffect(() => {
    if (userImageUploaded && userImage.length !== 0 && allImagesFetched) {
      setImagesToRender((prevImages) => [
        ...userImage,
        ...prevImages.slice(0, -1),
      ]);
    }
  }, [userImageUploaded, userImage, allImagesFetched]);

  useEffect(() => {
    if (breeds !== [] && isSuccess)
      setBreedsOptions(
        [{ id: "none", name: "None" }].concat(
          breeds.map((breed) => ({ id: breed.id, name: breed.name }))
        )
      );
  }, [breeds, isSuccess]);

  return (
    <PagesWrapper>
      <SearchForm />
      <PagesContentWrapper>
        <Wrapper>
          <GoBackGroup text="gallery" />
          <UploadButton onClick={() => setIsModalOpen(true)}>
            <svg width="16" height="16" style={{ marginRight: "10px" }}>
              <use href={sprite + "#icon-upload-no-fill-16"} />
            </svg>
            upload
          </UploadButton>
        </Wrapper>

        {isModalOpen && (
          <Modal
            onClose={(e) => {
              if (e.target === e.currentTarget || e.code === "Escape")
                setIsModalOpen(false);
            }}
          />
        )}

        <OptionsSection>
          <Option>
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
          </Option>

          <Option>
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
          </Option>

          <Option>
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
          </Option>

          <Option>
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
              <UpdateButton onClick={() => window.location.reload(false)}>
                <svg width="17" height="20">
                  <use href={sprite + "#icon-update-20"} />
                </svg>
              </UpdateButton>
            </OptionWrapper>
          </Option>
        </OptionsSection>
        {isLoading ||
        loading ||
        isFetching ||
        fetching ||
        loadingProcess ||
        fetchingProcess ? (
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

export default GalleryPage;
