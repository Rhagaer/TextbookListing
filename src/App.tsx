import * as React from 'react';
import './App.css';

import { Textbook } from './model/Textbook';
import { ListingDetail } from './components/listing/ListingDetail';
import { Data } from "./testing/data"


class App extends React.Component {

  textbook = new Textbook("Physics", "Knight", "1234 5678 90123", 5, "https://canadaeschool.ca/wp-content/uploads/2013/11/SPH3U-Textbook-Cover.jpg")
  data = new Data()
  listings = this.data.listings
  sellers = this.data.sellers

  public render() {
    console.log(this.listings)
    return (
      <div className="App">
        <ListingDetail textbook={this.textbook} listings={this.listings} sellers={this.sellers} />
      </div>
    );
  }
}

export default App;
