import React from "react";
import { Hero, Banner, List } from "./components";
import "./styles.scss";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <div class="max-centered">
        <Banner />
        <main role="main">
          <List />
        </main>
        <Banner type="bottom" />
        <hr />
      </div>
    </div>
  );
};
