import { createAction } from "@ngrx/store";

const increaseCounter = createAction("Increase Counter");
const decreaseCounter = createAction("Decrease Counter");
const resetCounter = createAction("Reset Counter");

export{
    increaseCounter,
    decreaseCounter,
    resetCounter
}