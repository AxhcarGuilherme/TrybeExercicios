import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
     {Task('olá')}
    </div>
  );
}

export default App;
