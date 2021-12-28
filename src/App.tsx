import React, {Component} from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

//Views
import Home from './views/Home/Home'
import About from './views/About/About';
import Menu from './views/Menu/Menu';
import DetailsMenu from './views/Menu/Details';

class App extends Component {
  render(): React.ReactNode {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
          />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/menu/:id" element={<DetailsMenu/>} />
          
      </Routes>
    );
  }
}

export default App;
