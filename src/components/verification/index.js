import React, { useState } from "react";

const Validation = ({ state, history, changeValidationFlag }) => {
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const { name, email, password } = state;

    const handleSubmit = e => {
        e.preventDefault();
        if (confirmedPassword !== password) {
            return console.log("passwords do not match");
        }
        history.push("/confirmation");
        changeValidationFlag();
    };
    return (
        <div style={{ width: "500px", margin: "0 auto" }}>
            <h1>Welcome, {name}!</h1>
            <p>I see your email is {email}</p>
            <form onSubmit={handleSubmit}>
                <div>Please confirm your password</div>
                <input
                    type="password"
                    value={confirmedPassword}
                    onChange={e => setConfirmedPassword(e.target.value)}
                    placeholder="Confirm password"
                />
                <button>CONFIRM</button>
            </form>
        </div>
    );
};

export default Validation;
