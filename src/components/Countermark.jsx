import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import "../styles/Countermark.css";

const Countermark = ({ label="Contermark", fontSize, width }) => {
  const { counter } = useContext(CounterContext);
  return <span className="Countermak-indicator" style={
    { fontSize, width }
  }>{label}: {counter}</span>;
};

export default Countermark;
