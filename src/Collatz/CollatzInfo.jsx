import './Collatz.css';
import parse from 'html-react-parser';

const CollatzInfo = (props) => {
    let steps = props.steps;
    let xValues = props.xValues;

    console.log(xValues);

    const generateCalculationWay = (xValues) => {
        let caluclationWay = "";
        xValues.forEach((xValue, index) => {
            caluclationWay += `<h3>Step ${index+1}</h3>`;
            if (xValue %2 == 0) {
                caluclationWay += `<p>The number <b>${xValue}</b> is even, divide it by 2.</p>`
            } else {
                caluclationWay += `<p>The number <b>${xValue}</b> is uneven, multiply by 3 and add 1.</p>`
            }
        });
        return caluclationWay;
    } 

    return (
        <div className="collatz-info-container">
            <h2 className="calculation-title">Calculation</h2>
            {parse(generateCalculationWay(xValues))}
        </div>
    )

}

export default CollatzInfo;