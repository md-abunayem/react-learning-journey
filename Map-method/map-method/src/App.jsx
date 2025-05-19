// import './App.css'

function App() {
  let foodItems = ['Dal',"Green vegitable", "Roti","Salad","Milk"]

  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item) => 
                <li key={item} className="list-group-item">{item}</li>
        )}
        
      </ul>
    </>
  )
}

export default App
