import React, { Component } from 'react';
import ErrorIndic from '../error-indic';
import Spinner from '../spinner';


const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps){
      if( this.props.getData !== prevProps.getData){
        this.update();
      }
    }
    update(){
      this.setState({
        loading: true,
        error: false
      })
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            loading:false,
            error:true
          });
        });
    }

    componentDidMount() {
      this.update();
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if(error){
        return <ErrorIndic/>
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;