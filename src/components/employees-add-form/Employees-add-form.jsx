import { useState } from 'react';

import './employees-add-form.css';

const EmployeesAddForm = ({ addItem }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (name.length < 3 || !salary) return;
        addItem(name, salary);
    }

    return (
        <div className="app-add-form">
            <h3>Додати нового співробітника</h3>
            <form onSubmit={onSubmit}
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Ім'я співробітника"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П у $"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)} />
                <button type="submit"
                    className="btn btn-outline-light">Додати</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;