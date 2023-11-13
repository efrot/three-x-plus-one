import {useState} from 'react';
import CollatzGraph from './CollatzGraph';
import CollatzInfo from './CollatzInfo';
import './Collatz.css';
import { Grid } from '@mui/material';

const Collatz = () => {

    const [x, setX] = useState(1);
    const [steps, setSteps] = useState(0);
    const [xValues, setXValues] = useState([x]);


    return(
        <div className='collatz-container'>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <CollatzGraph x={x} setX={setX} setSteps={setSteps} xValues={xValues} setXValues={setXValues}/>
                </Grid>
                <Grid item xs={5}>
                    <CollatzInfo steps={steps} xValues={xValues}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Collatz;