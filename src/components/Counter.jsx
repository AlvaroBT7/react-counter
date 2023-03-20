import "../styles/Counter.css";
import CounterContextProvider from "../context/CounterContext";

const Counter = ({ bgColor = "#222731", width = 200, padding, children }) => {
  return (
    <CounterContextProvider>
      <div
        className="Counter-container"
        style={{ backgroundColor: bgColor, width, padding }}
      >
        {children}
      </div>
    </CounterContextProvider>
  );
};

export default Counter;
