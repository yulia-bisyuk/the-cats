import styled from "styled-components";

const ImageToVote = styled.img`
  height: 206px;
  object-fit: cover;
  border-radius: 20px;

  @media (min-width: 768px) {
    height: 360px;
  }
`;
const ButtonsWrapper = styled.div`
  position: absolute;
  top: 240px;
  left: 72px;

  padding: 4px;
  border-radius: 20px;
  background-color: white;

  @media (min-width: 768px) {
    top: 380px;
    left: 212px;
  }
`;

const ButtonIcon = styled.svg`
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-color: transparent;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 3px;
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ButtonLike = styled(Button)`
  border-radius: 20px 0px 0px 20px;
  background-color: ${(props) => props.theme.green};

  svg {
    fill: white;
  }

  &:hover {
    background-color: ${(props) => props.theme.lightGreen};
    svg {
      fill: ${(props) => props.theme.green};
    }
  }
`;

const ButtonFav = styled(Button)`
  background-color: ${(props) => props.theme.pink};

  svg {
    fill: white;
  }

  &:hover {
    background-color: ${(props) => props.theme.lightPink};
    svg {
      fill: ${(props) => props.theme.pink};
    }
  }
`;
const ButtonDislike = styled(Button)`
  border-radius: 0px 20px 20px 0px;
  background-color: ${(props) => props.theme.yellow};

  svg {
    fill: white;
  }

  &:hover {
    background-color: ${(props) => props.theme.lightYellow};
    svg {
      fill: ${(props) => props.theme.yellow};
    }
  }
`;

export {
  ImageToVote,
  ButtonsWrapper,
  ButtonIcon,
  ButtonLike,
  ButtonFav,
  ButtonDislike,
};
