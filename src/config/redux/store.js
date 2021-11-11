const {createStore} = require('redux');

const initalState = {
    dataBlog : [],
    name : 'Saut Manurung',
}
const reducer = (state = initalState, action) => {
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state, 
            dataBlog : action.payload,
        }
    }
    if(action.type === 'UPDATE_DATA_NAME'){
        return{
            ...state,
            name: 'Manurung'
        }
    }
    return state;
}
const store = createStore(reducer)

export default store;