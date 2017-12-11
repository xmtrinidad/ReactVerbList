import React from 'react';
import './AddVerb.css';

const addVerb = (props) => {
    let validationText = null;
    if (!props.validation) {
       validationText = (<strong className="validation"><i class="fas fa-exclamation-triangle"></i> Fields are empty or verb already exist!</strong>);
    }
    return (
        <div className="AddVerb">
            <div className="form-group">
                <label htmlFor="spa">Spanish:</label>
                <input 
                    onChange={props.changed}
                    value={props.spa}
                    id="spa" 
                    className="form-control" />
                {validationText}
            </div>
            <div className="form-group">
                <label htmlFor="eng">English:</label>
                <input 
                    onChange={props.changed}
                    value={props.eng}
                    id="eng" 
                    className="form-control" />
                {validationText}
            </div>
            <div>
                <button onClick={props.add} className="btn btn-secondary">Submit</button>
            </div>
        </div>
    )
}

export default addVerb;