import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {

    getItemStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    };


    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getItemStyle()}>
                <input type='checkbox'
                       onChange={this.props.toggleCompleted.bind(this, id)}/> {' '}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        );
    }
}


Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default Todo;