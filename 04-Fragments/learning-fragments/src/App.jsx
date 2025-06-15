import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>     
    {/* <></>--or , we can use this  for fragment withount import React      */}
      <h1>Healthy Foods</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Meet</li>
        <l class="list-group-item">Green Vegetable</l>
        <li class="list-group-item">Milk</li>
        <li class="list-group-item">Salad</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
