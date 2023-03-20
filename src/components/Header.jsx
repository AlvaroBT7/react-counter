import Card from "./Card";
import "../styles/Header.css";

const Header = ({ title, width, fontSize, bgColor, color }) => {
  return (
    <div className="Counter-header" style={{ backgroundColor: bgColor, width }}>
      <Card
        title={title}
        fontSize={fontSize}
        width="100%"
        bgColor="transparent"
        color={color}
      />
    </div>
  );
};

export default Header;
