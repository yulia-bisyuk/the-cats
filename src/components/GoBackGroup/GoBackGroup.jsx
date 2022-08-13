import { useNavigate } from "react-router-dom";
import {
  GoBackBtn,
  CurrentPagePointer,
  BtnsWrapper,
} from "./GoBackGroup.styled";
import sprite from "../../icons/sprite.svg";

const GoBackGroup = ({ text }) => {
  const navigate = useNavigate();

  return (
    <BtnsWrapper>
      <GoBackBtn onClick={() => navigate(-1)}>
        <svg width="20" height="20">
          <use href={sprite + "#icon-back-no-fill-20"} />
        </svg>
      </GoBackBtn>
      <CurrentPagePointer>{text}</CurrentPagePointer>
    </BtnsWrapper>
  );
};

export default GoBackGroup;
