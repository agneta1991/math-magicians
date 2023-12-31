import React from 'react';
import PropTypes from 'prop-types';

function ButtonDiv({ onButtonClick }) {
  const innerHtmlClick = (event) => {
    const value = event.target.innerHTML;
    onButtonClick(value);
  };

  return (
    <div className="btnDiv">
      <button type="button" className="operator" onClick={innerHtmlClick}>
        AC
      </button>
      <button type="button" className="operator" onClick={innerHtmlClick}>
        +/-
      </button>
      <button type="button" className="operator" onClick={innerHtmlClick}>
        %
      </button>
      <button type="button" className="operator" onClick={innerHtmlClick}>
        ÷
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        7
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        8
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        9
      </button>
      <button type="button" className="operator" onClick={innerHtmlClick}>
        *
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        4
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        5
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        6
      </button>
      <button type="button" className="operator" onClick={innerHtmlClick}>
        -
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        1
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        2
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        3
      </button>
      <button type="button" className="operator" onClick={innerHtmlClick}>
        +
      </button>
      <button
        type="button"
        className="number"
        id="zero"
        onClick={innerHtmlClick}
      >
        0
      </button>
      <button type="button" className="number" onClick={innerHtmlClick}>
        .
      </button>
      <button type="button" className="operator equal" onClick={innerHtmlClick}>
        =
      </button>
    </div>
  );
}

ButtonDiv.propTypes = {
  onButtonClick: PropTypes.func,
};

ButtonDiv.defaultProps = {
  onButtonClick: null,
};
export default ButtonDiv;
