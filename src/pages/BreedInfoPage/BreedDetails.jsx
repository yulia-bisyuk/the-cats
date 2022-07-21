import { BreedDetailsWrapper, DetailsColumn, DetailTitle, DetailContent } from "./BreedInfoPage.styled"

export const BreedDetails = ({breed}) => {

    return(
        <BreedDetailsWrapper >
       <DetailsColumn><DetailContent><DetailTitle className="temperament">Temperament: </DetailTitle>{breed.temperament}</DetailContent></DetailsColumn>
       <DetailsColumn>
           <DetailContent><DetailTitle>Origin: </DetailTitle>{breed.origin}</DetailContent>
           <DetailContent><DetailTitle>Weight: </DetailTitle>{breed.weight.metric} kgs</DetailContent>
           <DetailContent><DetailTitle>Life span: </DetailTitle>{breed.life_span} years</DetailContent>
       </DetailsColumn>
       </BreedDetailsWrapper>
    )
}