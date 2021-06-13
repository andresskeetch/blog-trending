import { useSelector } from "react-redux";

const useGetList = () => {
  const { home } = useSelector((state) => state);

  return { data: home.participants };
};

export default useGetList;
