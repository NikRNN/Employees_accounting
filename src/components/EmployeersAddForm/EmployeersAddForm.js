import "./employees-add-form.css";
import { Component } from "react";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  OnValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { addItem } = this.props;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          onSubmit={(e) => {
            addItem(e);
            this.onSubmit();
          }}
          className="add-form d-flex"
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            onChange={this.OnValueChange}
            name="name"
            value={this.state.name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в руб."
            onChange={this.OnValueChange}
            name="salary"
            value={this.state.salary}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
