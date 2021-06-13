import { useDispatch } from "react-redux";
import HomeActions from "domains/home/core/reducers/home.reducer";

const useAddVote = () => {
  const dispatch = useDispatch();

  const addVote = (name, vote) => {
    dispatch(HomeActions.addVote({ name, vote }));
  };

  return { addVote };
};

export default useAddVote;
