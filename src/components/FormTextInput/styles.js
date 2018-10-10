import { Platform, StyleSheet } from "react-native";

import { THEME } from "../../constants";

const { SILVER, TORCH_RED } = THEME;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  textInput: {
    height: 40,
    ...Platform.select({
      ios: {
        borderColor: SILVER,
        borderBottomWidth: StyleSheet.hairlineWidth
      },
      android: {
        paddingLeft: 6
      }
    })
  },
  errorText: {
    height: 20,
    color: TORCH_RED,
    ...Platform.select({
      android: {
        paddingLeft: 6
      }
    })
  }
});

export default styles;
