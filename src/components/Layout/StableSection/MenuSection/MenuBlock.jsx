import { useNavigate } from 'react-router-dom';
import { ImgWrapper, MenuBtn } from './MenuSection.styled';

export const MenuBlock = ({ style, src, alt, text, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div>
      <ImgWrapper style={style}>
        <img
          alt={alt}
          src={src}
          style={{ height: '186px', width: '130px' }}
        ></img>
      </ImgWrapper>
      <MenuBtn
        onClick={() => {
          navigate(navigateTo);
        }}
      >
        {text}
      </MenuBtn>
    </div>
  );
};
