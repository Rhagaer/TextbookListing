import * as React from 'react';
import './App.css';

import { Textbook } from './model/Textbook';
import { ListingDetail } from './components/listing/ListingDetail';

class App extends React.Component {

  textbook = new Textbook("Name", "Author", "ISBN", 5, "Test")

  public render() {
    return (
      <div className="App">
        <ListingDetail />
      </div>
    );
  }
}

export default App;
