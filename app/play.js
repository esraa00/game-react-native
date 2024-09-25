import { useState, useEffect, useMemo, useContext } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";
import { GameContext } from "../context/gameContext";
import { router } from "expo-router";

function generateRandomBetween(min, max, exclude) {
  const rnd = Math.floor(Math.random() * (max - min)) + min;

  if (rnd === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rnd;
  }
}

const minBoundary = 1;
const maxBoundary = 100;
const lowerDirection = "lower";
const higherDirection = "higher";
let currentMinBoundary = minBoundary;
let currentMaxBoundary = maxBoundary;

function GameScreen() {
  const { width } = useWindowDimensions();
  const { gameOverHandler, numberPicked } = useContext(GameContext);
  const initialGuess = useMemo(
    () => generateRandomBetween(minBoundary, maxBoundary, numberPicked),
    []
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === numberPicked) {
      gameOverHandler(guessRounds.length);
      router.navigate("/game-over");
    }
  }, [currentGuess, numberPicked]);

  useEffect(() => {
    currentMinBoundary = minBoundary;
    currentMaxBoundary = maxBoundary;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === lowerDirection && currentGuess < numberPicked) ||
      (direction === higherDirection && currentGuess > numberPicked)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === lowerDirection) {
      currentMaxBoundary = currentGuess;
    } else {
      currentMinBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      currentMinBoundary,
      currentMaxBoundary
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher Or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler(higherDirection)}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler(lowerDirection)}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler(higherDirection)}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler(lowerDirection)}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.flatListContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem guess={item} round={guessRoundsListLength - index}>
              {item}
            </GuessLogItem>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  instructionText: { marginBottom: 12 },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  flatListContainer: {
    flex: 1,
    padding: 16,
  },
});
