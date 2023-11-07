import './App.css';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Higher or Lower</h1>
        <h2>Guess which topic gets googled more each month!</h2>
        <MyButton text="Let's get started!"/>
      </header>
    </div>
  );
}


/*

function App(){
  const planets = [
    { name: "Mars", isGasPlanet: false},
    { name: "Earth", isGasPlanet: false},
    { name: "Jupyter", isGasPlanet: true},
    { name: "Venus", isGasPlanet: false},
    { name: "Neptune", isGasPlanet: true},
    { name: "Uranus", isGasPlanet: true},
  ];
  
  return (<div className = "App">{planets.map((value, key) => (
    value.isGasPlanet && <h1>{value.name}</h1>
  ))}</div>);
}*/

export default App;
