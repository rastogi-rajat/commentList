import {createStore} from "redux";
import reducer from "../reducer";

function saveToLocalStorage(state) {
    try {
        const stringifyState = JSON.stringify(state);
        localStorage.setItem('state',stringifyState)
    } catch(e) {
        console.log(e)
    }
}

function loadFromLocalStorage () {
    try {
        const strinifyState = localStorage.getItem("state");
        if(strinifyState === null) return undefined
        return JSON.parse(strinifyState)
    } catch(e) {
        console.log(e)
        return undefined
    }
}

const oldState = loadFromLocalStorage();

const store = createStore(reducer,oldState);
store.subscribe(()=> saveToLocalStorage(store.getState()))
export default store;