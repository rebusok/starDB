import React, { Component } from 'react';
import SwapiService from '../../services/swapi-serveces';
import './person-details.css';
import Spinner from '../spinner';
import ErrorIndic from '../error-indic';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: {},
        loading: true,
        error: false
    }
    onError = (err) =>{
		this.setState({
			error: true,
			loading: false
		});
	}

    onPersonLoaded = (person) =>{
		this.setState({
			person,
			loading: false,
			error: false
		});
	};
    componentDidMount(){
        this.updatePersone();
    }

    componentDidUpdate(prevProps){
        if (this.props.personId !== prevProps.personId){
            this.updatePersone();
        }
    }

    updatePersone = () => {
        const {personId} = this.props;

        if(!personId){
            return
        }
        this.swapiService
            .getPersone(personId)
            .then(this.onPersonLoaded)
            .catch(this.onError);
    }

    render() {
        const {person, loading, error} = this.state;
        
        if(!person){
            return <span>Select a person from a list</span>
        }

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndic/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PersonVie person={person}/> : null;

        

        return (
        <div className="person-details card">
           {errorMessage}
            {spinner}
            {content}
        </div>
        )
    }
}


const PersonVie = ({person}) => {
    const { id, name, gender,
        birthYear, eyeColor } = person
    return(
        <React.Fragment>
             <img className="person-image"
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="ded"/>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )

}