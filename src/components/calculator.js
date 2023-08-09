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
    <div className="calc">
      <div className="screen">
        <span>
          {calculatorState.next || calculatorState.total || '0'}
        </span>
      </div>
      <ButtonDiv onButtonClick={handleClick} />
    </div>
  );
}

export default Calculator;
