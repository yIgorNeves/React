//imagens
import City from "./assets/city.jpg"
//styles | CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <div>Avançando em React</div>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </div>
  );
}

export default App;
