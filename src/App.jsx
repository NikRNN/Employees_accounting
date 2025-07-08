import "./components/App/app.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import SearchPanel from "./components/SearchPanel/SearchPanel.jsx";
import AppFilter from "./components/AppFilter/AppFilter.jsx";
import EmployeersList from "./components/EmployeesList/EmployeesList.jsx";
import EmployeesAddForm from "./components/EmployeesAddForm/EmployeesAddForm.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Иван Петров",
          salary: 90000,
          increase: false,
          id: uuidv4(),
          rise: false,
        },
        {
          name: "Петр Сидоров",
          salary: 110000,
          increase: false,
          id: uuidv4(),
          rise: false,
        },
        {
          name: "Май Абрикосов",
          salary: 85000,
          increase: false,
          id: uuidv4(),
          rise: false,
        },
      ],
      term: "",
      filterButton: "",
    };
  }

  addItem = (e) => {
    e.preventDefault();
    if (e.target.name.value === "" || e.target.salary.value === "") {
      return;
    }
    this.setState(({ data }) => {
      const newItem = {
        name: e.target.name.value,
        salary: e.target.salary.value,
        increase: false,
        id: uuidv4(),
        rise: false,
      };
      return {
        data: [...data, newItem],
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newArr = data.filter((item) => {
        return item.id !== id;
      });
      return { data: newArr };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        return item.id === id ? { ...item, increase: !item.increase } : item;
      });
      return { data: newArr };
    });
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        return item.id === id ? { ...item, rise: !item.rise } : item;
      });
      return { data: newArr };
    });
  };

  onNumberOfEmployees = () => this.state.data.length;

  onNumbersofIncrease = () => {
    let count = 0;
    this.state.data.forEach((item) => (item.increase ? (count += 1) : ""));
    return count;
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });
  };

  updateTerm = (term) => {
    return this.setState({ term: term });
  };

  onFilterEmployees = (items, filter) => {
    let filtered;
    switch (filter) {
      case "increaseEmployees":
        filtered = items.filter((item) => item.increase === true);
        break;
      case "bigSalary":
        filtered = items.filter((item) => item.salary > 100000);
        break;
      default:
        filtered = items;
        break;
    }
    return filtered;
  };

  updateFilter = (filter) => {
    return this.setState({ filterButton: filter });
  };

  render() {
    const { data, term } = this.state;
    const searchElements = this.onFilterEmployees(
      this.searchEmp(data, term),
      this.state.filterButton
    );

    return (
      <div className="app">
        <AppHeader
          onNumberOfEmployees={this.onNumberOfEmployees}
          onNumbersOfIncrease={this.onNumbersofIncrease}
        />
        <div className="search-panel">
          <SearchPanel updateTerm={this.updateTerm} />
          <AppFilter updateFilter={this.updateFilter} />
          <EmployeersList
            data={searchElements}
            deleteItem={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
          />
          <EmployeesAddForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
