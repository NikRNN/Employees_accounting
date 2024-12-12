import "./employeers-list-item.css";

const EmployeersListItem = (props) => {
  const {
    name,
    salary,
    deleteItem,
    id,
    onToggleIncrease,
    onToggleRise,
    increase,
    rise,
  } = props;
  let className = "list-group-item d-flex justify-content-between";

  if (increase) {
    className += " increase";
  }

  if (rise) {
    className += " like";
  }

  return (
    <li className={className}>
      <span
        className={"list-group-item-label like"}
        onClick={() => onToggleRise(id)}
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + " руб."}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={() => onToggleIncrease(id)}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={() => deleteItem(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeersListItem;
