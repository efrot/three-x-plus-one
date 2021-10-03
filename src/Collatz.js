import React from 'react';

const anotherLoop = () => {

}

const Collatz = (props) => {
    let x = props.x;
    let jumps = 0;
    let xArray = [];
    do{
        if(x%2===0)
        {
            x/=2;

            xArray.push(x);

            console.log("GERADE: ");
            console.log(x);
            jumps++;
        } else if (x%2!==0)
        {
            x = 3*x+1;

            jumps++;

            xArray.push(x);

            console.log("UNGERADE: ");
            console.log(x);
            
        }
    } while (x!==1);

    return(
        <div>
        <p>
            x = {props.x}
        </p>
        <p>
            steps = {xArray.sort((a,b) => {return a-b}).join()}
        </p>
        <p>
            jumps = {jumps}
        </p>
        </div>
    );
}

export default Collatz;