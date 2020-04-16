import React from "react";
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from './../actions/expenses'

const AddExpensePage = (props) => (
 <div>
    <h1>Add Expense</h1>
     <ExpenseForm onSubmission={(expense)=>{
       //console.log(expense)
        props.dispatch(addExpense(expense));
        props.history.push('/'); /* routing back to dashboard page after submission using history given by react router */
        }
   }/>
    
    </div>
);

export default connect()(AddExpensePage); //connect gives access to props which allow us to dispatch action