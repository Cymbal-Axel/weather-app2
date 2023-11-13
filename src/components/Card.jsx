import React from 'react';
import Spinner from './Spinner';

const Card = ({showData, loadingData, weather, forecast}) => {

    if(loadingData){
        return <Spinner />;
    }
    return(
        <h1></h1>
    );
}

export default Card;