import React from "react";
import Podcast from "./Podcast";

const podcasts = [
  {
    title: "Geeky Show",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show1",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show2",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show3",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show4",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show5",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show6",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show7",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show8",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show9",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show10",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show11",
    desc: "Podcast for geeks",
  },
  {
    title: "Geeky Show12",
    desc: "Podcast for geeks",
  },
];

const Home = () => {
  return <Podcast podcast={podcasts} />;
};

export default Home;
