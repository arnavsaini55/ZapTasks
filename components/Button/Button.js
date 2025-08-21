import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text } from "react-native";
import style from "./style";

const Button = props => {
  return (
    <Pressable style={[style.button, props.isDisabled && style.disabled]} disabled={props.isDisabled}>
      <Text style={style.title}>
        {props.title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  title: '',
  isDisabled: false,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

export default Button;
