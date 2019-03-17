import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import uuid from 'uuid';
import About from './components/About';

class App extends Component {

  state = {
    todos : [
        {
            id: uuid.v4(),
            title: 'Sweep the Floor',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Wash the bath',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Finish Homework',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Learn React Native',
            completed: false
        }
    ]
  };

  toggleCompleted = (id) => {
      this.setState({todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
      })})
  };

  delTodo = (id) => {
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  };

  addTodo = (title) => {
      const newTodo = {
          id: uuid.v4(),
          title,
          completed: false
      };
      this.setState({todos: [...this.state.todos, newTodo]})
  };

  render() {
    return (
        <Router>
            <div className="App">
                <div className='container'>
                    <Header/>
                    <Route exact path='/' render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}
                                      delTodo={this.delTodo}/>
                        </React.Fragment>
                    )}/>

                    <Route path='/about' component={About}/>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;