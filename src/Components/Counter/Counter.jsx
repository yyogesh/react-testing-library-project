import React from 'react'

const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    const [inputValue, setInputValue] = React.useState(1);
    return (
        <div>
            <h1>Counter App 1</h1>
            <h1 data-testid="subtitle">Counter Subtitle</h1>
            <h2 data-testid="counter">{counter}</h2>
            <button data-testid="subtract-btn">-</button>
            <input type="number" data-testid="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button data-testid="add-btn">+</button>
        </div>
    )
}

export default Counter
