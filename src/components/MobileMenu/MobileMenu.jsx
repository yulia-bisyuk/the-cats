import { Menu } from "components/Layout/StableSection/MenuSection/Menu";
import { MobileMenuContainer, CloseButton } from "./MobileMenu.styled";
import sprite from "../../icons/sprite.svg";

const MobileMenu = ({ setIsOpen }) => {
  return (
    <MobileMenuContainer>
      <CloseButton onClick={() => setIsOpen(false)}>
        <svg width="20" height="20">
          <use href={sprite + "#icon-close-no-fill-20"} />
        </svg>
      </CloseButton>
      <Menu />
    </MobileMenuContainer>
  );
};

export default MobileMenu;
