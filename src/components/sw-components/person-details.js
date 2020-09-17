import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwapiService} from '../hoc-heaper';


const PersonDetails = (props) =>{    
    return(
        <ItemDetails {...props} >        
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />    
        </ItemDetails>
    )
    
};
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPersone,
        getImageUrl: swapiService.getPersoneImage
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps); 
