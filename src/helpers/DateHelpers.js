import moment from "moment";
import { DatePickerAndroid } from 'react-native';

export function slicingMomentDateUsingAt(date) {
    if (moment(date).calendar().includes(" at ")) {
        return moment(date).calendar().slice(0, moment(date).calendar().indexOf(" at "))
    } else return moment(date).calendar()
}

export const pickDateForOrder = async () => {
    try {
        const { action, year, month, day } = await DatePickerAndroid.open({
            date: new Date(),
            minDate: new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction)
            return new Date(year, month, day).toLocaleDateString();
        else return { cancelled: true }
    } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
    }
}
