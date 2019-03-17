import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <Todo key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted}
            delTodo={this.props.delTodo}/>
        ))
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

export default TodoList;