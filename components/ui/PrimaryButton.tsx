import { View, Text, Pressable, StyleSheet } from "react-native";
import { ButtonProps } from "./types";
import Colors from "../../constant/colors";

const PrimaryButton = (props: ButtonProps) => {
  const { children, onPress } = props;

  const onPressHandler = () => {
    onPress();
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
