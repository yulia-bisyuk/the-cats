import { GoBackBtn, CurrentPageBtn, BtnsWrapper } from './GoBackGroup.styled';
import sprite from '../../icons/sprite.svg';

const GoBackGroup = ({ btnText }) => {
  return (
    <BtnsWrapper>
      <GoBackBtn>
        {' '}
        <svg width="20" height="20">
          <use href={sprite + '#icon-back-20'} />
        </svg>
      </GoBackBtn>
      <CurrentPageBtn onClick={() => window.location.reload(false)}>
        {btnText}
      </CurrentPageBtn>
    </BtnsWrapper>
  );
};

export default GoBackGroup;
