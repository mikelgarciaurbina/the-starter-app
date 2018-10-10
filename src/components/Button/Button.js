import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Button = ({ disabled, label, onPress }) => {
  const containerStyle = [
    styles.container,
    disabled ? styles.containerDisabled : styles.containerEnabled
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={containerStyle}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
