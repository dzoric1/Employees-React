import './app-info.css';

const AppInfo = ({ empoyeesCount, increaseCount }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании</h1>
      <h2>Общее число сотрудников: {empoyeesCount}</h2>
      <h2>Премию получат: {increaseCount}</h2>
    </div>
  )
}

export default AppInfo;