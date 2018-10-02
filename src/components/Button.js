import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { THEME } from "../constants";

class Button extends Component {
  render() {
    const { label, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.DODGER_BLUE,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: THEME.WHITE,
    textAlign: "center",
    height: 20
  }
});

export default Button;
