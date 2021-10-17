import React from 'react';
import './App.css';
import {Line} from "react-chartjs-2";

const Collatz = (props) => {
    let input = props.x;
    let x = parseInt(input);
    let jumps = 0;

    if(x <= 0 || isNaN(x)){
        x = 1;
    }
    
    let xArray = [x];
    let stepsArray = [0];

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
        <div>
            <div>
                {stepsArray? 
                <Line 
                    data={{
                        labels: stepsArray,
                        datasets: [{
                            label: "x",
                            data: xArray,
                            backgroundColor: '#A10300',
                            borderColor: 'rgba(199, 71, 69, 0.6)',
                            borderWidth: 2,
                            radius: 4,
                        }]
                    }}
                    width={700}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                    }}
                /> : null}
            </div>
            <div class="collatz">
                {/*<p>
                    x = {input}
                </p>
                <p>
                    steps = {xArray.join(', ')}
                </p>
                <p>
                    jumps = {jumps}
                </p>*/}
            </div>
        </div>
    );
}

export default Collatz;