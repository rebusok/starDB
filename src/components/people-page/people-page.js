import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndic from '../error-indic';


export default class PeoplePage extends Component{


    state = {
        selectedPerson: 3,
        error: false
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
      };
    componentDidCatch(){
        this.setState({ error: true });
    }
    render(){
        const {selectedPerson, error} = this.state;
        if (error){
            return <ErrorIndic/>
        }
        return(
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                    onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails 
                    personId={selectedPerson}/>
                </div>
            </div>
        )
    }
}