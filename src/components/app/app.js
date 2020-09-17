import React, { Component } from 'react';
import Header from '../header';
import Errorbountry from '../error-bountry';
import SwapiService from '../../services/swapi-serveces';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from '../swapi-service-context';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import './app.css';


export default class App extends Component {

    
    
    state = {
        swapiService: new SwapiService()
    }

    render(){
        return (
            <Errorbountry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet/>
                        <PeoplePage/>
                        <PlanetPage/>
                        <StarshipPage/> 
                    </div>
                </SwapiServiceProvider>                
            </Errorbountry>
        
        );
    }
};

