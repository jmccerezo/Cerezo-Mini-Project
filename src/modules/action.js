import * as actions from "./actionType";
import axios from "axios";

export const onSubmitScore = (score) => {
  return { type: actions.SUBMIT_SCORE, payload: score };
};

export const onDeleteScore = (id) => {
  return { type: actions.DELETE_SCORE, payload: id };
};

export const onOpenModal = (bool) => {
  return { type: actions.OPEN_MODAL, payload: bool };
};

export const getPlayerData = () => {
  const options = {
    method: "GET",
    url: "https://sofascores.p.rapidapi.com/v1/players/data",
    params: { player_id: "12994" },
    headers: {
      "X-RapidAPI-Key": "b82bf3a688msh24970c954cb0a42p1c5781jsn303721ce4689",
      "X-RapidAPI-Host": "sofascores.p.rapidapi.com",
    },
  };

  return (dispatch) => {
    axios
      .request(options)
      .then((res) => {
        console.log("RESPONSE", res);
        dispatch(
          ((data) => {
            return {
              type: actions.GET_PLAYER_DATA,
              payload: { httpRes: data },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
};
