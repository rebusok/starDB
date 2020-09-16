import React, { Component } from 'react';
import Header from '../header';

import SwapiService from '../../services/swapi-serveces';
import RandomPlanet from '../random-planet';
import ItemDetails, { Record } from "../item-details/item-details";
import './app.css';

import {
    PersonDetails ,
    PlanetDetails ,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';


export default class App extends Component {

    state = {
        showRandomPlanet: true

    }
    swapiService = new SwapiService();

    componentDidCatch(){
        this.setState({ error: true });
    }

    onToggleRandomPlanet = () =>{
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    }

    render(){
        const {showRandomPlanet} = this.state;
        const planet = showRandomPlanet ?
            <RandomPlanet/> :
            null;
        


        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.swapiService;

        const personDetails = (
            <ItemDetails
            itemId={11}
            getData={getPerson}
            getImageUrl={getPersonImage} >
    
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
    
            </ItemDetails>
        );
    
        const starshipDetails = (
            <ItemDetails
            itemId={5}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
    
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        );

        return (
        <div className="stardb-app">
            <Header />
            {planet}
            <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.onToggleRandomPlanet}>
            Toggle Random Planet
          </button>
            
            </div>
            <PersonList>
                { ({name}) => <span>{name}</span>}
            </PersonList>
            <PersonDetails itemId={10}/>
            <PlanetList>
                { ({name}) => <span>{name}</span>}
            </PlanetList>
            <StarshipList>
                { ({name}) => <span>{name}</span>}
            </StarshipList>
            
        </div>
        );
    }
};

