import React from "react";
import NasaGrid from './components/NasaGrid';
import "./App.css";


function App() {

  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <NasaGrid />
    </div>
  );
}

export default App;
