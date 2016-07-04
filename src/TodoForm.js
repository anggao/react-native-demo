import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export const TodoForm = (props) => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.handleChangeText}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={props.handlePress}
    >
      <Text style={styles.buttonText}>
        Create
      </Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    height: 50,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
