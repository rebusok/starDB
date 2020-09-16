import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details';
import SwapiService from '../../services/swapi-serveces';
import Row from '../Row';
import Errorbountry from '../error-bountry';



export default class PeoplePage extends Component{

    swapiService = new SwapiService();
    state = {
        selectedPerson: 3
        
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
      };
    
    render(){
        const {selectedPerson} = this.state;
        
        const {getAllPeople, getPersone, getPersoneImage} = this.swapiService; 
        const itemList = (
            <Errorbountry>
                <ItemList
                    onItemSelected={this.onPersonSelected}
                    getData={getAllPeople}>
                        {(i) => (
                            `${i.name} (${i.gender})`
                        )}
                 </ItemList>
            </Errorbountry>
            
            
        );
        
        const personDetails = (
            <Errorbountry>
                <ItemDetails 
                 itemId={selectedPerson}
                 getData={getPersone}
                 getImageUrl={getPersoneImage}>
                     <Record field='birthYear' label='Birth Year'/>
                     <Record field='gender' label='Gender'/>
                     <Record field='eyeColor' label='Eye Color'/>
                </ItemDetails>
            </Errorbountry>
            
            
        );
        return(
            
                <Row left={itemList} right={personDetails}/>
                     
        )
    }
}

