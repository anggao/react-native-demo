import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { TodoForm } from './TodoForm';
import { createTodo, getTodos } from './actionCreator';

class _Todo extends Component {
  // static defaultProps = {
  //   todos: []
  // }

  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  componentDidMount() {
    this.props.getTodos();
  }

  handleChangeText(text) {
    this.setState({
      newTodo: text
    })
  }

  handlePress() {
    this.props.createTodo(this.state.newTodo);
    // const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      // todos,
      newTodo: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TodoForm
          value = {this.state.newTodo}
          handleChangeText = {this.handleChangeText.bind(this)}
          handlePress = {this.handlePress.bind(this)}
        />
        <View style={styles.todos}>
          {this.props.todos.map((todo, i) => (
            <View key={i} style={styles.todo}>
              <Text style={styles.todoText}>{todo.name}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const mapActionsToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch(createTodo({name: todo}))
  },
  getTodos() {
    dispatch(getTodos())
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
});

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  todos: {
    marginTop: 60
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
});

export default Todo;
