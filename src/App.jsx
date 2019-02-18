import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';


ReactDOM.render(
  // Go to Container.jsx and define propTypes for someString and someNumber
  <Container
    someString=''
    someNumber={5}
  />, document.querySelector('#target'),
);
