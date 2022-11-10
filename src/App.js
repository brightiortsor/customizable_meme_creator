import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Meme />
      </header>
    </div>
  );
}

export default App;
