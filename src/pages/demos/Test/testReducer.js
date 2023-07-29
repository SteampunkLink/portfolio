export const INCREASE_NUMBER = "INCREASE_NUMBER";
export const DECREASE_NUMBER = "DECREASE_NUMBER";
export const RESET_NUMBER = "RESET_NUMBER";

const testReducer = (state, action) => {
  switch (action.type) {
    case INCREASE_NUMBER: 
      return {
        ...state,
        magicNumber: state.magicNumber + 1
      }
    case DECREASE_NUMBER:
      return {
        ...state,
        magicNumber: state.magicNumber - 1
      }
    case RESET_NUMBER:
      return {
        magicNumber: 12
      }
    default:
      return { state }
  }
};

export default testReducer;