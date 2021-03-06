import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses})
    });
  }

  render() {
    return (
      <div className="App">
          <div className="Content">
            <h1>ravenous</h1>
            <SearchBar searchYelp={this.searchYelp} />
            <BusinessList businesses={this.state.businesses} />
          </div>
          <footer>
            <div className="footer-link" >
              <a href="https://github.com/BlagDaggery/ravenous" title="View GitHub Repository">View GitHub Repository</a>
            </div>
          </footer>
      </div>
    );
  }
}

export default App;
