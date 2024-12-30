import React from 'react';
import './App.css';

function App() {
  // ��ť����¼�
  const handleClick = (button) => {
    console.log(`${button} clicked`);
  };

  return (
    <div className="App">
      <h1>Web Application</h1>
      <div>
        <button onClick={() => handleClick('�ӿ�1')}>�ӿ�1</button>
        <button onClick={() => handleClick('�ӿ�2')}>�ӿ�2</button>
      </div>
    </div>
  );
}

export default App;
