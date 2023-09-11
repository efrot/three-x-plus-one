import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import {Line} from "react-chartjs-2";
import CollatzInput from './CollatzInput';
import './Collatz.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const CollatzGraph = (props) => {
    let input = props.x;
    let setSteps = props.setSteps;
    let setX = props.setX;

    let x = parseInt(input);
    let jumps = 0;

    if(x <= 0 || isNaN(x)){
        x = 1;
    }
    
    let xValues = [x];
    let totalSteps = [0];

    do{
        if(x%2===0)
        {
            x/=2;

            jumps++;
            setSteps(jumps);
            totalSteps.push(jumps);
            xValues.push(x);

            
            console.log("GERADE: ");
            console.log(x);

        } else if (x%2!==0)
        {
            x = 3*x+1;

            jumps++;
            setSteps(jumps);
            totalSteps.push(jumps);
            xValues.push(x);

            console.log("UNGERADE: ");
            console.log(x);
            
        }
    } while (x!==1);

    return(
        <div className="collatz-graph-container">
            <h2>Collatz-Chart</h2>
                <Line 
                    data={{
                        labels: totalSteps,
                        datasets: [{
                            label: "x",
                            data: xValues,
                            backgroundColor: '#006d77 ',
                            borderColor: '#006d77 ',
                            borderWidth: 2,
                            radius: 6,
                        }]
                    }}
                    options={{
                        plugins:{
                            legend:{
                                display: false,
                            }
                        },
                        // maintainAspectRatio: true,
                    }}
                />
                <CollatzInput setX={setX}/>
        </div>
    );
}

export default CollatzGraph;