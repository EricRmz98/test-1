import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../store/slices/counter.slice';

const Sum = () => {
  const [inputValue, setInputValue] = useState(1);
  const [resultValue, setResultValue] = useState(1);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const numericValue = parseInt(value);
    
    setInputValue(value);
    //only positive values are allowed
    if (numericValue <= 0) return;

    const result = (numericValue * (numericValue + 1)) / 2;
    setResultValue(result);
  }

  return (
    <div>
      <input type='number' value={inputValue} onChange={handleInputChange}></input>
      {inputValue >= 1 ? <span> {resultValue}</span> : <span> Solo se permiten números positivos</span>}
    </div>
  );
};

export default Sum;