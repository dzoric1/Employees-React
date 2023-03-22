import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 },
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }

    this.setState(({ data }) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

  onToogleIncrease = (id) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return {
    //     data: newArr
    //   }
    // })
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item;
      })
    }))
  }

  onToogleRise = (id) => {
    console.log(id)
  }

  increaseCount = () => {
    const count = this.state.data.filter(item => {
      return item.increase === true
    }).length

    return count
  }

  render() {
    return (
      <div className="app" >
        <AppInfo
          empoyeesCount={this.state.data.length}
          increaseCount={this.increaseCount()}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeesList
            data={this.state.data}
            onDelete={this.deleteItem}
            onToogleIncrease={this.onToogleIncrease}
            onToogleRise={this.onToogleRise} />
          <EmployeesAddForm
            onAdd={this.addItem} />
        </div>
      </div>
    )
  }
}

export default App;