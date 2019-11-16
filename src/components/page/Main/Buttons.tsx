import React from "react";
import { StyleSheet, css } from "aphrodite";

import { useContextReducer } from "../../../context";
import { EStageActionType } from "../../../reducers/stage";

const Buttons: React.FC = () => {
  const {
    stage: [stage, dispatchStage],
    timeInput: [{ hour, minute, second }],
    counting: [isCounting, dispatchCounting]
  } = useContextReducer();

  const actionStageToCount = () => {
    if (hour === "00" && minute === "00" && second === "00") return;
    dispatchStage({ type: EStageActionType.TO_COUNT_STAGE });
  };

  const renderCountingButton = () => {
    if (isCounting)
      return (
        <button
          className={css(styles.button)}
          onClick={() => dispatchCounting("pause")}
        >
          PAUSE
        </button>
      );
    return (
      <button
        className={css(styles.button)}
        onClick={() => dispatchCounting("resume")}
      >
        RESUME
      </button>
    );
  };

  const renderStartButton = () => {
    return (
      <button className={css(styles.button)} onClick={actionStageToCount}>
        START
      </button>
    );
  };

  return (
    <div className={css(styles.buttonContainer)}>
      {stage === "input" && renderStartButton()}
      {stage === "count" && renderCountingButton()}
    </div>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    textAlign: "center",
    width: "50vw",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    backgroundColor: "transparent",
    color: "var(--tertiary)",
    borderRadius: 5,
    border: "2.5px solid var(--tertiary)",
    padding: "0 15px",
    height: 50,
    width: 125,
    marginTop: 75,
    cursor: "pointer",
    fontSize: 20,
    outline: "none",
    transition: "color .25s, background-color .25s",

    ":hover": {
      backgroundColor: "var(--tertiary)",
      color: "var(--secondary)"
    },

    ":active": {
      backgroundColor: "var(--tertiary)",
      color: "var(--secondary)"
    },

    "@media (min-width: 320px) and (max-width: 480px)": {
      height: 40,
      width: 100,
      fontSize: 16,
      marginTop: 50
    }
  }
});

export default Buttons;
