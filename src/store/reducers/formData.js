const initialState = {
    name: "",
    email: "",
    password: "",
    isValid: false
};

export default function formData(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_NAME":
            return (state = {
                ...state,
                name: action.payload
            });
        case "UPDATE_EMAIL":
            return (state = {
                ...state,
                email: action.payload
            });
        case "UPDATE_PASSWORD":
            return (state = {
                ...state,
                password: action.payload
            });
        case "CHANGE_VALIDATION_FLAG":
            return (state = {
                ...state,
                isValid: !state.isValid
            });
        case "RESET_FIELDS":
            return (state = initialState);
        default:
            return state;
    }
}
