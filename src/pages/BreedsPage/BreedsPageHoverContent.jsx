import { useNavigate } from "react-router-dom";
import { BreedButton } from "./BreedsPage.styled";

const BreedsPageHoverContent = ({ breed, images }) => {
  const navigate = useNavigate();
 



console.log('breed', breed);
  console.log('images', images);


  return <BreedButton onClick={() => {
      navigate('/info');
      localStorage.setItem('selectedBreed', JSON.stringify(breed));
      localStorage.setItem('selectedBreedImages', JSON.stringify(images));

}}>{breed.name}</BreedButton>;
};
export default BreedsPageHoverContent;
