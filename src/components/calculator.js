function Calculator() {
  return (
    <div className="calc">
      <div className="screen">
        <span>0</span>
        0
      </div>
      <div className="btnDiv">
        <button type="button" className="operator">AC</button>
        <button type="button" className="operator">+/-</button>
        <button type="button" className="operator">%</button>
        <button type="button" className="operator">+</button>
        <button type="button" className="number">7</button>
        <button type="button" className="number">8</button>
        <button type="button" className="number">9</button>
        <button type="button" className="operator">x</button>
        <button type="button" className="number">4</button>
        <button type="button" className="number">5</button>
        <button type="button" className="number">6</button>
        <button type="button" className="operator">-</button>
        <button type="button" className="number">1</button>
        <button type="button" className="number">2</button>
        <button type="button" className="number">3</button>
        <button type="button" className="operator">+</button>
        <button type="button" className="number zero">0</button>
        <button type="button" className="number">.</button>
        <button type="button" className="operator equal">=</button>
      </div>
    </div>
  );
}
export default Calculator;
