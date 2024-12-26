import { StyleSheet, Text } from "react-native";
import { InstructionsTextProps } from "./types";
import Colors from "../../constant/colors";

const InstructionText = (props: InstructionsTextProps) => {
  const { children } = props;
  return <Text style={styles.instructionsText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionsText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
