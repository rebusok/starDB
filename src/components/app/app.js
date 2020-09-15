import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndic from '../error-indic';
import './app.css';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        error: false
    }


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
        const {showRandomPlanet, error} = this.state;
        const planet = showRandomPlanet ?
            <RandomPlanet/> :
            null;
        if (error){
            return <ErrorIndic/>
        }

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
            <PeoplePage/>
        </div>
        );
    }
};

