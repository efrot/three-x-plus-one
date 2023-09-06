import {useState} from 'react';
import CollatzGraph from './CollatzGraph';
import CollatzInput from './CollatzInput';
import CollatzInfo from './CollatzInfo';
import './Collatz.css';

function Collatz () {

    const [x, setX] = useState(1);
    const [steps, setSteps] = useState(0);


    return(
        <div>
        <CollatzGraph x={x} setSteps={setSteps}/>
        <CollatzInput setX={setX}/>
        <CollatzInfo steps={steps}/>
        </div>
    );
}

export default Collatz;