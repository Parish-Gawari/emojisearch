/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import EmojiDisplay from "../components/EmojiDisplay/EmojiDisplay";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const searchChangeHandler = (emote) => {
    setQuery(emote);
    if (emote.trim().length !== 0) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  return (
    <>
      <SearchBar searchChangeHandler={searchChangeHandler} />
      <EmojiDisplay query={query} isSearch={isSearch} />
    </>
  );
};

export default Home;
