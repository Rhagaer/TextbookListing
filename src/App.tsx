import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import { Textbook } from './model/Textbook';
import { TextbookDetail } from './components/Textbook/TextbookDetail';
import { SellerList } from './components/seller/SellerList';

class App extends React.Component {

  textbook = new Textbook("Name", "Author", "ISBN", 5, "Test")

  public render() {
    return (
      <div className="App">
        <SellerList/>
      </div>
    );
  }
}

export default App;
