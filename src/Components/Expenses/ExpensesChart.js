import React from 'react';
import Chart from './Components/Chart/Chart'

 const ExpensesChart=()=>{
    const chartDataPoints=[
        {label :'Jan',value :0},
        {label :'Feb',value :0},
        {label :'Mar',value :0},
        {label :'Apr',value :0},
        {label :'May',value :0},
        {label :'June',value :0},
        {label :'Jul',value :0},
        {label :'Aug',value :0},
        {label :'Sept',value :0},
        {label :'Oct',value :0},
        {label :'Nov',value :0},
        {label :'Dec',value :0}
    ];
return (
    <Chart/>
);
 }
 export default ExpensesChart;