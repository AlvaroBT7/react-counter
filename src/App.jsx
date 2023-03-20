import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Countermark from "./components/Countermark";
import Button from "./components/Button";
import CounterGame from "./components/CounterGame";

function App() {
  return (
    <React.Fragment>
      <CounterGame>
        <Header title="Click Counter App" width={500} fontSize={35} />
        <Counter width={500} padding={30}>
          <Countermark fontSize={20} width={200} label="Counter" />
          <Button title="Add Points to Counter" action="add" padding={20} />
          <Button
            title="Remove Points from Counter"
            action="remove"
            padding={20}
          />
          <Button title="Reset Counter" action="reset" padding={20} />
        </Counter>
      </CounterGame>
    </React.Fragment>
  );
}

export default App;
