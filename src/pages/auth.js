import { useState } from "react";
import SignUp from "../components/home/signup";
import Login from "../components/home/login";
import classes from "./auth.module.css";
const AuthPagge = () => {
  const [sign, setsign] = useState(true);
  const signupHandler = () => {
    setsign(true);
  };
  const loginHandler = () => {
    setsign(false);
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.head}>Travel to your favorite places with us</h1>
      <div className={classes.buts}>
        <button onClick={signupHandler}>SignUp</button>
        <button onClick={loginHandler}>Login</button>
      </div>
      {sign ? <SignUp /> : <Login />}
    </div>
  );
};
export default AuthPagge;
