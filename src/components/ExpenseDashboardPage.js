import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
 <div>
      <p>From dashborad along with Expense list</p>
       <ExpenseListFilters />
       <ExpenseList />
           
    </div>
);


export default ExpenseDashboardPage;