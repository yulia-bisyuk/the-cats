import { ImgWrapper, MenuLink } from "./Menu.styled";

export const MenuBlock = ({ style, src, alt, text, navigateTo }) => {
  return (
    <div>
      <ImgWrapper style={style}>
        <img
          alt={alt}
          src={src}
          style={{ height: "186px", width: "130px" }}
        ></img>
      </ImgWrapper>
      <MenuLink to={navigateTo}>{text}</MenuLink>
    </div>
  );
};
