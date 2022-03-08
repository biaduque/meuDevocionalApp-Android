import ActionTypes from "../actions/action-types";

const INITIAL_STATE = {
    activeTab: "Leitura",
}

const appReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case ActionTypes.app.SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: payload
            }
        default:
            return state;
    }
}


export {
    appReducer
};