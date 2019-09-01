import { CHANGE_USER } from "../types";

const initialState = {
    userType: "Booker"
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER:
            return {
                ...state,
                userType: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;