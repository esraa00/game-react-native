import { createContext, useState, useCallback } from "react";
import { router } from "expo-router";
export const GameContext = createContext({});

export default function GameContextProvider({ children }) {
  const [numberPicked, setNumberPicked] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  const gameOverHandler = useCallback((rounds) => {
    setGameIsOver(true);
    setRounds(rounds);
  }, []);

  const startNewGameHandler = useCallback(() => {
    setNumberPicked(null);
    setGameIsOver(false);
    setRounds(0);
    router.navigate("/");
  }, []);

  const value = {
    numberPicked,
    gameIsOver,
    rounds,
    setNumberPicked,
    gameOverHandler,
    startNewGameHandler,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
