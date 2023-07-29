import { useContext } from "react";
import TestContext from "./testContext";

import "./test.scss";

const Test = () => {
  const testContext = useContext(TestContext);
  const { magicNumber, increaseMagicNumber, decreaseMagicNumber, resetMagicNumber } = testContext;
  return (
    <div className="test-container">
      <div>
        This is just a test!
        The magic number is currently {magicNumber}.
      </div>
      <button onClick={() => increaseMagicNumber()}>+</button>
      <button onClick={() => resetMagicNumber()}>reset</button>
      <button onClick={() => decreaseMagicNumber()}>-</button>
    </div>
  )
}

export default Test
