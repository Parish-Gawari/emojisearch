/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./../SearchBar/SearchBar.module.css";
import emojis from "../../emojiData/emoji.json";

const SearchBar = ({ searchChangeHandler }) => {
  const searchHandler = (e) => {
    searchChangeHandler(e.trim());
  };
  return (
    <center className={styles.main}>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => searchHandler(e.target.value)}
      />
    </center>
  );
};

export default SearchBar;
