import React from "react";
import { Router, Route } from "react-router-dom"
import history from "./History"
import LoginSingUpComponent from "./Components/SingIn-and-singUp"
import MyclassComponent from "./Components/Tution-class-room/my-class"
import AllclassComponent from "./Components/Tution-class-room/all-classes"
import axios from "axios"


class mainComponent extends React.Component {
    // componentWillMount() {
    //     let checkAouth = {
    //         checkAouthToken: localStorage.getItem("aouthToken")
    //     }
    //     setInterval(() => {
    //         if (checkAouth !== null) {
    //             axios.post("http://localhost:8000/user/refreshToken",
    //                 checkAouth,
    //                 {
    //                     headers: { checkAouth }
    //                 }).then((res) => {
    //                     let newToken = res.data.newToken;
    //                     localStorage.setItem("aouthToken",
    //                         JSON.stringify(newToken))
    //                 }).catch(() => { })
    //         }
    //     }, 600000)
    // }


    componentDidMount() {
        let checkAouth = localStorage.getItem("aouthToken")
        if (checkAouth === null) {
            history.push("/login")
        }
        else {
            history.push("/myclass")
        }
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

const Routers = () => {
    return (
        <Router history={history} >
            <div>
                <Route exact path="/" component={mainComponent} />
                <Route exact path="/login" component={LoginSingUpComponent} />
                <Route exact path="/myclass" component={MyclassComponent} />
                <Route exact path="/allclasses" component={AllclassComponent} />
            </div>
        </Router>
    )
}

export default Routers