import { useEffect,useState } from "react";
import AddExpense from "../AddExpense/AddExpense";
import ExpenseDisplay from "../ExpenseDisplay/ExpenseDisplay";

const Expense = (props) => {
  const [expense, setExpense] = useState([
    {
      title: "Bike Petrol",
      amount: 100,
      date: new Date("2-18-2023"),
      type: "Petrol",
    },
    {
      title: "Bike",
      amount: 100000,
      date: new Date("2-10-2023"),
      type: "Vehicle",
    },
    {
      title: "Clothes",
      amount: 750,
      date: new Date("3-4-2023"),
      type: "Clothes",
    },
    {
      title: "Shoes",
      amount: 2500,
      date: new Date("4-9-2023"),
      type: "Shoes",
    },
  ]);
  const [type, setType] = useState(["Petrol", "Bike", "Clothes", "Shoes"]);
  const [year,setYear] = useState(["2023"]);

  const addExpenseFunc = (obj) => {
    const arr = type;
    if (arr.indexOf(obj.type) === -1)
      setType((prevState) => {
        return [...prevState, obj.type];
      });
    if(arr.indexOf(obj.date.getFullYear().toString()) === -1) setYear(prevState => { return [...prevState,`${obj.date.getFullYear()}`]})

    setExpense(prevState => {return [...prevState,obj]}); //Add Expense to expense array.
  };
  
  return (
    <div>
      <AddExpense addExpenseFunc={addExpenseFunc} type={type} />
      <ExpenseDisplay expenseData={expense} year={year}/>
    </div>
  );
};

export default Expense;
