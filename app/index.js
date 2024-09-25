import { useState, useCallback, useContext } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { GameContext } from "../context/gameContext";
import { router } from "expo-router";

const maxNumber = 99;
const minNumber = 1;

function StartGameScreen() {
  const { setNumberPicked } = useContext(GameContext);
  const { height } = useWindowDimensions();
  const [enteredNumber, setEnteredNumber] = useState("");

  const enteredNumberChangeHandler = useCallback((enteredNumber) => {
    setEnteredNumber(enteredNumber);
  }, []);

  const resetInput = useCallback(() => {
    setEnteredNumber("");
  }, []);

  function clickConfirmButtonHandler() {
    const chosenNumber = parseInt(enteredNumber);
    console.log({ chosenNumber });
    if (
      isNaN(chosenNumber) ||
      chosenNumber > maxNumber ||
      chosenNumber < minNumber
    ) {
      Alert.alert(
        "invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Ok",
            style: "destructive",
            onPress: resetInput,
          },
        ]
      );
      return;
    }
    setNumberPicked(chosenNumber);
    router.navigate("/play");
  }

  const marginTop = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              value={enteredNumber}
              style={styles.input}
              maxLength={2}
              selectionColor={Colors.accent500}
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={enteredNumberChangeHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={clickConfirmButtonHandler}>
                  Confirm
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;
// this will get executed once when this component is rendered even on rerender, use the imported hook instead
// to react to any orientation change
// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    cursor: Colors.accent500,
    marginVertical: 8,
    height: 50,
    fontSize: 32,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
