import React from "react";
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount,  sortByDate, setStartDate, setEndDate} from './../actions/filters'

//converted to class component
class ExpenseListFilters extends React.Component {
   state={
       calendarFocused:null
   }

//onDatesChange take an object with destructured start date and end date, refer doc
changingDate = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
    
}

changeFocus= (calendarFocused) => {
    
    this.setState(()=>({calendarFocused:calendarFocused}))
    
}

   render(){   
             
       return(
  
        <div>
          <input type="text" 
              value={this.props.filters.text} 
              onChange={(e)=>{
                  this.props.dispatch(setTextFilter(e.target.value))
               }}
           />

      <select value={this.props.filters.sortBy} onChange={(e) => {
                        //alert(e.target.value)
                       if(e.target.value === 'amount'){
                        
                        this.props.dispatch(sortByAmount(e.target.value))
                        
                       }else if(e.target.value === 'date'){
                           
                            this.props.dispatch(sortByDate(e.target.value))
                       }


                       }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
            
       </select>
    
      <DateRangePicker 
           startDateId={"dwjkhqkehwqjkeq"}
           endDateId={"cxzvcxbzbczxbz"}
           startDate={this.props.filters.startDate}
           endDate={this.props.filters.endDate}
           onDatesChange={this.changingDate}
           focusedInput={this.state.calendarFocused}
           onFocusChange={this.changeFocus}
           showClearDates={true} //clear the date range by clicking on "X" mark
           numberOfMonths={1} /*change this number to see as many calendars you want */
           isOutsideRange={()=>false} /*enables past/finished dates as well, you can set range also, refer doc */
       /> 
        
        </div>
    
    );
}

}

const mapStateToProps = (state) => { //accessing state of the store
    return {
        filters: state.filters //grabbing only filters state
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);