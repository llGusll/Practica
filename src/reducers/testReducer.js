import { types } from "../types/types";

const initilState = {
    rtest: [],
    active: null
}

export const testReducer = (state=initilState , action) => {
    switch(action.type) {
        
        case types.rTestActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.rTestLoad:
            return {
                ...state,
                rtest: [...action.payload]
            }

        default: 
        return state;
    }
}