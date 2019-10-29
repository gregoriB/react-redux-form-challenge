import React from "react";
import { Link } from "react-router-dom";

const Confirmation = ({ resetFields }) => {
    resetFields();
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Registration Complete!</h1>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default Confirmation;
