
const ADD = 'ADD'
const SUB = 'SUB'


//creator
export const add = (number = 1) => ({
    type: 'ADD',
    number
})
export const sub = (number = 1) => ({
    type: 'SUB',
    number
})

//tworzymy switch ktory jest w reducer
//przyjumje stan i akcje

const INITIAL_STATE = {
    counterValue: 99,
    open: false,
    list: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD':
            //return Object.assign({}, state,{counterValue:state.counterValue+1})
            return {
                ...state,
                counterValue: state.counterValue + action.number
            }
        case 'SUB':
            return {
                ...state,
                counterValue: state.counterValue - action.number
            }
        default:
            return state;
    }
}
export default reducer;
