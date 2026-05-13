import AsyncStorage from "@react-native-async-storage/async-storage";
import {create } from "zustand";
import {createJSONStorage ,persist} from "zustand/middleware";


export const useTaskFilterStore = create(
    persist(
        (set) => ({
            taskDoneState
        }),


    ),
);