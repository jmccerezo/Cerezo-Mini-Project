import * as actions from "../modules/actionType";

const initState = {
  scores: [{ id: 1, name: "John Doe", score: "100" }],
  openModal: false,
  playerData: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SUBMIT_SCORE:
      return { ...state, scores: [...state.scores, action.payload] };
    case actions.DELETE_SCORE:
      return {
        ...state,
        scores: state.scores.filter((val) => val.id != action.payload),
      };
    case actions.OPEN_MODAL:
      return { ...state, openModal: action.payload };
    case actions.GET_PLAYER_DATA:
      return { ...state, playerData: action.payload.httpRes };
    default:
      return state;
  }
};
