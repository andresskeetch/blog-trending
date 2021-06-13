import { createReducer, createActions } from "reduxsauce";
import participantsList from "assets/data.json";
console.log(participantsList.data);
const { Types, Creators } = createActions({
  addVote: ["payload"],
});

export const homeTypes = Types;
export default Creators;

const INITIAL_STATE = {
  participants: participantsList.data,
};

const addVote = (state, { payload }) => {
  const participantSelected = state.participants.find(
    (participant) => participant.name === payload.name
  );

  if (payload.vote === "positive") {
    participantSelected.votes.positive++;
  } else {
    participantSelected.votes.negative++;
  }
  return {
    participants: state.participants,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_VOTE]: addVote,
});
