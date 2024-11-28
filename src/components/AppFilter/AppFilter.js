import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">
        Все сотрудники
      </button>
      <button type="button" className="btn btn-outline-light">
        Сотрудники на повышение
      </button>
      <button type="button" className="btn btn-outline-light">
        Сотрудники с зарплатой более 100 000 руб.
      </button>
    </div>
  );
};

export default AppFilter;
