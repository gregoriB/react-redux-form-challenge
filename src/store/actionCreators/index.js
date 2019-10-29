export const updateName = payload => ({
    type: "UPDATE_NAME",
    payload
});

export const updateEmail = payload => ({
    type: "UPDATE_EMAIL",
    payload
});

export const updatePassword = payload => ({
    type: "UPDATE_PASSWORD",
    payload
});

export const changeValidationFlag = () => ({
    type: "CHANGE_VALIDATION_FLAG"
});

export const resetFields = () => ({
    type: "RESET_FIELDS"
});
