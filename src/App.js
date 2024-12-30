import React from 'react';
import './App.css';

function App() {
  // 按钮点击事件
  const handleClick = (button) => {
    console.log(`${button} clicked`);
  };

  return (
    <div className="App">
      <h1>Web Application</h1>
      <div>
        <button onClick={() => handleClick('接口1')}>接口1</button>
        <button onClick={() => handleClick('接口2')}>接口2</button>
      </div>
    </div>
  );
}

export default App;
