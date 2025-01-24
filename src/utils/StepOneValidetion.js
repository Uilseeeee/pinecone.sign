import { stringify } from "postcss";

export const isStepOneValid = (data) => {
    const { firstName, lastName, userName, email } = data
    const errors = {};
    let isValid = true;
    if (firstName.length <= 1) {
        errors.firstName = "First name must contain at least 2 character"
        isValid = false;
    };
    if (lastName.length <= 1) {
        errors.lastName = "Lastname name must contain at least 2 character"
        isValid = false;
    };
    if (userName.length <= 1) {
        errors.userName = "Username must contain at least 2 character"
        isValid = false;
    };
    return { isValid, errors }
}