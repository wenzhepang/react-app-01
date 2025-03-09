// Desc: ExpenseFilter component that filters expenses by category
// Usage: {ExpenseFilter}
interface Props {
  onFilterChange: (category: string) => void;
}

const ExpenseFilter = ({onFilterChange} : Props) => {
  return (
    <select className="form-select" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Housing">Housing</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Utilities">Utilities</option>
    </select>
  )
}

export default ExpenseFilter