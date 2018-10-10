import { StyleSheet } from "react-native";

import { THEME } from "../../constants";

const { WHITE } = THEME;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: WHITE,
    flex: 1,
    justifyContent: "space-between"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  logo: {
    alignSelf: "center",
    flex: 1,
    resizeMode: "contain",
    width: "100%"
  }
});

export default styles;
