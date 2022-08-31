import { useContext } from 'react';

import AppContext from '../../store/context';
import EmployeesListItem from "../employees-list-item/Employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, deleteItem }) => {
    const { searchValue } = useContext(AppContext);

    const filteredItems = data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <ul className="app-list list-group">
            {filteredItems.map((item) => (
                <EmployeesListItem
                    {...item}
                    key={item.id}
                    deleteItem={() => deleteItem(item.id)}
                />
            ))}
        </ul>
    )
}

export default EmployeesList;