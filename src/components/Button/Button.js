import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { THEME } from "../../constants";

import styles from "./styles";

const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
