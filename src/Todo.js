import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [1,2,3],
      newTodo: ''
    };
  }

  handleChangeText(text) {
    this.setState({
      newTodo: text
    })
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos,
      newTodo: ''
    })
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleChangeText.bind(this)}
        />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>
            Create
          </Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}
        </View>
      </View>
    );
  }
}

export default Todo;
