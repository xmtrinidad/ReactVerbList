import React from 'react';
import './Card.css';

const card = (props) => {
    const correct = {
        backgroundColor: '#fff'
    }
    const hide = {
        display: 'block'
    }
    if (props.status) {
        correct.backgroundColor = '#43A047'
        correct.color = '#fff'
        correct.alignSelf = 'start';
        hide.display = 'none';
    }
    return (
        <div style={correct} className="Card">
            <h3 className="title">{props.verb}</h3>
            <p className="translation">{props.userInput}</p>
            <div className="form-group" style={hide}>
                <label htmlFor="user_ans">Translation:</label>
                <input 
                    onChange={props.changed}
                    className="form-control" 
                    id="user_ans" 
                    type="text"/>
            </div>
        </div>
    );
}

export default card;