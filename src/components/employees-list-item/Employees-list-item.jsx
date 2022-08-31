import './employees-list-item.css';

const EmployeesListItem = ({ name, salary, deleteItem }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary} $`} readOnly />
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    onClick={deleteItem}
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

export default EmployeesListItem;