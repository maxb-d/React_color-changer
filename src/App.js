import React from "react";

import Square from "./Square";
import Input from "./Input";

function App() {

  const [colorValue, setColorValue] = React.useState('')
  const [hexValue, setHexValue] = React.useState('')
  const [isDarkText, setIsDarkText] = React.useState(true)

  return (
    <div className="App">
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
