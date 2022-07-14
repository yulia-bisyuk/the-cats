import styled from 'styled-components';

const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(6, 140px);
  gap: 20px;
  padding-left: 0px;
  margin-top: 0px;
`;

const GalleryListItem = styled.li`
  list-style-type: none;
  position: relative;
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

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(33, 150, 243, 0.9);
  transform: translateY(100%);
  opacity: 0;
`;

export { GalleryList, GalleryListItem, ListItemImage, Cover };
