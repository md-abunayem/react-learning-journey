import "./App.css";

function App() {
  let foodItems = ["Dal", "Meet", "Green Vegitable", "Milk", "Salad"];

  let unhealthy = [];
  // let unhealthy = ["peyazu", "Singars", "Somocha"];

  //let food = []
  // if-else condition
  // if (food.length === 0){
  //   return "I am hungry";
  // }

  let emptyMessage = unhealthy.length === 0 ? <h3>i am still hungry</h3> : null;


  // let drinks = ["Mojo", "Pepsi", "Coca Cola","7up"]
  let drinks = []

  return (
    <>
      <h1>Healthy Foods</h1>

      {/* ternary operator
      {foodItems.length === 0? <h3>I am still hungry...</h3> : null} */}

      <ul class="list-group">
        {foodItems.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>

      <h1>Unhealthy Foods</h1>
      <ul class="list-group">
      {emptyMessage}
        {unhealthy.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>


      <h1>DRINKS</h1>
      <ul class="list-group">
        {drinks.length === 0 && <h3>This is not served</h3>}
        {drinks.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
