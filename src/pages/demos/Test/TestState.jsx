import { useReducer } from "react";
import TestContext from "./testContext";
import testReducer, { RESET_NUMBER, INCREASE_NUMBER, DECREASE_NUMBER } from "./testReducer";

const TestState = (props) => {
  const initialState = {
    magicNumber: 12
  };

  const [state, dispatch] = useReducer(testReducer, initialState);

  const increaseMagicNumber = () => {
    dispatch({ type: INCREASE_NUMBER });
  };

  const decreaseMagicNumber = () => {
    dispatch({ type: DECREASE_NUMBER });
  };

  const resetMagicNumber = () => {
    dispatch({ type: RESET_NUMBER });
  };

  return (
    <TestContext.Provider
      value={{
        magicNumber: state.magicNumber,
        increaseMagicNumber,
        decreaseMagicNumber,
        resetMagicNumber
      }}>
        {props.children}
    </TestContext.Provider>
  )
}

export default TestState;