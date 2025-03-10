import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { useState } from "react";
import categories from "./expense-tracker/categories";



const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Rent", amount: 1600, category: "Housing" },
    { id: 2, description: "Groceries", amount: 100, category: "Food" },
    { id: 3, description: "Gas", amount: 40, category: "Transportation" },
    { id: 4, description: "Internet", amount: 60, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter((expense) => expense.category === selectedCategory) : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length+1}])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onFilterChange={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};

export default App;
