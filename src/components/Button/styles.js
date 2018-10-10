import { StyleSheet } from "react-native";

import { THEME } from "../../constants";

const { DODGER_BLUE, WHITE } = THEME;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: DODGER_BLUE,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  containerEnabled: {
    opacity: 1
  },
  containerDisabled: {
    opacity: 0.3
  },
  text: {
    color: WHITE,
    textAlign: "center",
    height: 20
  }
});

export default styles;
