import "./employeers-list-item.css";
import { Component } from "react";

class EmployeersListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      increase: false,
      like: false,
    };
  }

  Increase = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  Like = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { name, salary, deleteItem, id } = this.props;
    const { increase, like } = this.state;
    let className = "list-group-item d-flex justify-content-between";

    if (increase) {
      className += " increase";
    }

    if (like) {
      className += " like";
    }

    return (
      <li className={className}>
        <span className={"list-group-item-label like"} onClick={this.Like}>
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
            onClick={this.Increase}
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
  }
}

export default EmployeersListItem;
