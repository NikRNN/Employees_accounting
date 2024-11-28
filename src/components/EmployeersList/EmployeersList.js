import "./employeers-list.css";
import EmployeersListItem from "../EmployeersListItem/EmployeersListItem";

const EmployeersList = ({ data }) => {
  const elements = data.map((item) => {
    return (
      <EmployeersListItem
        name={item.name}
        salary={item.salary}
        increase={item.increase}
      />
    );
  });

  return (
    <ul className="app-list list-group">
      {/* <EmployeersListItem name="Иван Иванов" salary={110000} />
      <EmployeersListItem name="Петр Свиридов" salary={90000} /> */}
      {elements}
    </ul>
  );
};

export default EmployeersList;
