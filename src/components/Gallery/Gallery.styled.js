import styled from "styled-components";

const GalleryList = styled.ul`
  height: fit-content;

  padding-left: 0px;
  margin-top: 0px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 210px);
    grid-auto-rows: 140px;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 200px);
  }
`;

const GalleryListItem = styled.li`
  height: 206px;
  margin-top: 10px;
  list-style-type: none;
  position: relative;

  @media (min-width: 768px) {
    height: auto;
    margin-top: 0;
  }
`;

const ListItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 134, 142, 0.6);
  transform: translateY(100%);
  opacity: 0;
`;

const Notification = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyBgColor};
`;
const NotificationText = styled.span`
  margin-left: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.lightGrayTxtColor};
`;

export {
  GalleryList,
  GalleryListItem,
  ListItemImage,
  Overlay,
  Notification,
  NotificationText,
};
