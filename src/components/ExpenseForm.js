import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount) : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChanged = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusedChanged = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please provide description & amount." }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />{" "}
          <br />
          <br />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <br />
          <br />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChanged}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusedChanged}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />
          <br />
          <textarea
            placeholder="Add a note for your expense. (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <br />
          <br />
          <button onClick={this.onSubmit}>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
