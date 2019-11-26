import React from "react";
import { StyleSheet, css } from "aphrodite";

import { ETimeActionType } from "../../../reducers/timeInput";
import { useContextReducer } from "../../../context";
import { useInterval } from "../../../hooks/setInterval";

const {
  CHANGE_HOUR_FIRST_DIGIT,
  CHANGE_HOUR_SECOND_DIGIT,
  CHANGE_MINUTE_FIRST_DIGIT,
  CHANGE_MINUTE_SECOND_DIGIT,
  CHANGE_SECOND_FIRST_DIGIT,
  CHANGE_SECOND_SECOND_DIGIT,
  DECREASE_TIME
} = ETimeActionType;

const Time: React.FC = () => {
  const {
    timeInput: [{ hour, minute, second }, dispatchTime],
    stage: [stage]
  } = useContextReducer();

  useInterval(
    () => dispatchTime({ type: DECREASE_TIME }),
    (hour === "00" && minute === "00" && second === "00") ||
      stage !== "counting"
      ? null
      : 1000
  );

  const actionSelectField = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const isNumber = (value: string): boolean => {
    return /^\d$/.test(value);
  };

  // handle weird padded value when input is not expected
  const getInputValue = (rawValue: string): string => {
    return rawValue.length === 2 && isNumber(rawValue[0])
      ? rawValue[1]
      : rawValue;
  };

  const actionFocusToNextInput = (
    event: React.FormEvent<HTMLInputElement>,
    dispatchType: ETimeActionType
  ) => {
    const target = event.target as EventTarget & HTMLInputElement;

    const form = target.form as HTMLFormElement;
    const nextInput = form.elements[dispatchType + 1] as
      | HTMLInputElement
      | HTMLButtonElement;

    const value = getInputValue(event.currentTarget.value);
    if (!isNumber(value)) return;

    if (nextInput instanceof HTMLInputElement) nextInput.focus();
    else setTimeout(() => nextInput.focus());
  };

  const actionChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    maxValue: number,
    dispatchType: ETimeActionType
  ) => {
    const value = getInputValue(event.target.value);

    if (!isNumber(value)) return;
    if (parseInt(value) > maxValue) return;
    dispatchTime({
      type: dispatchType,
      payload: value
    });
  };

  const actionCheckPressedKey = (
    event: React.KeyboardEvent<HTMLInputElement>,
    dispatchType: ETimeActionType
  ) => {
    const target = event.target as EventTarget & HTMLInputElement;
    const form = target.form as HTMLFormElement;

    if (event.key === "Enter") {
      const selection = window.getSelection();
      if (selection) selection.removeAllRanges();
    } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      const nextInput = form.elements[dispatchType + 1] as
        | HTMLInputElement
        | HTMLButtonElement;
      const prevInput = form.elements[dispatchType - 1] as HTMLInputElement;

      if (event.key === "ArrowRight" && nextInput instanceof HTMLInputElement) {
        nextInput.focus();
        setTimeout(() => nextInput.select());
      }
      if (event.key === "ArrowLeft" && prevInput instanceof HTMLInputElement) {
        prevInput.focus();
        setTimeout(() => prevInput.select());
      }
    }
  };

  const renderInput = (
    initValue: string,
    dispatchType: ETimeActionType,
    maxValue: number
  ) => (
    <input
      className={css(styles.input)}
      type="text"
      onFocus={actionSelectField}
      onInput={event => actionFocusToNextInput(event, dispatchType)}
      onChange={event => actionChangeValue(event, maxValue, dispatchType)}
      onKeyDown={event => actionCheckPressedKey(event, dispatchType)}
      value={initValue}
      disabled={stage === "counting"}
    />
  );

  const renderHourInput = () => (
    <div className={css(styles.inputContainer)}>
      {renderInput(hour[0], CHANGE_HOUR_FIRST_DIGIT, 9)}
      {renderInput(hour[1], CHANGE_HOUR_SECOND_DIGIT, 9)}
    </div>
  );

  const renderMinuteInput = () => (
    <div className={css(styles.inputContainer)}>
      {renderInput(minute[0], CHANGE_MINUTE_FIRST_DIGIT, 5)}
      {renderInput(minute[1], CHANGE_MINUTE_SECOND_DIGIT, 9)}
    </div>
  );

  const renderSecondInput = () => (
    <div className={css(styles.inputContainer)}>
      {renderInput(second[0], CHANGE_SECOND_FIRST_DIGIT, 5)}
      {renderInput(second[1], CHANGE_SECOND_SECOND_DIGIT, 9)}
    </div>
  );

  return (
    <div className={css(styles.inputsContainer)}>
      {renderHourInput()}
      <span className={css(styles.separator)}>:</span>
      {renderMinuteInput()}
      <span className={css(styles.separator)}>:</span>
      {renderSecondInput()}
    </div>
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  separator: {
    fontSize: 100,
    color: "var(--tertiary)",
    margin: "0 15px",

    "@media (min-width: 320px) and (max-width: 480px)": {
      fontSize: 50,
      margin: "0 7.5px"
    }
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: 225,

    "@media (min-width: 768px) and (max-width: 1024px)": {
      width: 175
    },
    "@media (min-width: 320px) and (max-width: 480px)": {
      width: 75
    },
    "@media (max-width: 320px)": {
      width: 65
    }
  },
  input: {
    height: 150,
    width: 100,
    fontSize: 150,
    border: "none",
    borderBottom: "5px solid var(--primary)",
    textAlign: "center",
    backgroundColor: "transparent",
    color: "var(--tertiary)",
    outline: "none",
    transition:
      "border 0.25s ease-in, background-size .25s ease-in-out, color .15s ease-out",
    backgroundImage:
      "linear-gradient(to top, var(--tertiary) 50%, var(--tertiary) 50%)",
    backgroundRepeat: "repeat-x",
    backgroundSize: "0% 0%",
    caretColor: "transparent",

    ":disabled": {
      borderColor: "var(--secondary)"
    },

    ":focus": {
      backgroundSize: "100% 100%",
      color: "white"
    },

    "::selection": {
      backgroundColor: "transparent"
    },

    "@media (min-width: 768px) and (max-width: 1024px)": {
      width: 75,
      fontSize: 125
    },
    "@media (min-width: 320px) and (max-width: 480px)": {
      width: 30,
      height: 50,
      fontSize: 50,
      borderWidth: 2.5
    },
    "@media (max-width: 320px)": {
      width: 25,
      fontSize: 45
    }
  }
});

export default Time;
