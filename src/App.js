import React from "react";
import NasaPhotos from './components/NasaPhotos';
import "./App.css";


function App() {

  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <NasaPhotos />
    </div>
  );
}

export default App;
