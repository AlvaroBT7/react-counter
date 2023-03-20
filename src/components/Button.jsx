import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import "../styles/Button.css";

const Button = ({ title, fontSize, action = "add", padding = 10 }) => {
  const { counter, setCounter } = useContext(CounterContext);
  const handleButton = () => {
    switch (action) {
      case "add":
        return setCounter(counter + 1);
      case "remove": {
        if (counter > 0) return setCounter(counter - 1);
      }
      case "reset":
        return setCounter(0);
    }
  };
  return (
    <button
      className="Counter-button"
      style={{ fontSize, padding }}
      onClick={handleButton}
    >
      {title}
    </button>
  );
};

export default Button;
