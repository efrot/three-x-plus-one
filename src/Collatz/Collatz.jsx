import {useState} from 'react';
import CollatzGraph from './CollatzGraph';
import CollatzInput from './CollatzInput';
import CollatzInfo from './CollatzInfo';
import './Collatz.css';
import { Grid } from '@mui/material';

const Collatz = () => {

    const [x, setX] = useState(1);
    const [steps, setSteps] = useState(0);


    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <CollatzGraph x={x} setSteps={setSteps}/>
            </Grid>
            <Grid item xs={6}>
                <CollatzInput setX={setX}/>
            </Grid>
            <Grid item xs={8}>
                <CollatzInfo steps={steps}/>
            </Grid>
        </Grid>
    );
}

export default Collatz;