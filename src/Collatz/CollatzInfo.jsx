// import {useState} from 'react';

const CollatzInfo = (props) => {
    let steps = props.steps;

    return (
        <div>
            <p>Steps: {steps}</p>
        </div>
    )

}

export default CollatzInfo;