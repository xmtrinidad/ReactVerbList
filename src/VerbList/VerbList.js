import React from 'react';
import './VerbList.css';

const verbList = (props) => {
    const verbs = props.verbs;
    const listItems = verbs.filter(v => v.verb !== v.userInput).map(v => <li className="list-group-item" key={v.verb}>{v.verb}</li>)
    return (
        <ul className="list-group VerbList">
            {listItems}
        </ul>
    )
}

export default verbList;