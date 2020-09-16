import React from 'react';
import ItemDetails, {Record} from '../item-details';
import SwapiService from '../../services/swapi-serveces';

const swapiService = new SwapiService();

const {
    getPersone,
    getPersoneImage,
    getPlanet,
    getPlanetImage,
    getStarship,
    getStarshipImage
} = swapiService;

const PersonDetails = ({itemId}) =>{
    return(
        <ItemDetails
            itemId={11}
            getData={getPersone}
            getImageUrl={getPersoneImage} >
    
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
    
        </ItemDetails>
    )
};
const PlanetDetails  = ({itemId}) =>{
    return(
        <ItemDetails
            itemId={5}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    )
};
const StarshipDetails  = ({itemId}) =>{
    return(
        <ItemDetails
            itemId={5}
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    )
};

export {
    PersonDetails ,
    PlanetDetails ,
    StarshipDetails 
};