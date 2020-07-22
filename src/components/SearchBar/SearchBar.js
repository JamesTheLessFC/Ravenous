import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
      'Closest To Me': 'distance'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
    this.props.searchYelp(this.state.term, this.state.location, sortByOption);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }


  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

//replaced "this.state.location" in searchYelp() argument with "document.getElementById('txtPlaces').value" so that Google Places Autocomplete selection is used as location.
  handleSearch(event) {
    this.props.searchYelp(this.state.term, document.getElementById('txtPlaces').value, this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>);
    });
  }

//Method to allow 'press enter to search' functionality. Replaced "this.state.location" in searchYelp() argument with "document.getElementById('txtPlaces').value" so that Google Places Autocomplete selection is used as location.
  handleKeyPress(e) {
    if (e.key === 'Enter' && this.state.term && this.state.location) {
      this.props.searchYelp(this.state.term, document.getElementById('txtPlaces').value, this.state.sortBy);
    }
  }

//removed "onChange={this.handleLocationChange}" from properties of second <input> as it is no longer being used.
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} onKeyUp={this.handleKeyPress.bind(this)} />
          <input id="txtPlaces" placeholder="Where?"  onKeyUp={this.handleKeyPress.bind(this)} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
