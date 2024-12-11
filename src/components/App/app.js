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
        { name: "Иван Петров", salary: 90000, increase: false, id: uuidv4() },
        { name: "Петр Сидоров", salary: 110000, increase: true, id: uuidv4() },
        { name: "Май Абрикосов", salary: 85000, increase: true, id: uuidv4() },
      ],
    };
  }

  addItem = (e) => {
    e.preventDefault();
    this.setState(({ data }) => {
      const newItem = {
        name: e.target.name.value,
        salary: Number(e.target.salary.value),
        increase: false,
        id: uuidv4(),
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

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeersList data={this.state.data} deleteItem={this.deleteItem} />
          <EmployeesAddForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
