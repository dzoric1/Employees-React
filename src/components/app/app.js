import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    { name: 'John C.', salary: 800, increase: false },
    { name: 'Alex M.', salary: 3000, increase: true },
    { name: 'Carl W.', salary: 5000, increase: false },
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeesList data={data} />
        <EmployeesAddForm />
      </div>
    </div>
  )
}

export default App;