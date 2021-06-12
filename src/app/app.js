import { Nav, Footer } from "components";
import { Home } from "domains/home";
import "./styles.scss";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <div class="max-centered">
        <Footer />
      </div>
    </>
  );
};

export default App;
