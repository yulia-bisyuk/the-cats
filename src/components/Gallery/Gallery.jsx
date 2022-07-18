import { useState, useEffect } from 'react';
import { useDeleteFromFavouritesMutation } from 'redux/catsApi';
import { Logger } from 'components/Logger/Logger';
import FavPageImageHoverContent from 'pages/FavouritesPage/FavPageImageHoverContent';
import BreedsPageHoverContent from 'pages/BreedsPage/BreedsPageHoverContent';
import { columnStyle, rowStyle } from './dynamicGridStyles';
import {
  GalleryList,
  GalleryListItem,
  ListItemImage,
  Overlay,
  Notification,
  NotificationText
} from './Gallery.styled';
import { useLocation } from 'react-router-dom';

const Gallery = ({ items }) => {
    const location = useLocation();
     const [remove] = useDeleteFromFavouritesMutation();
  const [hovered, setHovered] = useState(false);
  const [hoveredImageId, setHoveredImageId] = useState(null);
const [removeLogs, setRemoveLogs] = useState(JSON.parse(window.localStorage.getItem('removeLogs')) || []);

const activityLogger = (id, type) => {
    const date = new Date().toTimeString().slice(0, 5);

    setRemoveLogs(prevState => [
      ...prevState,
      { imageId: id, type: type, time: date },
    ]);
    
  };

    useEffect(() => {
    window.localStorage.setItem('removeLogs', JSON.stringify(removeLogs));
     if(removeLogs.length > 20) window.localStorage.clear();
  }, [removeLogs]);

  return (
    <>
    {items && items.length === 0 ? <Notification><NotificationText>No items found</NotificationText></Notification> : <GalleryList>
      {items &&
        items.map((item, index) => (
         
          <GalleryListItem
            key={index}
            style={{
              gridColumn: columnStyle(index),
              gridRow: rowStyle(index),
            
            }}
          >
          
            <ListItemImage
              src={item.url || item.image.url}
              alt="cat"
              onMouseOver={() => {
                setHovered(true);
                setHoveredImageId(item.id);
              }}
            />
            {hovered && hoveredImageId === item.id && location.pathname !== '/likes' && location.pathname !== '/dislikes' && (
              <Overlay
                style={{ opacity: '1', transform: `translateY(0)` }}
              >
           {location.pathname === '/favourites' && <FavPageImageHoverContent 
           onClick={() => {
          remove(hoveredImageId);
          activityLogger(item.image.id, 'Favourites');
        }}/>}
          {(location.pathname === '/breeds-search-by-name' || location.pathname === '/breeds') && <BreedsPageHoverContent breed={item.breeds[0].name}/>}
              </Overlay>
            )}
          </GalleryListItem>
        ))}
    </GalleryList>}
    
    {removeLogs !==[] && location.pathname === '/favourites' && <Logger activities={removeLogs} text='was removed from'/>}
    </>
  );
};

export default Gallery;
