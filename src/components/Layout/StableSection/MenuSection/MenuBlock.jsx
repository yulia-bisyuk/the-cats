// import { useNavigate } from "react-router-dom";
import { ImgWrapper, MenuLink } from "./MenuSection.styled";

export const MenuBlock = ({ style, src, alt, text, navigateTo }) => {
  // const navigate = useNavigate();

  return (
    <div>
      <ImgWrapper style={style}>
        <img
          alt={alt}
          src={src}
          style={{ height: "186px", width: "130px" }}
        ></img>
      </ImgWrapper>
      <MenuLink
         to={navigateTo}
      >
        {text}
      </MenuLink>
    </div>
  );
};
