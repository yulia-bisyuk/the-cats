import { FlexWrapper } from "./Menu.styled";
import { MenuBlock } from "./MenuBlock";
import notebook from "../images/vote-table.png";
import cat from "../images/pet-breeds.png";
import search from "../images/images-search.png";

export const Menu = () => {
  return (
    <FlexWrapper>
      <MenuBlock
        alt="notebook"
        style={{ backgroundColor: "#B4B7FF", borderColor: "#F3F3FF" }}
        src={notebook}
        navigateTo="/voting"
        text="voting"
      />

      <MenuBlock
        alt="cat"
        style={{ backgroundColor: "#97EAB9", borderColor: "#EEFCF4" }}
        src={cat}
        navigateTo="/breeds"
        text="breeds"
      />

      <MenuBlock
        alt="search"
        style={{ backgroundColor: "#FFD280", borderColor: "#FFF8EB" }}
        src={search}
        navigateTo="/gallery"
        text="gallery"
      />
    </FlexWrapper>
  );
};
