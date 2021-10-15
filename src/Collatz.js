import React from 'react';
import './App.css';

const Collatz = (props) => {
    let input = props.x;
    let x = parseInt(input);
    let jumps = 0;
    let xArray = [];

    if(x <= 0 || isNaN(x)){
        x = 1;
        input = 1;
    }
    
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
        <div class="collatz">
        <p>
            x = {input}
        </p>
        <p>
            steps = {xArray.join(', ')}
        </p>
        <p>
            jumps = {jumps}
        </p>
        </div>
    );
}

export default Collatz;