import React from "react";

import Square from "./Square";
import Input from "./Input";

function App() {

  const [colorValue, setColorValue] = React.useState('')
  const [hexValue, setHexValue] = React.useState('')

  return (
    <div className="App">
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
      />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
