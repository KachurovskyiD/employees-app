import { useState } from 'react';

import AppInfo from '../app-info/App-info';
import SearchPanel from '../search-panel/Search-panel.jsx';
import AppFilter from '../app-filter/App-filter';
import EmployeesList from '../employees-list/Employees-list';
import EmployeesAddForm from '../employees-add-form/Employees-add-form';

import AppContext from '../../store/context';

import './app.css';

const usersData = [
  { name: 'John Cena', salary: '800', id: 1 },
  { name: 'Alex Riley', salary: '3000', id: 2 },
  { name: 'Randy Orton', salary: '5000', id: 3 },
];

function findMaxId() {
  let id = 1;
  usersData.forEach((item) => {
    if (item.id >= id) {
      id = item.id;
    }
  });
  return ++id;
}

function App() {
  const [data, setData] = useState(usersData);
  let [id, setId] = useState(findMaxId);
  const [filter, setFilter] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      id: id++
    };
    setId((prev) => prev + 1);
    setData((data) => [...data, newItem]);
  }

  const deleteItem = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  }

  const filterPost = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  const onFilterSelect = (filter) => {
    setFilter(filter);
  }

  const visibleData = filterPost(data, filter);
  const employees = data.length;
  const increased = visibleData.length;

  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }} >
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel searchValue={searchValue} setSearchValue={setSearchValue} />
          <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
        </div>
        <EmployeesList data={visibleData} deleteItem={deleteItem} searchValue={searchValue} />
        <EmployeesAddForm addItem={addItem} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
