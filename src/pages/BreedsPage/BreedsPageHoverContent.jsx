import { useNavigate } from "react-router-dom";
import { BreedButton } from "./BreedsPage.styled";

const BreedsPageHoverContent = ({ breed }) => {
  const navigate = useNavigate();

  return <BreedButton onClick={() => {
      navigate('/info');
      localStorage.setItem('selectedBreed', JSON.stringify(breed));

}}>{breed.name}</BreedButton>;
};

export default BreedsPageHoverContent;
