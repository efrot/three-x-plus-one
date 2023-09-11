import { TextField } from '@mui/material';


const CollatzInput = (props) => {
    let setX = props.setX;

    return(
        <>
            <p> type in a positive number <strong>x</strong> </p>
            <TextField onChange={(e) => setX(e.target.value)}/>
        </>
    )

}

export default CollatzInput;