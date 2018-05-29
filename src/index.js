import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const appContainer = document.querySelector('.container');

// Create a new component. This component should produce some HTML.
// This is a class of a component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it in the DOM.
// <App /> is an instance
ReactDOM.render(<App />, appContainer);
