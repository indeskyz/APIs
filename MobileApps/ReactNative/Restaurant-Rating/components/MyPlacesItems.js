import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({
  textValue,
  id,
  onRemove,
  Details,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.inputValue}>{textValue}</Text>
        <Button title="Details" onPress={Details} />

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={onRemove(id)}>
              <Icon name="delete" size={30} color="#e33057" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },

  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  inputValue: {
    right: 10,
    fontSize: 30,
  },
});

export default TodoListItem;
