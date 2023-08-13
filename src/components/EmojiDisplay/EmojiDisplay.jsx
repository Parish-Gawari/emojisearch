/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import emojis from "../../emojiData/emoji.json";
import styles from "./../EmojiDisplay/EmojiDisplay.module.css";

const EmojiDisplay = ({ query, isSearch }) => {
  // const data = emojis.map((value, index) => {
  //   return (
  //     <li key={index} className={styles.listContainer}>
  //       <span> {value.emoji}</span>
  //       <span> {value.description}</span>
  //       <hr />
  //     </li>
  //   );
  // });
  return (
    <>
      <ul>
        {!isSearch &&
          emojis.map((value, index) => {
            return (
              <li key={index} className={styles.listContainer}>
                <span> {value.emoji}</span>
                <span> {value.description}</span>
                <hr />
              </li>
            );
          })}
        {isSearch &&
          emojis.map((value, index) => {
            return (
              <li
                key={index}
                className={styles.listContainer}
                style={
                  value.tags.includes(query)
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <span> {value.emoji}</span>
                <span> {value.description}</span>
                <hr />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default EmojiDisplay;
