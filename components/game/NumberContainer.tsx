import { View, Text, StyleSheet } from "react-native";
import { NumberContainerProps } from "./types";
import Colors from "../../constant/colors";

const NumberContainer = (props: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "86%",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
    fontSize: 36,
  },
});
