import React from "react";
import { Helmet } from "react-helmet"
import { Hero, Banner, List } from "./components";
import { Nav, Footer } from "components";
import useGetList from "domains/home/core/hooks/useGetList";
import useAddVote from "domains/home/core/hooks/useAddVote";
import "./styles.scss";

export const Home = () => {
  const { data } = useGetList();
  const { addVote } = useAddVote();
  return (
    <>
      <Helmet>
        <title>Home - Vote </title>
        <meta name="description" content="Vote for What's your opinion for?" />
        <meta name="keywords" content="vote, opinion" />
      </Helmet>
      <Nav />
      <div className="home">
        <Hero />
        <div class="max-centered">
          <Banner />
          <main role="main">
            <List data={data} onVote={addVote} />
          </main>
          <Banner type="bottom" />
          <hr />
          <Footer />
        </div>
      </div>
    </>
  );
};
