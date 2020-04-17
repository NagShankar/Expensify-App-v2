import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "./../actions/expenses";

const EditExpensePage = (props) => {
  console.log(props); //now props will have the matched expense inside props
  return (
    <div>
      Editing Expense for id: {props.match.params.id}
      <ExpenseForm
        expense={
          props.expense
        } /* passing the matched expense as a prop to ExpenseForm component which then can be used to set the default and populate the fields with that data */
        onSubmission={(expense) => {
          //console.log(expense)
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id })); //remove expense action accepts "id" as an object, check actions/expenses.js for more details
          props.history.push("/"); //redirecting after deleting
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id; //returning the matched expense object from the expenses array
    }),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
