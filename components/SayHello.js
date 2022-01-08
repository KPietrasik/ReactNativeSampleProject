import React from 'react';
import {View, Text} from 'react-native';

const SayHello = props => {
  const showMessage = isClicked => {
    return isClicked
      ? 'Thank you for using my App'
      : 'Hello User! To use an option, press the button.';
  };

  return (
    <View>
      <Text>{showMessage(props.isClicked)}</Text>
    </View>

  );
};

export default SayHello;