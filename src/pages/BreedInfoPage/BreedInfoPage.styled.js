import styled from "styled-components";

const BreedId = styled.span`
  padding: 5px 24px;
  margin-left: 10px;
  height: fit-content;
  border-radius: 10px;
  background-color: ${(props) => props.theme.pink};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  color: white;

  @media (min-width: 768px) {
    padding: 5px 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
`;
const BreedInfoWrapper = styled.div`
  margin-top: 51px;
  padding: 26px 40px 40px 40px;
  border: 2px solid ${(props) => props.theme.lightPink};
  border-radius: 20px;
  position: relative;
`;

const BreedTitle = styled.h1`
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.44;
  text-align: center;
  color: ${(props) => props.theme.titleColor};

  @media (min-width: 768px) {
    width: max-content;
    font-size: 30px;
  }
`;
const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  padding: 5px 40px;
  background-color: white;
`;

const BreedFor = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.45;
    color: ${(props) => props.theme.lightGrayTxtColor};
  }
`;

const BreedDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const DetailsColumn = styled.div`
  :not(:last-child) {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    width: 270px;
    :not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;
const DetailTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.44;
  color: ${(props) => props.theme.titleColor};
  &.temperament {
    display: block;
  }
`;
const DetailContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.44;
  margin-bottom: 0px;

  color: ${(props) => props.theme.lightGrayTxtColor};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export {
  BreedId,
  Wrapper,
  BreedInfoWrapper,
  BreedTitle,
  TitleWrapper,
  BreedFor,
  BreedDetailsWrapper,
  DetailsColumn,
  DetailTitle,
  DetailContent,
};
