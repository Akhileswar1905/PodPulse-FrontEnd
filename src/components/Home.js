import React from "react";
import Podcast from "./Podcast";

const podcasts = [
  {
    title: "Geeky Show",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show",
    desc: "Podcast for geeks",
  },
];

const Home = () => {
  return <Podcast podcast={podcasts} />;
};

export default Home;
