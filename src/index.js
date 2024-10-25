import React from 'react';
import ReactDOM from 'react-dom';
import TypeButtonStyle from './components/Button';

const App = () => (
  <div>
    <h1>SUI Design System</h1>
    <TypeButtonStyle>Click Me</TypeButtonStyle>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));