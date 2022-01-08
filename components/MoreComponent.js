import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

import Task from './Task';

import {
  background,
  textDark,
  secondary,
  green,
  backgroundWrapper,
} from '../theme/colors';

const MoreComponent = () => {
  const [task, setTask] = useState();
  const [items, setItems] = useState(['Kupić gazetę', 'Napraw pralkę']);
  const [error, setError] = useState(false);
  const handleAddTask = () => {
    if (items.length < 6) {
      Keyboard.dismiss();
      setItems([...items, task]);
      setTask(null);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleDeleteTask = index => {
    let itemCopy = [...items];
    itemCopy.splice(index, 1);
    setItems(itemCopy);
    setError(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {items.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleDeleteTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {error ? (
        <View>
          <Text style={styles.warning}>
            You can add maximum 6 tasks for today. Delete completed tasks!
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: background,
  },
  tasksWrapper: {
    paddingTop: 8,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: textDark,
    fontFamily: 'Montserrat-Bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: -80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: backgroundWrapper,
    width: 250,
    borderRadius: 60,
    borderColor: green,
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: backgroundWrapper,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: green,
    borderWidth: 1,
  },
  addText: {},
  warning: {
    color: secondary,
  },
});

export default MoreComponent;
