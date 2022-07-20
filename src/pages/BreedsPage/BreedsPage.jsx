import SearchForm from "components/SearchForm";
// import Gallery from "components/Gallery";
import GoBackGroup from "components/GoBackGroup";
import {
  PagesWrapper,
  PagesPositioningWrapper,
} from "../../constants/common-styles";
import { useGetAllBreedsQuery } from "redux/catsApi";
import sprite from '../../icons/sprite.svg';
import { SelectsWrapper, SortButton } from "./BreedsPage.styled";


const BreedsPage = () => {
    // const [options, setOptions] = useState([]);
    const {data: breeds, isSuccess} = useGetAllBreedsQuery();

let allBreeds = [{value: 'all', label: 'All breeds'}];
let breedsOptions;
if(isSuccess) breedsOptions = allBreeds.concat(breeds.map(breed => 
    ({ value: breed.id, label: breed.name }))
)
console.log('breedsOptions', breedsOptions);

let limitOptions = [
    {value: '5'},
    {value: '10'},
    {value: '15'},
    {value: '20'},
];

const handleSubmit =(e) => {
e.preventDefault();
console.log('submit');
};

const handleChange = (e) => {
    console.log(e.target.value);
}


    return(
         <PagesPositioningWrapper>
      <SearchForm />
      <PagesWrapper>
          <SelectsWrapper>
        <GoBackGroup btnText='breeds' />

        {isSuccess && 
          <select value='кокос' onChange={handleChange}>
            <option value="грейпфрут">Грейпфрут</option>
            <option value="лайм">Лайм</option>
            <option value="кокос">Кокос</option>
            <option value="манго">Манго</option>
          </select>

         }
         <SortButton>
             <svg width="20" height="20">
          <use href={sprite + "#icon-sort-20"} />
        </svg>
         </SortButton>
         <SortButton>
             <svg width="20" height="20">
          <use href={sprite + "#icon-sort-revert-20"} />
        </svg>
         </SortButton>
</SelectsWrapper>
      </PagesWrapper>
    </PagesPositioningWrapper>
    )
};

export default BreedsPage;