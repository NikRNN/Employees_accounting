import "./app.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AppHeader from "../AppHeader/AppHeader.js";
import SearchPanel from "../SearchPanel/SearchPanel.js";
import AppFilter from "../AppFilter/AppFilter.js";
import EmployeersList from "../EmployeersList/EmployeersList.js";
import EmployeesAddForm from "../EmployeersAddForm/EmployeersAddForm.js";

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

  render() {
    return (
      <div className="app">
        <AppHeader
          onNumberOfEmployees={this.onNumberOfEmployees}
          onNumbersOfIncrease={this.onNumbersofIncrease}
        />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeersList
            data={this.state.data}
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
