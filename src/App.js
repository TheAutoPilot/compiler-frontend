import React, { useState } from 'react';

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleRunCode = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/run-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setResult(data.output);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app">
      <div className="code-editor">
        <textarea
          value={code}
          onChange={handleCodeChange}
          placeholder="Enter your code here..."
        />
        <button onClick={handleRunCode}>Run</button>
      </div>
      <div className="result">
        <textarea
          value={result}
          readOnly
          placeholder="Result will be displayed here..."
        />
      </div>
    </div>
  );
}

export default App;
