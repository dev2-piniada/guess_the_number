import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constant/colors";
import GameOverScreen from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const pickNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numOfRounds: number) => {
    setGameIsOver(true);
    setGuessRounds(numOfRounds);
  };

  const onRestartGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGame onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        numberOfRounds={guessRounds}
        userNumber={userNumber}
        onRestart={onRestartGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
