import React, {useState} from 'react';

const Form = () => {
    const [city, setCity] = useState("");

    return(

        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto"
            </form>
        </div>

    )
}

export default Form;