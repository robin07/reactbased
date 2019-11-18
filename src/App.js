import React from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div>
      <Navbar >
        <div className="container">
          <NavbarBrand href="/">Restaurant Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}
}

export default App;
