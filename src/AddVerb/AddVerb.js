import React from 'react';
import './AddVerb.css';

const addVerb = (props) => {
    return (
        <div className="AddVerb">
            <div className="form-group">
                <label htmlFor="spa">Spanish:</label>
                <input 
                    onChange={props.changed}
                    value={props.spa}
                    id="spa" 
                    className="form-control"></input>
            </div>
            <div className="form-group">
                <label htmlFor="eng">English:</label>
                <input 
                    onChange={props.changed}
                    value={props.eng}
                    id="eng" 
                    className="form-control"></input>
            </div>
            <button onClick={props.add} className="btn btn-secondary">Submit</button>
        </div>
    )
}

export default addVerb;