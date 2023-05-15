import { useState } from "react";
import "./AddExpense.css";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddExpense = (props) => {
  const [buttonClick, setButtonClick] = useState(false);
  const [changeField, setChangeField] = useState(false);

  const [value, setValue] = useState({
    title: "",
    date: new Date(),
    amount: 0,
    type: "",
  });

  const clickHandle = () => {
    setButtonClick((prevState) => {
      return !prevState;
    });
  };

  const changeHandler = (event, id) => {
    console.log("DatePicker");
    switch (id) {
      case 1:
        {
          setValue((prevState) => {
            return { ...prevState, title: event.target.value };
          });
        }
        break;
      case 2:
        {
          console.log(event.$d);
          setValue((prevState) => {
            return { ...prevState, date: new Date(event.$d) };
          });
        }
        break;
      case 3:
        {
          setValue((prevState) => {
            return { ...prevState, amount: parseInt(event.target.value) };
          });
        }
        break;
      case 4:
        {
          setValue((prevState) => {
            return { ...prevState, type: event.target.value };
          });
        }
        break;
      case 5: {
        setValue((prevState) => {
          return { ...prevState, type: event.target.value };
        });
      }
    }
  };
  const changeFieldHandler = () => {
    setChangeField((prevState) => {
      return !prevState;
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(value);
    if(value.type === "" || value.amount === 0 || value.title === "" ||value.type === undefined || value.amount === undefined || value.title === undefined ){
      // alert("Please Filled The Value");
    } else{
      props.addExpenseFunc(value);
      alert("Succesfully Added!!");
      setValue({
        title: "",
        date: new Date(),
        amount: 0,
        type: "",
      });
      clickHandle();
    }
  };

  let displayContant = (
    <div className="row">
      <div className="col add-expense-button-css">
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={clickHandle}
        >
          Add Expense
        </Button>
      </div>
    </div>
  );

  const selectFieldDisplay = (
    <FormControl fullWidth>
      <InputLabel id="label-1">Expense Type</InputLabel>
      <Select value={value.type} onChange={(event) => changeHandler(event, 4)}>
        {props.type!==undefined && props.type.map( (ele,index)=>(
          <MenuItem value={ele} key={index}>{ele}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
  const textFieldDisplay = (
    <TextField
      variant="filled"
      onChange={(event) => changeHandler(event, 5)}
      label="Expense-Type"
      fullWidth
      value={value.type}
    />
  );

  if (buttonClick) {
    displayContant = (
      <form onClick={submitHandler}>
        <div className="add-expense-field">
          <div className="row mb-3">
            <div className="col-6">
              <TextField
                variant="filled"
                label="Where You Spend Our Money"
                fullWidth
                onChange={(event) => changeHandler(event, 1)}
                required
                value={value.title}
              />
            </div>
            <div className="col-6">
              <DatePicker
                sx={{ width: "100%" }}
                onChange={(event) => changeHandler(event, 2)}
                label="Date"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <TextField
                variant="filled"
                label="Amount"
                fullWidth
                type="number"
                onChange={(event) => changeHandler(event, 3)}
                value={value.amount}
              />
            </div>
            <div className="col-6">
              {changeField === false && selectFieldDisplay}
              {changeField === true && textFieldDisplay}
              {changeField === false && (
                <p
                  className="add-expense-change-field-p-tag-css"
                  onClick={changeFieldHandler}
                >
                  I Don't find the expense type
                </p>
              )}
              {changeField === true && (
                <p
                  className="add-expense-change-field-p-tag-css"
                  onClick={changeFieldHandler}
                >
                  Back
                </p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-10"></div>
            <div className="col-1">
              <Button
                variant="contained"
                color="error"
                onClick={clickHandle}
                fullWidth
              >
                CANCEL
              </Button>
            </div>
            <div className="col-1">
              <Button
                variant="contained"
                color="success"
                fullWidth
                type="submit"
              >
                ADD
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }

  return <div className="container-fluid">{displayContant}</div>;
};

export default AddExpense;
