import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './ExpenseDisplay.css';
import { useEffect, useState } from 'react';
import ExpenseCart from './ExpenseCart/ExpenseCart';

const ExpenseDisplay = (props) => {
    const [selectedYear,setSelectedYear] = useState("2023");
    const [data,setData] = useState(props.expenseData);

    const selectedYearHandler = (event) => {
        setSelectedYear(event.target.value);
        const date =  event.target.value;
        let arr = props.expenseData;
        // console.log(arr);
        // console.log(props.year);
        console.log(typeof date);
        let arr1=[];
        for(let ele of arr){
            // console.log(ele);
            if(ele.date.getFullYear().toString() === date)
                arr1.push(ele);
        }
        setData(arr1); 
    }
    useEffect(()=>{
        setData(props.expenseData);
    },[props.expenseData]);

    return(
        <div className='container-fluid'>
            <div className="row mb-3">
                <div className="col-9"/>
                <div className="col-3">
                    <FormControl fullWidth>
                        <InputLabel id="label-1">Select Year</InputLabel>
                        <Select value={selectedYear} onChange={selectedYearHandler}>
                            {props.year.map( (ele,index) => (
                                <MenuItem value={ele} key={index} >{ele}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {data.map( (ele,index) => (
                        <ExpenseCart key={index} title={ele.title} date={ele.date} amount={ele.amount} type={ele.type}/>
                    ))}
                </div>
            </div>
        </div>
    )   
}
export default ExpenseDisplay;