import React from 'react';
import Spinner from './Spinner';

const Card = ({showData, loadingData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getYear();
    var date = day+"/"+month+"/"+year; 


    if(loadingData){
        return <Spinner />;
    }
    return(
        <div className='mt-5'>

            {
                showData === true ? (

                    <div className='container'>
                        <div className='card mb-3 mx-auto bg-dark text-light'>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <img src='https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fluid rounded-start' alt='..'/>
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body text-start mt-2'></div>
                                </div>

                            </div>

                        </div>

                    </div>
                ):(
                    <h2 className='text-light'>Sin Datos</h2>
                )
            }


        </div>
    );
}

export default Card;