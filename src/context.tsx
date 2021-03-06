import React, { createContext, useContext, FC, useMemo } from "react";

import {
  useTimeInputReducer,
  ITimeState,
  ITimeAction,
} from "./reducers/timeInput";
import {
  useStageReducer,
  TStageState,
  IStageAction,
} from './reducers/stage'

interface IContextProps {
  timeInput: [ITimeState, React.Dispatch<ITimeAction>];
  stage: [TStageState, React.Dispatch<IStageAction>];
}

export const Context = createContext({} as IContextProps);

export const ContextProvider: FC = ({ children }) => {
  const useTimeInput = useTimeInputReducer();
  const useStage = useStageReducer();

  const contextValue = useMemo(
    () => ({ timeInput: useTimeInput, stage: useStage }),
    [useTimeInput, useStage]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
