import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import { Box } from "./pages/Box";
import boxes from "./pages/boxes";

function App() {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return (
    <div className="App">
      <header>
        {/* <Header />
        <Meme /> */}
        {squareElements}
      </header>
    </div>
  );
}

export default App;
