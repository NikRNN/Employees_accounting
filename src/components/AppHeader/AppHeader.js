import "./appHeader.css";

const AppHeader = ({ onNumberOfEmployees, onNumbersOfIncrease }) => {
  return (
    <div className="app-header">
      <h1>Учет работников в компании</h1>
      <h2>Общее число работников:{" " + onNumberOfEmployees()}</h2>
      <h2>Премию получат:{" " + onNumbersOfIncrease()}</h2>
    </div>
  );
};

export default AppHeader;
