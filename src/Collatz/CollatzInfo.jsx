import './Collatz.css';

const CollatzInfo = (props) => {
    let steps = props.steps;

    return (
        <div className="collatz-info-container">
            <h2>Calculation</h2>
            <p>Steps: {steps}</p>
        </div>
    )

}

export default CollatzInfo;