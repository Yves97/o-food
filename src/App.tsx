import React, {Component} from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

//component
import { Header } from './components/Header/Header';
//Views
import Home from './views/Home/Home'
import About from './views/About/About';

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
      </Routes>
    );
  }
}

export default App;
