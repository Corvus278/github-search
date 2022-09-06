import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./rootState";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
