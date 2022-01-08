import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const Button = props => {
  const {viewStyle, textStyle, imageStyle} = styles;
  const {icon, text, func, backgroundColor} = props;
  return (
    <TouchableOpacity style={{...viewStyle, backgroundColor}} onPress={() => props.func(props.status)}>
      <Text style={textStyle}>{text}</Text>
      <Image style={imageStyle} source={icon} />
    </TouchableOpacity>

  );
};
const styles = StyleSheet.create({
  viewStyle: {
    height: 50,
    width: 200,
    borderRadius: 40,
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default Button;