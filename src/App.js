
import './App.css';

function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '100b8fcb70msh4f262bd72374094p1207a7jsnaded30b50051',
      'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
    }
  };
  
  fetch('https://mdblist.p.rapidapi.com/?s=jaws&m=show', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
