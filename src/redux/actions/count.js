import {ADD,MINUS,RESET} from "../countant"
export const ADDCOUNT = data =>({type:ADD,data})
export const MINUSCOUNT = data =>({type:MINUS,data})
export const RESETCOUNT = data =>({type:RESET,data})