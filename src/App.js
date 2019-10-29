import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
    updateName,
    updateEmail,
    updatePassword,
    changeValidationFlag,
    resetFields
} from "./store/actionCreators";
import Form from "./components/form";
import "./App.css";
import Verification from "./components/verification";
import Confirmation from "./components/confirmation";

function App(props) {
    return (
        <div className="App">
            <Switch location={props.history.location}>
                <Route exact path="/" render={() => <Form {...props} />} />
                <Route path="/verification" render={() => <Verification {...props} />} />
                <Route
                    path="/confirmation"
                    render={() => <Confirmation resetFields={props.resetFields} />}
                />
            </Switch>
        </div>
    );
}

const mapStatetoProps = state => ({ state });

const actionCreators = {
    updateName,
    updateEmail,
    updatePassword,
    changeValidationFlag,
    resetFields
};

export default connect(
    mapStatetoProps,
    actionCreators
)(withRouter(App));
