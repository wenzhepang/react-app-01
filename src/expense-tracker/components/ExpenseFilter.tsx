// Desc: ExpenseFilter component that filters expenses by category
// Usage: {ExpenseFilter}
import categories from "../categories";
interface Props {
  onFilterChange: (category: string) => void;
}

const ExpenseFilter = ({onFilterChange} : Props) => {
  return (
    <select className="form-select" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter