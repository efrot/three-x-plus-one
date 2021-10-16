import React from 'react';
import './App.css';
import {Line} from "react-chartjs-2";

const Collatz = (props) => {
    let input = props.x;
    let x = parseInt(input);
    let jumps = 0;
    let xArray = [];
    let stepsArray = [];

    if(x <= 0 || isNaN(x)){
        x = 1;
        input = 1;
    }
    
    do{
        if(x%2===0)
        {
            x/=2;

            jumps++;
            stepsArray.push(jumps);
            xArray.push(x);

            
            console.log("GERADE: ");
            console.log(x);

        } else if (x%2!==0)
        {
            x = 3*x+1;

            jumps++;
            stepsArray.push(jumps);
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
        
        {stepsArray? <Line 
            data={{
                labels: stepsArray,
                datasets: [{
                    data: xArray,
                }]
            }}
            height={720}
            width={1440}
            options={{
                maintainAspectRatio: true,
            }}
        /> : null}
        </div>
    );
}

export default Collatz;