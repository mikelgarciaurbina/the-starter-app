import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
