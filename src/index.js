import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

const App = () => (
  <div>
    <h1>SUI Design System</h1>
    <Button>Click Me</Button>
    test
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));