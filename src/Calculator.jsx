import React,{useState} from 'react';
import './App.css';
const Calculator= ()=>{
    
    const [num1, setNum1] = useState('');
    const [num2, setNum2]= useState('');
    const[result,setResult]= useState('');

    const handleAddition = () => {
        const result = parseFloat(num1) + parseFloat(num2);
        setResult(result);
    };

    const handleSubtraction = () => {
        const result = parseFloat(num1) - parseFloat(num2);
        setResult(result);
    };

    const handleMultiplication = () => {
        const result = parseFloat(num1) * parseFloat(num2);
        setResult(result);
    };

    const handleDivision = () => {
        const result = parseFloat(num1) / parseFloat(num2);
        setResult(result);
    };

    return(
        <>
        <h1>Kunal Basic Calculator</h1>
            <div className='calculator'>
                <input type="text"
                        placeholder='Enter the First Number'
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                />
                <input type="text"
                        placeholder='Enter the Second Number'
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                />

                <label htmlFor="result">Result</label>
                <input type="text"
                        placeholder='Answer'
                        value={result}
                        readOnly
                />

                <br/>

                <input
                type="button"
                value="Addition"
                onClick={handleAddition}
                />
                <input
                    type="button"
                    value="Subtraction"
                    onClick={handleSubtraction}
                />
                <input
                    type="button"
                    value="Multiplication"
                    onClick={handleMultiplication}
                />
                <input
                    type="button"
                    value="Division"
                    onClick={handleDivision}
                />

            </div>

        </>
    )
}
export default Calculator;
