import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignInSide from "../Component/Home"
import SignUppSide from "../Screens/signup"
function Routes() {
    return (
        <Router>
            <SignInSide/>
            <Switch>
                <Route path="/sign-up" >
                    <SignUppSide/>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes;