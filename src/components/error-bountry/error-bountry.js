import React, { Component } from 'react';
import ErrorIndic from '../error-indic';
import './error-bountry.css'
export default class Errorbountry extends Component {

    state = {
        error: false
    }

    componentDidCatch(){
        this.setState({ error: true });
    }


    render(){

        if (this.state.error){
            return <ErrorIndic/>
        }
        return this.props.children;
    }
}