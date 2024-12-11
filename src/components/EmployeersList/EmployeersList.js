import "./employeers-list.css";
import EmployeersListItem from "../EmployeersListItem/EmployeersListItem";

const EmployeersList = ({ data, deleteItem }) => {
  const elements = data.map((item) => {
    return (
      <EmployeersListItem
        name={item.name}
        salary={item.salary}
        key={item.id}
        id={item.id}
        deleteItem={deleteItem}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
