import React from "react";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="head_area">
          <input type="number" className="head_input" />
        </div>
        <div className="body_area">
          <div className="body_row">
            <button className="body_button">AC</button>
            <button className="body_button">+/-</button>
            <button className="body_button">%</button>
            <button className="body_button">/</button>
            <button className="body_button">7</button>
            <button className="body_button">8</button>
            <button className="body_button">9</button>
            <button className="body_button">X</button>
            <button className="body_button">4</button>
            <button className="body_button">5</button>
            <button className="body_button">6</button>
            <button className="body_button">-</button>
            <button className="body_button">1</button>
            <button className="body_button">2</button>
            <button className="body_button">3</button>
            <button className="body_button">+</button>
            <button className="body_button">0</button>
            <button className="body_button">.</button>
            <button className="body_button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
