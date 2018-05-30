import React, { Component } from 'react';

// Whenever state is changed, the component rerenders
// and forces all child components to rerender as well
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // State is a plain JS object that exists on class based components
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
