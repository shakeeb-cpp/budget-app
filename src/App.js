import './App.css';
import AddExpenseForm from './components/AddExpenseForm';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import { AppProvider } from "./context/AppContext";


function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">

            <Budget />
          </div>

          <div className="col-sm">
            <Remaining />
          </div>

          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <h3 className="mt-3">Expenses</h3>


          <div className="col-sm">
            <ExpenseList />
          </div>

          <h3 className="mt-3">Add Expenses</h3>


          <div className="col-sm">
            <AddExpenseForm />
          </div>


        </div>
      </div>
    </AppProvider>

  );
}

export default App;
