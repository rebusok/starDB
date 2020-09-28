import React, { Component } from 'react';
import Header from '../header';
import Errorbountry from '../error-bountry';
import SwapiService from '../../services/swapi-serveces';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from '../swapi-service-context';
import {PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage} from '../pages';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './app.css';
import { StarshipDetails } from '../sw-components';


export default class App extends Component {

    
    
    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render(){
        const {isLoggedIn} = this.state;
        return (
            <Errorbountry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet/>
                            <Switch>
                                <Route path='/' 
                                    render={() => <h2>Welcom to StarDB</h2>}
                                    exact />
                                <Route path='/people/:id?' component={PeoplePage}/>
                                <Route path='/planets' component={PlanetPage}/>
                                <Route path='/starships' exact component={StarshipPage}/>  
                                <Route path='/starships/:id' 
                                        render={( {match}) => {
                                            const {id} = match.params;
                                        return <StarshipDetails itemId={id}/>

                                        } }/>    
                                <Route 
                                    path='/login'  
                                    render={()=> {
                                        return <LoginPage 
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin}/>
                                    }}/>     
                                <Route 
                                    path='/secret'  
                                    render={()=> {
                                        return <SecretPage isLoggedIn={isLoggedIn}/>
                                    }}/> 
                                <Route render={() => {
                                    return <h2> Page not found</h2>
                                }}/>
                            </Switch>                     
                        </div>
                    </Router>
                </SwapiServiceProvider>                
            </Errorbountry>
        
        );
    }
};

