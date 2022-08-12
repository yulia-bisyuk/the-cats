import { DeleteFavouriteButton } from "./FavouritesPage.styled";
import sprite from "../../icons/sprite.svg";
import { useState } from "react";

const FavPageImageHoverContent = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <DeleteFavouriteButton
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <svg width="20" height="20">
            <use href={sprite + "#icon-fav-20"} />
          </svg>
        ) : (
          <svg width="20" height="20">
            <use href={sprite + "#icon-fav-color-20"} />
          </svg>
        )}
      </DeleteFavouriteButton>
    </>
  );
};

export default FavPageImageHoverContent;
