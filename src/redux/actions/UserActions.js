import { CHANGE_USER } from "../types";

export const changeUser = (user) => {
    return {
        type: CHANGE_USER,
        payload: user
    }
}