import { store } from "libs/store/store";
import { Provider } from "react-redux";
import { Home } from "domains/home";
import "./styles.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
