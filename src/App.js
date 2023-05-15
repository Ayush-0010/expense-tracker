import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Expense from './Component/Expense/Expense';

function App({children}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
      <Expense/>
    </LocalizationProvider>
  );
}

export default App;
