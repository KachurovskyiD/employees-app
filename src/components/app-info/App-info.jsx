import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
    return (
        <div className="app-info">
            <h1>Загальна кількість співробітників : {employees}</h1>
            <h2>Заробітна плата вище за 1000$ : {increased}</h2>
        </div>
    )
}

export default AppInfo;