import "./app.css";
import AppHeader from "../AppHeader/AppHeader.js";
import SearchPanel from "../SearchPanel/SearchPanel.js";
import AppFilter from "../AppFilter/AppFilter.js";
import EmployeersList from "../EmployeersList/EmployeersList.js";
import EmployeesAddForm from "../EmployeersAddForm/EmployeersAddForm.js";

function App() {
  const data = [
    { name: "Иван Петров", salary: 90000, increase: false },
    { name: "Петр Сидоров", salary: 110000, increase: true },
    { name: "Май Абрикоосов", salary: 85000, increase: true },
  ];

  return (
    <div className="app">
      <AppHeader />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeersList data={data} />
        <EmployeesAddForm />
      </div>
    </div>
  );
}

export default App;
