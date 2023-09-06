// import {useState} from 'react';
import { TextField } from '@mui/material';


const CollatzInput = (props) => {
    let setX = props.setX;

    return(
        <div>
            <p> type in a positive number <strong>x</strong> </p>
            <TextField onChange={(e) => setX(e.target.value)}/>
        </div>
    )

}

export default CollatzInput;