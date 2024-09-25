import { useEffect } from "react";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GameContextProvider from "../context/gameContext";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // Keep the splash screen visible while we fetch resources

  const [loaded] = useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [loaded]);

  return (
    <>
      <StatusBar
        style="light"
        translucent={true}
        backgroundColor="transparent"
      />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("../assets/images/background.png")}
          // this will make sure the image cover all the space, by zooming in or out without distraught
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.androidSafeArea}>
            <GameContextProvider>
              <Slot />
            </GameContextProvider>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};
export default RootLayout;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  androidSafeArea: {
    flex: 1,
  },
});
