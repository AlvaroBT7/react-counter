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


{/* <Countermark fontSize={30} width={300} />
        <Button
          title="Add Points To Counter"
          padding={15}
          fontSize={18}
          action={"add"}
        />
        <Button
          title="Remove Points To Counter"
          padding={15}
          fontSize={18}
          action={"remove"}
        />
        <Button
          title="Reset The Counter"
          padding={15}
          fontSize={18}
          action={"reset"}
        /> */}
