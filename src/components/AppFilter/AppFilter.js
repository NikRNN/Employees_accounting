import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      activeButton: "allEmployees",
    };
  }

  updateFilter = (e) => {
    const filter = e.target.dataset.name;
    this.setState({ filter: filter });
    this.setState({ activeButton: filter });
    this.props.updateFilter(filter);
  };

  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className={
            this.state.activeButton === "allEmployees"
              ? "btn btn-light"
              : "btn btn-outline-light"
          }
          data-name="allEmployees"
          onClick={this.updateFilter}
        >
          Все сотрудники
        </button>
        <button
          type="button"
          className={
            this.state.activeButton === "increaseEmployees"
              ? "btn btn-light"
              : "btn btn-outline-light"
          }
          data-name="increaseEmployees"
          onClick={this.updateFilter}
        >
          Сотрудники на повышение
        </button>
        <button
          type="button"
          className={
            this.state.activeButton === "bigSalary"
              ? "btn btn-light"
              : "btn btn-outline-light"
          }
          data-name="bigSalary"
          onClick={this.updateFilter}
        >
          Сотрудники с зарплатой более 100 000 руб.
        </button>
      </div>
    );
  }
}

export default AppFilter;
