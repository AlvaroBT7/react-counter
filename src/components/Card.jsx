import "../styles/Card.css";

const Card = ({
  title = "Card component",
  width = 200,
  fontSize = 20,
  bgColor = "#222731",
  color = "#fff",
}) => {
  return (
    <header>
      <div
        className="Card-container"
        style={{ width, backgroundColor: bgColor, color }}
      >
        <h1 className="Card-title" style={{ fontSize }}>
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Card;
