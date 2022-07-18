import { useNavigate } from 'react-router-dom';
import {BreedButton} from './BreedsPage.styled';

const BreedsPageHoverContent = ({breed}) => {
const navigate = useNavigate();

    return(<BreedButton onClick={() => navigate('/')}>{breed}</BreedButton>)
};
 export default BreedsPageHoverContent;