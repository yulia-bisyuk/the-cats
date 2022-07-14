import { useState } from 'react';
import { columnStyle, rowStyle } from './dynamicGridStyles';
import {
  GalleryList,
  GalleryListItem,
  ListItemImage,
  Cover,
} from './Gallery.styled';

const Gallery = ({ items }) => {
  const [hovered, setHovered] = useState(false);
  const [hoveredImageId, setHoveredImageId] = useState(null);

  return (
    <GalleryList>
      {items &&
        items.map((item, index) => (
          <GalleryListItem
            key={item.id}
            style={{
              gridColumn: columnStyle(index),
              gridRow: rowStyle(index),
            }}
          >
            <ListItemImage
              src={item.image.url}
              alt="cat"
              onMouseOver={() => {
                setHovered(true);
                setHoveredImageId(item.id);
              }}
            />
            {hovered && hoveredImageId === item.id && (
              <Cover
                style={{ opacity: '1', transform: `translateY(0)` }}
              ></Cover>
            )}
          </GalleryListItem>
        ))}
    </GalleryList>
  );
};

export default Gallery;
