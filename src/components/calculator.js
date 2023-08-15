import React, { useState } from 'react';
import ButtonDiv from './buttonsdiv';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    const updatedState = calculate(calculatorState, value);
    setCalculatorState(updatedState);
  };

  return (
    <>
      <h1>Let&apos;s do some math!</h1>
      <div className="calc">
        <div className="screen">
          <span>
            {calculatorState.total}
            {' '}
            {calculatorState.operation}
            {' '}
            {calculatorState.next}
          </span>
        </div>
        <ButtonDiv onButtonClick={handleClick} />
      </div>
    </>
  );
}

export default Calculator;
