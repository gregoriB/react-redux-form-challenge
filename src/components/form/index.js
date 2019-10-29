import React from "react";
import { validateEmail, validatePassword, validateName } from "../../helpers/functions";

const Form = ({ state, updateName, updateEmail, updatePassword, history, changeValidationFlag }) => {
    const { name, email, password } = state;
    const handleSubmit = e => {
        e.preventDefault();
        if (!(validateName(name) && validateEmail(email) && validatePassword(password))) {
            return console.log("validation failed");
        }
        history.push("/verification");
        changeValidationFlag();
    };
    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={e => updateName(e.target.value)}
            />
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={e => updateEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password must at least one capital letter, and ! or ?"
                value={password}
                onChange={e => updatePassword(e.target.value)}
            />
            <button>SUBMIT</button>
        </form>
    );
};

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        maxWidth: "400px"
    }
};

export default Form;
