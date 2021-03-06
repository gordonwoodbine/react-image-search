import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' } ;

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  
  render() {
    return (
      <div className="ui segment">
        <form 
          className="ui form"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label htmlFor="image-search">Image Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              id="image-search" 
              onChange={(e) => this.setState({ term: e.target.value })}
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;