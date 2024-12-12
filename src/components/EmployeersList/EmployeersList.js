import "./employeers-list.css";
import EmployeersListItem from "../EmployeersListItem/EmployeersListItem";

const EmployeersList = ({
  data,
  deleteItem,
  onToggleIncrease,
  onToggleRise,
}) => {
  const elements = data.map((item) => {
    return (
      <EmployeersListItem
        name={item.name}
        salary={item.salary}
        key={item.id}
        id={item.id}
        deleteItem={deleteItem}
        onToggleIncrease={onToggleIncrease}
        onToggleRise={onToggleRise}
        increase={item.increase}
        rise={item.rise}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
