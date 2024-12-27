import { StyleSheet, Text, Platform } from "react-native";
import { TitleProps } from "./types";
import Colors from "../../constant/colors";

const Title = (props: TitleProps) => {
  const { children } = props;
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ ios: 1, android: 2 }),
    borderRadius: 8,
    borderColor: "white",
    padding: 12,
    maxWidth: "86%",
    minWidth: "86%",
  },
});
