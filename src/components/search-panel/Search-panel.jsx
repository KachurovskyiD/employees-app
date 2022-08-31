import { useContext } from 'react';

import AppContext from '../../store/context';

import './search-panel.css';

const SearchPanel = () => {
    const { searchValue, setSearchValue } = useContext(AppContext);

    return (
        <input type="text"
            className="form-control search-input"
            placeholder="Знайти співробітника"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />
    )
}

export default SearchPanel;