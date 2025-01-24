
export const isStepTwoValid = (data) => {
    const { email, phoneNumber } = data
    const errors = {};
    let isValid = true;
    if (email.length <= 1) {
        errors.email = "Username must contain at least 2 character"
        isValid = false;
    };
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address";
        isValid = false;
    }
    if (phoneNumber) {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!phoneRegex.test(phoneNumber)) {
            errors.phoneNumber = "This must be number";
            isValid = false;
        }
    }

    if (phoneNumber) {
        const phoneRegex = /^[0-9]{8}$/;
        if (!phoneRegex.test(phoneNumber)) {
            errors.phoneNumber = "Phone number must be exactly 8 digits";
            isValid = false;
        }
    }
    return { isValid, errors }
}
