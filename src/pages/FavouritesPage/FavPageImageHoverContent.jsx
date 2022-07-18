import {DeleteFavouriteButton} from './FavouritesPage.styled';
import sprite from '../../icons/sprite.svg';

const FavPageImageHoverContent = ({onClick}) => {

    return(
        <>
        <DeleteFavouriteButton onClick={onClick}>
       <svg width="20" height="20">
           <use href={sprite + '#icon-fav-color-20'} />
          </svg>
        </DeleteFavouriteButton>
        </>
        
    )
};

export default FavPageImageHoverContent;