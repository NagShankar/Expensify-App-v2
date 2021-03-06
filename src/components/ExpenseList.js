import React from "react";
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleFilters from './../selectors/expenses'

const ExpenseList = (props) => {
    return(
     <div>
         <h2>From Expense List</h2>
       {/* {props.expenses.length}
        {props.filters.text} */}
        
          {props.expenses.map((expense)=>{
              return <ExpenseListItem key={expense.id} {...expense} /> 
           })}
        {/* spreading the remaining data as ...expense */}
        </div>
    
    );
}

//const ConnectedExpenseList = connect((state)=>{ //first argument is the state from the store, can be given any name
//    return{
//      //name:"nag"
//        expenses:state.expenses
//    };
//})(ExpenseList);
//
//export default ConnectedExpenseList;


//instead of manually assigning to variable, exporting and then importing it, we can have unnamed export like below, this is most prefered way

//instead passing function to Connect as first argument, its common practice to store that function in widely used variable "mapStateToProps" it literally means we are mapping store's State to Props to use it inside component

//when store chnages, the state here(in argument) gets automatically updated and stays upto date with the current data and then re-renders the component when soething chnages, so no need for component to subscribe
const mapStateToProps = (state)=> { //first argument is the state from the store, can be given any name
    return{
      //name:"nag"
        expenses:getVisibleFilters(state.expenses, state.filters),
        //filters:state.filters //we dont want to take data directly from state, because its not filtered or sorted, we want it filtered every time hence sending it to getVisibleFilters component
    };
};

export default connect(mapStateToProps)(ExpenseList);

 



//using it in dashboard file